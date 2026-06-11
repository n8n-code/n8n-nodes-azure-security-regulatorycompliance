import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSecurityRegulatorycompliance implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure Security Regulatorycompliance',
		name: 'N8nDevAzureSecurityRegulatorycompliance',
		icon: { light: 'file:./azure-security-regulatorycompliance.png', dark: 'file:./azure-security-regulatorycompliance.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure Security Center API specification for Microsoft.Security resource provider.',
		defaults: { name: 'Azure Security Regulatorycompliance' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSecurityRegulatorycomplianceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
