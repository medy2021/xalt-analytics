// utils/hubspot.ts

export interface HubSpotSubmissionData {

    name: string;
  
    email: string;
  
    organization?: string;
  
    details?: string;
  
    [key: string]: any; // For any additional fields
  
  }
   
  export async function submitToHubSpot(formData: HubSpotSubmissionData): Promise<Response> {
  
    const portalId = '242448665'; // Replace with your actual HubSpot portal ID
  
    const formGuid = 'd7702fb0-b52b-4df3-864f-7f7a6ec6e74b'; // Replace with your actual HubSpot form GUID
   
    const endpoint = `https://share-na2.hsforms.com/113AvsLUrTfOGT396bsbnSw40cil5`;
   
    const payload = {
  
      fields: Object.entries(formData).map(([name, value]) => ({ name, value })),
  
      context: {
  
        pageUri: window.location.href,
  
        pageName: document.title,
  
      },
  
    };
   
    return fetch(endpoint, {
  
      method: 'POST',
  
      headers: { 'Content-Type': 'application/json' },
  
      body: JSON.stringify(payload),
  
    });
  
  }
   