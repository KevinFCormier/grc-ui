/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
'use strict'

import React from 'react'
import { withRouter } from 'react-router-dom'
import { RESOURCE_TYPES } from '../../lib/shared/constants'
import { typedResourcePageWithListAndDetails } from '../components/common/ResourcePage'
import CreateResourceModal from '../components/modals/CreateResourceModal'
import { createResources } from '../actions/common'
import PolicyTemplates from '../components/common/PolicyTemplates'
import ResourceTableModule from '../components/common/ResourceTableModuleFromProps'

// TODO: create new type call HCM_COMPLIANCE to hand create
const handleCreateResource = (dispatch, yaml) => dispatch(createResources(RESOURCE_TYPES.HCM_POLICIES, yaml))

const createComplianceModal = <CreateResourceModal
  key='createPolicy'
  headingTextKey='actions.create.policy'
  submitBtnTextKey='actions.create.policy'
  onCreateResource={ handleCreateResource }
  resourceDescriptionKey='modal.createresource.policy'
/>

export default withRouter(typedResourcePageWithListAndDetails(
  RESOURCE_TYPES.HCM_COMPLIANCES,
  ['overview'],
  [createComplianceModal],
  ['/compliancePolicy/:policyName/:policyNamespace', '/compliancePolicy/:policyName'],
  [<PolicyTemplates key='Compliance Templates' headerKey={'table.header.complianceTemplate'} editable={true} right />,
    <ResourceTableModule key='complianceStatus' definitionsKey='complianceStatus' />,
    <ResourceTableModule key='compliancePolicies' definitionsKey='compliancePolicies' />,
    <ResourceTableModule key='placementPolicies' definitionsKey='placementPolicyKeys' />,
    <ResourceTableModule key='placementBindings' definitionsKey='placementBindingKeys' />,]
))
