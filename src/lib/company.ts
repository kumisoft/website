export const company = {
  name: "Kumisoft",
  legalName: "Kumisoft LLC",
  email: "contact@kumisoft.com",
  address: {
    street: "1309 Coffeen Avenue, STE 1200",
    city: "Sheridan",
    region: "WY",
    postalCode: "82801",
    country: "United States",
  },
} as const;

export const formattedAddress = `${company.address.street}, ${company.address.city}, ${company.address.region} ${company.address.postalCode}`;
