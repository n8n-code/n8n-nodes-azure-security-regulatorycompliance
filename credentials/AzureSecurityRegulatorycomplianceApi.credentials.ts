import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSecurityRegulatorycomplianceApi implements ICredentialType {
        name = 'N8nDevAzureSecurityRegulatorycomplianceApi';

        displayName = 'Azure Security Regulatorycompliance API';

        icon: Icon = { light: 'file:../nodes/AzureSecurityRegulatorycompliance/azure-security-regulatorycompliance.png', dark: 'file:../nodes/AzureSecurityRegulatorycompliance/azure-security-regulatorycompliance.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Security Regulatorycompliance API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
