// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

export async function getTest(testId) {
    const result = client
        .db("local")
        .collection("tests")
        .findOne({ testId: testId });
    return result;
}

export default async function handler(req, res) {
    try {
        await client.connect();
        //console.log(await getTest("0"));
        
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }

    //res.status(200).json({});
}
