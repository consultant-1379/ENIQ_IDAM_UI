#!/bin/bash
set -e

ALL_IPS=$(kubectl get nodes -o jsonpath='{.items[*].status.addresses[0].address}' | sort --unique)
TAKEN_IPS=$(kubectl get service --all-namespaces -o jsonpath='{.items[?(@.metadata.annotations.ericsson\.com/product-name=="Ingress Controller CR")].status.loadBalancer.ingress[*].ip}' | sort --unique)

ALL_IPS_COUNT=$(echo $ALL_IPS | tr " " "\n" | grep "\n" -cvi)
TAKEN_IPS_COUNT=$(echo $TAKEN_IPS | tr " " "\n" | grep "\n" -cvi)

FREE_IP_COUNT=$((ALL_IPS_COUNT-TAKEN_IPS_COUNT))

if [  ${FREE_IP_COUNT} -ge 1 ]
then
  #create a file with all possible IP addresses in the system
  echo $ALL_IPS | tr " " "\n" | sort --unique > .bob/var.all-ips
  #create a file with all taken IP addresses in the system
  echo $TAKEN_IPS | tr " " "\n" | sort --unique > .bob/var.taken-ips
  #create a file that contains free IP addresses based on comparing previous two
  grep -v -F -f .bob/var.taken-ips .bob/var.all-ips > .bob/var.available-ips
  #get first free IP address from the file
  FREE_IP=$(head -n 1 .bob/var.available-ips)
  #return the first free IP address
  echo -n "$FREE_IP"
else
  echo "All available IP's are taken"
  exit 1
fi