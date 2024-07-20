import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://Testing_owner:cXzpHWkNS0t1@ep-red-rice-a5082y25.us-east-2.aws.neon.tech/Testing?sslmode=require");
    await client.connect();
    return client;
}