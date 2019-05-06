/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018, 2019. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
'use strict'
import {getDefaultSearchField, getDefaultSortField, getLink, getPrimaryKey, getSecondaryKey } from '../../../src-web/definitions/index'

// regular properties/selector/reducer testing
// compare the received and expect values
describe('definitions/index', () => {
  describe('#getDefaultSearchField', () => {
    it('should return the default search field of node', () => {
      const item = {
        list: 'HCMPolicyList',
        name: 'HCMPolicy'
      }
      expect(getDefaultSearchField(item)).toBe('metadata.name')
    })
  })

  describe('#getDefaultSortField', () => {
    it('should return the default sort field of node', () => {
      const item = {
        list: 'HCMPolicyList',
        name: 'HCMPolicy'
      }
      expect(getDefaultSortField(item)).toBe('metadata.name')
    })
  })

  describe('#getLink', () => {
    it('should return the link of node as /namespace/name', () => {
      const link = true
      const resource = {
        metadata: {
          namespace: 'namespace',
          name: 'name'
        }
      }
      expect(getLink(link, resource)).toBe('/namespace/name')
    })
    it('should return the link of node as /domain/host', () => {
      const link = 'domain/host'
      const resource = {
        domain: 'domain',
        host: 'host',
        metadata: {
          namespace: 'namespace',
          name: 'name'
        }
      }
      expect(getLink(link, resource)).toBe('/domain/host')
    })
  })

  describe('#getPrimaryKey', () => {
    it('should return the primary key of node', () => {
      const item = {
        list: 'HCMPolicyList',
        name: 'HCMPolicy'
      }
      expect(getPrimaryKey(item)).toBe('metadata.name')
    })
  })

  describe('#getSecondaryKey', () => {
    it('should return the secondary key of node', () => {
      const item = {
        list: 'HCMPolicyList',
        name: 'HCMPolicy'
      }
      expect(getSecondaryKey(item)).toBe('metadata.namespace')
    })
  })

  describe('#getURIKey', () => {
    //getURIKey not been used
  })
})
