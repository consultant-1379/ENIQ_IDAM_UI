#!/bin/bash

IP_THRESHOLD_EXCEEDED="Qty of services reached available limit of IP addresses, no IP's left"
IP_THRESHOLD_OK="IP threshold check finished."

MAXIMUM_IPS=$(kubectl get nodes -o jsonpath='{.items[*].status.addresses[0].address}' | tr " " "\n" | sort --unique | grep "\n" -cvi)
SERVICE_IPS=$(kubectl get service --all-namespaces -o jsonpath='{.items[?(@.metadata.annotations.ericsson\.com/product-name=="Ingress Controller CR")].status.loadBalancer.ingress[*].ip}'| tr " " "\n"  | sort --unique | grep "\n" -cvi)

echo "Checking Services subnet IP's pool if there is at least one free IP"

FREE_IP_COUNT=$((MAXIMUM_IPS-SERVICE_IPS))

if [  ${FREE_IP_COUNT} -ge 1 ]
then
  echo "$IP_THRESHOLD_OK"
  echo "Free IP: $FREE_IP_COUNT, Max IP: $MAXIMUM_IPS, Used IP: $SERVICE_IPS"
  exit 0
else
  echo "$IP_THRESHOLD_EXCEEDED"
  echo "Free IP: $FREE_IP_COUNT, Max IP: $MAXIMUM_IPS, Used IP: $SERVICE_IPS"
  exit 1
fi
