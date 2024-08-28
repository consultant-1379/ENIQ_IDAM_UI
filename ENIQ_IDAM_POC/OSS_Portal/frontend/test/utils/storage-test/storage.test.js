import { expect } from '@open-wc/testing';
import storage from '../../../src/utils/storage.js';

describe('Unit test for storage module', () => {
  const DEFAULT_NAMESPACE = 'gui-aggregator-service';
  const DEFAULT_USER = 'defaultUser';
  const testKey = 'testKey';
  const testValue = 'test value';
  const testNamespace = 'my-app';
  const testUserName = 'test-user';
  const expectedDefaultKey = `${DEFAULT_NAMESPACE}/${DEFAULT_USER}/${testKey}`;

  before(() => {
    localStorage.clear();
  });

  after(() => {
    localStorage.clear();
  });

  it('should throw an Error when not initialized.', () => {
    expect(storage.set).to.throw();
    expect(storage.get).to.throw();
    expect(storage.remove).to.throw();
  });

  it('should use the default namespace and username when initialized without parameters', () => {
    storage.init();
    storage.set(testKey, testValue);

    expect(localStorage.length).to.be.eq(1);
    expect(localStorage.getItem(expectedDefaultKey)).not.to.be.null;
  });

  it('creating a new persisted item should use the provided namespace and username set in the init() method', () => {
    storage.init({ namespace: testNamespace, userName: testUserName });
    storage.set(testKey, testValue);

    expect(localStorage.length).to.be.eq(2);
    expect(localStorage.getItem(expectedDefaultKey)).not.to.be.null;
  });

  it('get() should return the previously set item', () => {
    expect(storage.get(testKey)).to.be.eq(testValue);
  });

  it('remove() should remove the previously set item if found', () => {
    const expectedKey = `${testNamespace}/${testUserName}/${testKey}`;
    const valueBeforeRemove = localStorage.getItem(expectedKey);
    storage.remove(testKey);
    expect(valueBeforeRemove).not.to.be.null;
    expect(localStorage.getItem(expectedKey)).to.be.null;
  });

  it('set() should be able to persist array', () => {
    const key = 'array';
    const expectedArrayKey = `${testNamespace}/${testUserName}/${key}`;
    const testArray = ['value1', 'value2', 'value3'];
    storage.set(key, testArray);

    expect(storage.get(key)).to.deep.equal(testArray);
    expect(JSON.parse(localStorage.getItem(expectedArrayKey))).to.deep.equal(testArray);
  });
});
