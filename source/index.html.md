---
title: Dock Certs API v1
language_tabs:
  - json-doc: Payload
  - shell: cURL
#  - javascript: JavaScript
#  - python: Python
#  - php: PHP
#  - go: Go
toc_footers:
  - <a href="https://certs.dock.io/">Sign up for an API Key</a>
  - <a href="https://swagger.api.dock.io/">Swagger specification</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

# The Dock Certs API
<em>A complete solution for creating, managing and presenting Verifiable Credentials.</em>

The Dock Certs API allows you to issue, verify and revoke verifiable credentials, manage DIDs and interact with the Dock blockchain. Dock integrates industry-leading World Wide Web Consortium (W3C) and VCDM standards, allowing it to interoperate with other open source technologies. We provide a range of open-source software on [GitHub](https://github.com/docknetwork) that can be used alongside the API. Primary features include:

-	Easily issue, verify, manage, and revoke/unrevoke verifiable credentials.
- Create and manage decentralized identifiers (DIDs).
- Drop anchors on the blockchain for better validation and security.
- Create and assign schemas to credentials for compliance.
- Harness the security of the Dock blockchain, a network run by 50 independent validators.
- Work seamlessly across platforms with Dock’s standards-compliant, interoperable solutions.

In addition to the code samples shown in these docs, we have provided various code samples for the common requests that you can easily access [here](https://github.com/docknetwork/api-samples).

We also offer a free trial, testnet sandboxing and fair monthly pricing. Sign up and [start issuing credentials with Dock Certs](https://certs.dock.io/). Please read our [Terms of Service](https://www.dock.io/terms-of-service) before using Dock Certs.

## Example Use Case

Tim is a newly graduated Lawyer from the University of Chicago, looking for an opportunity to grow his career. With the use of verifiable credentials, Tim is issued a certificate proving his qualifications from the university, the certificate resides on Tim’s mobile device.

Details of the certificate reside in the Verifiable Credential and the proof of identity of the university (which is the decentralized identifier) is stored on the blockchain. The University can also opt to create a record (called an anchor) of the credential on the blockchain with a timestamp.

When Tim applies for jobs, the process of:

- Tim applying and providing a copy of his certificate to the company. The company having to call the university to prove the authenticity of the certificate before progressing.

Changes to:

- Tim sending his digital certificate to the company who can verify the authenticity immediately.

The new process of validating and authenticating credentials is instantaneous and leaves no room for error and tampering.

## Participants in the Process

### Issuer
The issuer in the scenario above is the university. The educational institution providing the certificate. They also have the power to revoke the credential if necessary.

### Holder
The owner of the credential, Tim has the certificate proving his qualifications on his mobile device and can share and send it to whomever he wishes.

### Verifier
The workplace where Tim wants to work. They are the ones who need to verify Tim’s qualifications and can instantly do this.

# Getting Started

## Prerequisites
You must first have an account and acquire your credentials (API keys) before accessing the Dock Certs API. You can register an account and generate a key in your [Dock Certs](https://certs.dock.io/) dashboard.

<aside class="warning">
Keep in mind that your API keys should be kept private, so keep them safe! Do not post your private API keys on GitHub, in client-side code, or anywhere else that is publicly available.
</aside>

## Endpoints
Dock Certs provides two endpoints based on which mode was selected when creating your API key. By default, the API keys are created for production. You can switch to **test mode** in [Dock Certs](https://certs.dock.io/) by clicking the **test mode** toggle in the top right next to your avatar icon. Once in **test mode** you will see only testnet transactions, API keys, webhooks etc. You can then create an API key from the [Dock Certs dashboard](https://certs.dock.io/keys). It should be noted that in **test mode** your used transaction count **will not increase or hit monthly limits** allowing for sandboxing on our test network.

- For production mode, use the endpoint: [https://api.dock.io](https://api.dock.io)
- For test mode, use the endpoint: [https://api-testnet.dock.io](https://api-testnet.dock.io)

IMPORTANT NOTES:

- Any transaction you perform in **test mode** cannot be used for **production**. This means that, for example, any DID created in **test mode** will not work for issuing or verification in **production**.
- **test mode** will be subject to data resets periodically, so the DIDs, etc. that you create there should not be expected to be permanent.

## Authentication
Dock Certs uses API keys to authenticate requests. You can obtain an API Key by signing into [Dock Certs](https://certs.dock.io). Once a key has been generated, it should be included in **all** request headers as below:

* API Key (accessToken)
    - Name: **DOCK-API-TOKEN**
    - OR HTTP Bearer Authorization

<aside class="notice">
When you generate an API key, you may include a list of whitelisted IP's that can use with that key.
</aside>

## Architecture Style
Dock Certs is built using a [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) architecture. Our API uses standard HTTP response codes, authentication, delivers JSON-encoded responses, accepts form-encoded request bodies, and accepts form-encoded request bodies.

HTTPS is required for all API requests. Requests performed via plain HTTP will be rejected. API requests that do not include authentication will also fail. JSON requests should typically be encoded as UTF-8.

HTTP Method | Description
--------- | -----------
GET | Gets one or many resources
POST | Creates a new resources
PATCH | Partially updates a resource
DELETE | Deletes a resource

## Rate Limits
We allow you to make up to 200 requests in a 2 minute window (avg 100 reqs/min or 1.6 reqs/second). If you exceed beyond that, you will receive a 429 Too Many Requests response and have to wait up to a minute for the next request depending on when you hit the limit. If you require higher rate limits, please [contact us](mailto:contact@dock.io).

## Error Handling
The Dock Certs API uses standard HTTP response codes to indicate if an API request was successful or unsuccessful.

The table below shows the most frequent HTTP error messages:


Code | Meaning
--------- | -----------
400 | Bad Request -- Your request was rejected (e.g., missing mandatory field).
402 | Payment required -- Transaction limit reached or upgrade required to proceed
401 | Unauthorized -- Do not own resource or have an invalid API key in the header.
404 | Not Found -- The resource that you're trying to interact with could not be found on the server.
405 | Method Not Allowed -- The requested method does not exist in the API spec. Please check the {did} value and ensure that it's not empty/blank.
429 | Too Many Requests -- You sent too many requests. Please try to reduce the number of requests.
500 | Server Errors -- Something has gone wrong on the server. Contact us if this keeps happening.

## Terminology
It is important to fully understand all the terminologies within the Dock ecosystem. The following are common terminologies within our ecosystem:


Terminology | Description
--------- | -----------
DID | DID stands for Decentralized Identifier. It is a new type of identifier that enables verifiable, decentralized digital identity. A DID refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the DID. For more information, please refer [here](https://docknetwork.github.io/sdk/tutorials/concepts_did.html).
Anchoring | A feature that allows users to store a digest of one or more credentials (or any files) on our blockchain so that they are associated with immutable timestamps and hence can be proven to have been created at a certain point in time.
Data Schema | The structure that describes the logical view of the data. It is useful to enforce a specific structure on a collection of data like a Verifiable Credential.
Registries | A process to verify credentials in such a way that each verified credential has its own unique number. This process references a credential definition and specifies how revocation of that credential type will be handled. 
Schema | The structure of credentials which are shareable among issuers as they do not contain any cryptographic material and thus are created less frequently.
Blob | Blob stands for Binary Large OBject. It is a collection of binary data stored as a single entity. The schemas are identified and retrieved by their unique blob id, which is a 32-byte long hex string.
DID Resolver | The tool that initiates the process of learning the DID document.

# Webhooks
We provide webhooks for asynchronous integration with the API. You can configure a webhook to receive notifications whenever events occur within the API (see below for the list of published events). To use our webhook, you need to set the webhook URL that acts as a receiver receiving the information whenever an event happens. You also need to select **at least one** of the webhook events from Dock Certs to trigger the data exchange.


## How to Setup Webhook
To setup webhook, simply follow the steps below:

- Go to **Webhooks** in Dock Certs.
- Click **Add Endpoint**.
- Fill in the **Endpoint URL** and select **Endpoint Events** for the webhook events.
- Click **Create Webhook**.
- Once the webhook is created you will see a secret token. This token is sent in the webook POST request for you to validate that the webhook came from Dock.


<aside class="notice">
You can subcribe to all events by clicking <strong>Receive All</strong> next to <strong>Endpoint Events</strong>
</aside>


## Webhook Events
You can configure the following events to trigger the HTTP request to send the data to your application.

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "anchor_create",
  "data": {
    "status": "finalized",
    "encodedTx": "0x90040f008082f112f7575ff922ffa2290c9b11e071cc45a79b3cc1d3de66d0be819fe7e808",
    "result": {
      "InBlock": "0xbaf1bfcc5b629b775a4d03c9baa0b0d6d7197fe1ab1805993d38da3447661c76"
    }
  }
}
```

### anchor_create
This event indicates an anchor has been created. It will fire when an anchor has been created.

<div style="clear:both"></div>

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "credential_create",
  "data": {
    "id": "http://example.com/39",
    "signingOps": 1,
    "byteSize": 727,
    "key": "did:dock:5DhSFTFJwD6bFdrPdTibhxQypDruZkBGeWs1p34FS87ko5Vy#5GsBC74MW9DxHkFUYDVGPnbtioEaFgPgkdytQU3cRTQcHJCz",
    "credential": {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ],
      "id": "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb",
      "type": [
        "VerifiableCredential"
      ],
      "credentialSubject": {
        "id": "did:dock:5DhSFTFJwD6bFdrPdTibhxQypDruZkBGeWs1p34FS87ko5Vy"
      },
      "issuanceDate": "2019-08-24T14:15:22Z",
      "expirationDate": "2019-08-24T14:15:22Z",
      "proof": {
        "type": "Sr25519Signature2020",
        "created": "2021-11-23T03:16:47Z",
        "verificationMethod": "did:dock:5DhSFTFJwD6bFdrPdTibhxQypDruZkBGeWs1p34FS87ko5Vy#keys-1",
        "proofPurpose": "assertionMethod",
        "proofValue": "z4jUYjc4CyQSfVCivjjTpngjg9TsSL5GkdNesqQFBxwtZwgruophe7xaAzFMSx2gZt4CmXhhhWz4aEyA9wtpqwhdn"
      },
      "issuer": {
        "id": "did:dock:5DhSFTFJwD6bFdrPdTibhxQypDruZkBGeWs1p34FS87ko5Vy",
        "name": "Issuer Name"
      }
    }
  }
}
```

### credential_create
This event indicates a credential has been created. It will fire when a credential has been created.

<div style="clear:both"></div>

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "credential_issued",
  "data": {
    "id": "http://example.com/39",
    "signingOps": 1,
    "byteSize": 691,
    "key": "did:dock:5DhSFTFJwD6bFdrPdTibhxQypDruZkBGeWs1p34FS87ko5Vy#5GsBC74MW9DxHkFUYDVGPnbtioEaFgPgkdytQU3cRTQcHJCz",
    "credential": {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ],
      "id": "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb",
      "type": [
        "VerifiableCredential"
      ],
      "credentialSubject": {
        "id": "did:dock:5DhSFTFJwD6bFdrPdTibhxQypDruZkBGeWs1p34FS87ko5Vy"
      },
      "issuanceDate": "2021-11-23T03:16:25.321Z",
      "proof": {
        "type": "Sr25519Signature2020",
        "created": "2021-11-23T03:16:25Z",
        "verificationMethod": "did:dock:5DhSFTFJwD6bFdrPdTibhxQypDruZkBGeWs1p34FS87ko5Vy#keys-1",
        "proofPurpose": "assertionMethod",
        "proofValue": "z41DNxuUzSvKz68L2YkXehR3nQ9PWoAfj6zk44gUzFXKK7pd2zEQByYAUGGg5TT2cZCxiYAmg49NGMX8tRLyf9W1G"
      },
      "issuer": {
        "id": "did:dock:5DhSFTFJwD6bFdrPdTibhxQypDruZkBGeWs1p34FS87ko5Vy",
        "name": "Issuer Name"
      }
    }
  }
}
```

### credential_issued
This event indicates a credential has been issued. It will fire when a credential has been issued.

<div style="clear:both"></div>

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "credential_revoke",
  "data": {
    "status": "finalized",
    "encodedTx": "0xa902040a0153b52f6bac3d812853d8aad9c94eb98b4a5dd632c5bf805dc4140965c753641e04aff1aa6770d43d684690c0ad679a8608d5b7576feb3fdc1d6712decf73ca44efd3ec3b0004483fc667eb8a63f8e040bb91cd23f6c650fb668d0152390a026620d05c5168ed00787db3a6322a4d81ab64848fdb4ec7f76404ad2360075b64e2de1c3d4bb0f2624d4684d073e528367a2dba2379254a50be816afa7eb731fa4f4807f1c6b4548f",
    "result": {
      "InBlock": "0x759314aa18d741335ac809ca2d877aed0a00375c3ba4a7dfc398d80dbc7bf2d5"
    }
  }
}
```

### credential_revoke
This event indicates a credential has been revoked. It will fire when a credential has been revoked.

<div style="clear:both"></div>

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "credential_unrevoke",
  "data": {
    "status": "finalized",
    "encodedTx": "0xa902040a0253b52f6bac3d812853d8aad9c94eb98b4a5dd632c5bf805dc4140965c753641e04aff1aa6770d43d684690c0ad679a8608d5b7576feb3fdc1d6712decf73ca44ef45ed3b0004483fc667eb8a63f8e040bb91cd23f6c650fb668d0152390a026620d05c5168ed0052ced1926bc978029cf9ebe9107450961ca8f0aed21033b61087a901271e1451c67a1f8feb7851f8dda0913223fc3bb5a26b9550014dccce61b5392e9a5e3181",
    "result": {
      "InBlock": "0x4279f477c280d1721efaee8a3ee621f3d96068fe978811db73d4ab27fecc687a"
    }
  }
}
```

### credential_unrevoke
This event indicates a credential has been unrevoked. It will fire when a credential has been unrevoked.

<div style="clear:both"></div>

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "did_create",
  "data": {
    "status": "finalized",
    "encodedTx": "0x91010409004e0d07d7121cbfb78be48fea337f7afd6f90aa233e33c17ab8137c4873c7da924e0d07d7121cbfb78be48fea337f7afd6f90aa233e33c17ab8137c4873c7da920012e604ac480aa06981c9b5dae4fc0e0bd8961fd858584e0a53f8a66e9b5e1648",
    "result": {
      "InBlock": "0xe5f17466a3c4b2ac3f455d923367e6e2baf9970583c2ed56299280d3a269a471"
    }
  }
}
```

### did_create
This event indicates a DID has been created. It will fire when a DID has been created.

<div style="clear:both"></div>

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "did_update_key",
  "data": {
    "status": "finalized",
    "encodedTx": "0xa902040901c7f54544fc24f652c4bfd1eded6e26d4400cd2cc91f130f85076aee6f1f6efb2001eabe8649baa2de3ee613dd488a433f743ed36854843e2aef4317a924118487201483fc667eb8a63f8e040bb91cd23f6c650fb668d0152390a026620d05c5168ed15293c000030af292a54c9ac95c999dd746ae61b6f35e1b8e610a637ef7d8710c093826e6d7a01d665bbcc8e4825830711371dade0f78b604b39fa864e92911ed030e15181",
    "result": {
      "InBlock": "0x8c876bd6fe0dbbadc91ed04a5d9f811dca02850f95dda409e558034df24177bb"
    }
  }
}
```

### did_update_key
This event indicates a `keyType` value within the DID has been updated. It will fire when the `keyType` value has been updated.

<div style="clear:both"></div>

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "did_update_controller",
  "data": {
    "status": "finalized",
    "encodedTx": "0xad02040901c81cd739fdd090d889280f04ddec47cad8240290e974319eaf1a7d7f10213c500203d5dc1a348b80aa06673fc36b8d1c0405125ad61d90c43e157815cc0779a8696801483fc667eb8a63f8e040bb91cd23f6c650fb668d0152390a026620d05c5168ed822b3c000139a87a45eaf9ada41c964bada887ebffa7bf34d66aec88821fb7a6d2177d634e83ab7a45f685835add00cebcc96a8c572e2833ad01d6dcacb0f72fb9bf80fa0a",
    "result": {
      "InBlock": "0x47c6640633a8a22df1de8fdc8e80f36dc403e735975e6f14d1a30419a18a6abd"
    }
  }
}
```

### did_update_controller
This event indicates a `controller` value within the DID has been updated. It will fire when the `controller` value has been updated.

<aside class="notice">
When you update both <code>controller</code> and <code>keyType</code>, you will receive <code>did_update_controller</code> event notification too on your webhook since updating <code>controller</code> value will update the <code>keyType</code> value.
</aside>

<div style="clear:both"></div>

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "did_delete",
  "data": {
    "status": "finalized",
    "encodedTx": "0xa1010409024e0d07d7121cbfb78be48fea337f7afd6f90aa233e33c17ab8137c4873c7da92c0ea3b000008dcdfb22efd01604ca38facdb6c1086f2d76c2a36425f293e4c687e48f0ea295e02162e8af53f334544676bbf906f12f60d36a0b42dad89e169bc2816d68a85",
    "result": {
      "InBlock": "0x588b2170d114f68f47d697b92c4c2184db26deada7e114f205a6bb95a157a3bd"
    }
  }
}
```

### did_delete
This event indicates a DID has been deleted. It will fire when a DID has been deleted.

<div style="clear:both"></div>

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "registry_create",
  "data": {
    "status": "finalized",
    "encodedTx": "0x1901040a0035cbd5b17285e74b86b198543f712c03c99b75d7e2ed82923fa1fde7f1129ef40004483fc667eb8a63f8e040bb91cd23f6c650fb668d0152390a026620d05c5168ed00",
    "result": {
      "InBlock": "0x2407aa20e16ae915698888ed84f41d1bc06d3733ed17c89041b897e91ecf8fac"
    }
  }
}
```

### registry_create
This event indicates a registry has been created. It will fire when a registry has been created.

<div style="clear:both"></div>

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "registry_delete",
  "data": {
    "status": "finalized",
    "encodedTx": "0x2502040a0335cbd5b17285e74b86b198543f712c03c99b75d7e2ed82923fa1fde7f1129ef443ec3b0004483fc667eb8a63f8e040bb91cd23f6c650fb668d0152390a026620d05c5168ed00405a766d239405e6e3c63104581168cbb831e32299f7af72e39b5e8774631674f41595542249599a454ce957374be99fc061ec40200d380a8df1776e4417fa82",
    "result": {
      "InBlock": "0x4c58ebd08823a2dd5d776eaed526bfeddacf988d79c8e85cd807e8765622de7a"
    }
  }
}
```

### registry_delete
This event indicates a registry has been deleted. It will fire when a registry has been deleted.

<div style="clear:both"></div>

> SAMPLE JSON PAYLOAD

```json
{
  "token": "4A_Z0fYD19q1qKZ03qAfB0zTu8XYuLPpGk0oHfP8OrvGGDi5Jz8C86F6EVz8Wd2c",
  "event": "schema_create",
  "data": {
    "status": "finalized",
    "encodedTx": "0xa106040b00e1420661c333988c024f0a4bd3ea4ed0e75773247a369419acdaa67447c22ca489047b2224736368656d61223a22687474703a2f2f6a736f6e2d736368656d612e6f72672f64726166742d30372f736368656d6123222c226164646974696f6e616c50726f70657274696573223a66616c73652c226465736372697074696f6e223a22446f636b20536368656d61204578616d706c65222c2270726f70657274696573223a7b22616c756d6e694f66223a7b2274797065223a22737472696e67227d2c22656d61696c41646472657373223a7b22666f726d6174223a22656d61696c222c2274797065223a22737472696e67227d2c226964223a7b2274797065223a22737472696e67227d7d2c227265717569726564223a5b22656d61696c41646472657373222c22616c756d6e694f66225d2c2274797065223a226f626a656374227d483fc667eb8a63f8e040bb91cd23f6c650fb668d0152390a026620d05c5168ed00c2d11f1a68160f1a7d926c7c89a937866d70fdd0b5d350a6b2be88ad099a8776c6518e1d798553f596baff8d3be36d0172860e7a9b1368019339c7da05bf3485",
    "result": {
      "InBlock": "0x8b7042e52223334929e1cb2507e9be5b35014573dbe693bbcda2952f6254934f"
    }
  }
}
```

### schema_create
This event indicates a schema has been created. It will fire when a schema has been created.

<div style="clear:both"></div>


# Dock Postman Collection
Download and use our [Postman Collection](https://github.com/docknetwork/api-docs/blob/main/Dock%20API.postman_collection.json) to experiment with basic API flows:

- Download Postman [here](https://www.postman.com/downloads/).
- Download our [API collection here](https://github.com/docknetwork/api-docs/blob/main/Dock%20API.postman_collection.json).
- Import Dock Collection in Postman with our API collection that you have downloaded previously. For the detailed instructions to import the json file, please refer [here](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/).
- Create a new environment in Postman. For the detailed instruction to create a new environment, please refer [here](https://learning.postman.com/docs/sending-requests/managing-environments/).
- In your new Postman environment, you need to create two new `ApiKey` and `BaseUrl` variables. Please refer [here](https://learning.postman.com/docs/sending-requests/variables/) for the instructions to set the new variables.
- Login to [Dock Certs](https://certs.dock.io/).
- Enable the **Test mode** in your Dock Certs dashboard to use the sandbox environment.
- In your Dock Certs dashboard, click **Create API key** on the keys page to generate the key, copy and save it.
- Set `ApiKey` initial and current values with the value that you generated in Dock Certs.
- Set `BaseUrl` initial and current values with [https://api-testnet.dock.io](https://api-testnet.dock.io)

## Simple E2E Create Credentials/Presentation Flow

This flow refers to Postman, but the general steps are the same however you use the API. The Postman collection includes the scripts that automatically propagate results into the next request bodies when you follow the below steps. To issue a credential and or a presentation on the holder's behalf, the following steps are required:

> DID CREATED - 200 Response

```json
{
    "id": "823",
    "data": {
        "did": "did:dock:5FDFd1Woa3cG1m18PLgPpYgGfwE5S1RqXyHeEYC86vUxzzkg",
        "hexDid": "0x8b3997a95f86c80e5eb8a4ab67dbb164d5cc19ea24c072a85a3eb0d552fa837f",
        "controller": "did:dock:5FDFd1Woa3cG1m18PLgPpYgGfwE5S1RqXyHeEYC86vUxzzkg"
    }
}
```

### 1. Create a DID

To create a new DID to issue with, go to **Create DID** and click **Send**. The `id` property denotes a job ID in the system that you can use to query for blockchain transaction status.

The Dock API supports `did:dock` and `did:key` method creation.

<aside class="notice">
Creating a Dock DID submits a transaction to the blockchain, this could take some time to process. Please hit the `/jobs` endpoint to check the status of the job to see if it's finalized or not.
</aside>

<div style="clear:both"></div>

> DID VERIFIED - 200 Response

```json
{
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:dock:5FDFd1Woa3cG1m18PLgPpYgGfwE5S1RqXyHeEYC86vUxzzkg",
    "authentication": [
        "did:dock:5FDFd1Woa3cG1m18PLgPpYgGfwE5S1RqXyHeEYC86vUxzzkg#keys-1"
    ],
    "assertionMethod": [
        "did:dock:5FDFd1Woa3cG1m18PLgPpYgGfwE5S1RqXyHeEYC86vUxzzkg#keys-1"
    ],
    "publicKey": [ ... ]
}
```

### 2. Verify the New DID

To verify if the new DID has been registered, go to **Verify DID Registered** and click **Send**.

<aside class="notice">
You only need to create a DID once and then you can issue many credentials with it. A subject/holder DID should not be the same as the issuer DID in a real world credential.
</aside>

<div style="clear:both"></div>

> CREDENTIAL ISSUED - 200 Response

```json
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb",
    "type": [
        "VerifiableCredential"
    ],
    "credentialSubject": {
        "id": "did:dock:5FDFd1Woa3cG1m18PLgPpYgGfwE5S1RqXyHeEYC86vUxzzkg"
    },
    "issuanceDate": "2021-11-12T14:43:46.504Z",
    "proof": { ... },
    "issuer": { ... }
}
```

### 3. Create a Signed Credential

To create a Verifiable Credential using the the new issuer DID, go to **Create Signed Credential** and click **Send**. This will send some example credential data to the API and sign it with your DID keypair. It will return a Verifiable Credential that conforms to the W3C spec.

<div style="clear:both"></div>

> CREDENTIAL VERIFIED - 200 Response

```json
{
    "verified": true,
    "results": [ ... ]
}
```

### 4. Verify the Signed Credential

To verify if the credential's cryptographic proof, revocation status and more go to **Verify Signed Credential** and click **Send**.

<div style="clear:both"></div>

> PRESENTATION CREATED - 200 Response

```json
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1"
    ],
    "verifiableCredential": [
        {
            "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://www.w3.org/2018/credentials/examples/v1"
            ],
            "id": "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb",
            "type": [
                "VerifiableCredential"
            ],
            "credentialSubject": {
                "id": "did:dock:5FDFd1Woa3cG1m18PLgPpYgGfwE5S1RqXyHeEYC86vUxzzkg"
            },
            "issuanceDate": "2021-11-12T14:43:46.504Z",
            "proof": { ... },
            "issuer": { ... }
        }
    ],
    "id": "https://creds.dock.io/presentation/adfb13f1a4b8934d0e94d2aa507e006c",
    "type": [
        "VerifiablePresentation"
    ],
    "proof": { ... }
}
```

### 5. Create a Presentation

To create a Verifiable Presentation by using the credential, go to **Create Presentation** and click **Send**.

<div style="clear:both"></div>

> PRESENTATION VERIFIED - 200 Response

```json
{
    "verified": true,
    "results": []
}
```

### 6. Verify the Presentation

The same credential verification route can be used to verify a presentation. In Postman, go to **Verify Presentation** and click **Send**.

<aside class="notice">
These steps involve using the API to create presentations on behalf of your holders. Ideally, you should not do this and distribute the credential to your users and have their own wallet apps create the presentations for a verifier.
</aside>

# Dock Swagger UI
Dock Swagger UI generates interactive API documentation to try out the API calls directly in any browser.
Use our [Swagger UI](https://swagger.api.dock.io/) to execute the API calls quickly:

- Login to [Dock Certs](https://certs.dock.io/).
- Enable the **Test mode** in Dock Certs to benefit from unlimited transactions.
- Create your first API key by clicking **'Create API key'**. Copy and Save it.
- Use this key to **'Authorize'** into the Swagger UI.

<div style="clear:both"></div>

<h1 id="dids">DIDs</h1>

> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
   <a href="#create-did">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /dids
    </a>
    <br />
   <a href="#get-did-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /dids/{did}
    </a>
    <br />
    <a href="#list-dids-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /dids
    </a>
    <br />
    <a href="#delete-did">
      <span class="kd">DELETE</span>
      /dids/{did}
    </a>
    <br />
   </div>
</div>


DID stands for Decentralized IDentifiers. DIDs are meant to be globally unique identifiers that allow their owner to prove cryptographic control over them. A DID identifies any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) that the controller of the DID decides that it identifies.

DIDs in Dock are created by choosing a 32-byte unique (on Dock chain) identifier along with a public key. You can update and delete a DID as well as list all DIDs. DID is identified by a unique, random key.

For a detailed example of the DIDs workflow. Please refer [here](https://github.com/docknetwork/dock-api-js/blob/main/workflows/didFlow.js).

<aside class="notice">
Currently a DID can have only one key at a time as a controller, soon we will support multiple keys per DID.
</aside>

## Create DID

> <span class="highlight"><span class="nt">POST</span> /dids</span></span> REQUEST



```shell
curl --location --request POST 'https://api.dock.io/dids' \
--header 'DOCK-API-TOKEN: API_KEY' \
--data-raw '{
  "keyType": "sr25519"
}'

```

```json-doc
{
  "keyType": "sr25519"
}
```

A DID, a public key, and a controller are required to create a new DID. The controller is both the owner of the public key and a DID. The DID can be created using an auto-generated keypair, and the controller will be the same as the DID unless otherwise specified. The DID and public key have no cryptographic relation.

It is important to have a public key of one of its three supported types. Dock supports 3 types of public keys: `sr25519`, `ed25519`, and `secp256k1`.

<h3 id="create-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|body|[DIDDock](#schemadiddock)|false|DID as fully qualified, e.g., `did:dock:`. Default value will is a randomly generated DID. |
|type|body|string|false|Specifies the DID method to for the generated DID. Supported options are `key` and `dock` (default).
|controller|body|[DIDDock](#schemadiddock)|false|DID as fully qualified, e.g., `did:dock:`. The default value of the controller is the `did` property.|
|keyType|body|[KeyType](#schemakeytype)|false|Type of public key for DID. The default value of the keyType is `sr25519`.|

### Enumerated Values

|Parameter|Value|Desctiprion
|---|---|---|
|keyType|sr25519 **or** ed25519 **or** secp256k1| keyType signature variants.
|type|dock **or** key| which DID method to generate

> 200 Response

```json
{
  "id": "926",
  "data": {
    "did": "did:dock:5DTGPqE2qYncxoDjrEWKhcTnn6hfsN24F7YZWSjGVUxgBgHA",
    "hexDid": "0x3d7129a4d915e8f864c4bf4f4bcbdb67cde87e9bbcec06cb3baefd5b31812c03",
    "controller": "did:dock:5DTGPqE2qYncxoDjrEWKhcTnn6hfsN24F7YZWSjGVUxgBgHA"
  }
}
```

<h3 id="create-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will try to create DID. NOTE: DID does not exist on network until the job identified in the response is complete.|[JobStartedResult](#schemajobstartedresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid params.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|



## Get DID

> <span class="highlight"><span class="na">GET</span> /dids/{did}</span></span> REQUEST

```shell
curl --location --request GET 'https://api.dock.io/dids/did:dock:xyz' \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''

```


When a DID is provided in the path, the API will attempt to resolve that DID into a [DID document](https://www.w3.org/TR/did-core/#dfn-did-documents). This document contains the public keys and more information relating to that DID, check [the identity foundation did configuration](https://identity.foundation/.well-known/resources/did-configuration/) document to learn more.

The API supports resolving many DID methods, some examples are:

- `did:dock:5CEdyZkZnALDdCAp7crTRiaCq6KViprTM6kHUQCD8X6VqGPW` - resolves through the Dock blockchain
- `did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd` - the public key is embedded in the DID

<h3 id="get-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DIDDock](#schemadiddock)|true|Represents a specific DID that uniquely identifies the key resource.|

> 200 Response

```json
{
  "@context": "https://www.w3.org/ns/did/v1",
  "id": "did:dock:5EEepQGeAeWnYgV8DWj5pH7pjHqrP2ZN2oBiE6ND2ZHA1dyN",
  "authentication": [
    "did:dock:5EEepQGeAeWnYgV8DWj5pH7pjHqrP2ZN2oBiE6ND2ZHA1dyN#keys-1"
  ],
  "assertionMethod": [
    "did:dock:5EEepQGeAeWnYgV8DWj5pH7pjHqrP2ZN2oBiE6ND2ZHA1dyN#keys-1"
  ],
  "publicKey": [
    {
      "id": "did:dock:5EEepQGeAeWnYgV8DWj5pH7pjHqrP2ZN2oBiE6ND2ZHA1dyN#keys-1",
      "type": "Sr25519VerificationKey2020",
      "controller": "did:dock:5EEepQGeAeWnYgV8DWj5pH7pjHqrP2ZN2oBiE6ND2ZHA1dyN",
      "publicKeyBase58": "ZY7vx2Jg1NSpEyrfGpDm7mRxNZyoYtbjjCjhHbhPtzM"
    }
  ]
}
```

<h3 id="get-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return the DID doc.
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The requested DID was not found.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|

## List DIDs

> <span class="highlight"><span class="na">GET</span> /dids</span></span> REQUEST

```shell
curl --location --request GET 'https://api.dock.io/dids' \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''

```

Return a list of all DIDs that your user account controls as fully resolved DID documents.

> 200 Response

```json
[
  {
    "@context": "https://www.w3.org/ns/did/v1",
    "id": "did:dock:5DTGPqE2qYncxoDjrEWKhcTnn6hfsN24F7YZWSjGVUxgBgHA",
    "authentication": [
      "did:dock:5DTGPqE2qYncxoDjrEWKhcTnn6hfsN24F7YZWSjGVUxgBgHA#keys-1"
    ],
    "assertionMethod": [
      "did:dock:5DTGPqE2qYncxoDjrEWKhcTnn6hfsN24F7YZWSjGVUxgBgHA#keys-1"
    ],
    "publicKey": [
      {
        "id": "did:dock:5DTGPqE2qYncxoDjrEWKhcTnn6hfsN24F7YZWSjGVUxgBgHA#keys-1",
        "type": "Sr25519VerificationKey2020",
        "controller": "did:dock:5DTGPqE2qYncxoDjrEWKhcTnn6hfsN24F7YZWSjGVUxgBgHA",
        "publicKeyBase58": "4vm85LvBvhro1N9u4dfKWEyTayXojrTJbJCmzSJixK6L"
      }
    ]
  }
]
```

<h3 id="list-dids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|How many items to offset by for pagination|
|limit|query|integer|false|How many items to return at one time (max 64)|

<h3 id="list-dids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All of a user's DIDs fully resolved into DID documents.|[DIDDock](#schemadiddoc)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|


## Delete DID

> <span class="highlight"><span class="kd">DELETE</span> /dids/{did}</span></span> REQUEST

```shell
curl --location --request DELETE https://api.dock.io/dids/{did} \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    }'

```


Deletes a DID and its metadata from the blockchain and our platform. This will also delete the associated keypair from the key management system meaning that you cannot sign messages or credentials with it after this operation. The DID will no longer be able to be resolved. This operation is not reversible.

<h3 id="delete-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DID](#schemadiddock)|true|Represents a specific DID that uniquely identifies the key resource.|

> 200 Response

```json
{
  "id": "928",
  "data": {
    "deleted": true
  }
}
```

<h3 id="delete-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will remove the DID.|[JobId](#schemajobid)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The request was unsuccessful, because you don't own the DID.|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The DID does not exist.|[Error](#schemaerror)|
|405|[Method not Allowed](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5)|The {did} value is blank/empty. Please ensure that the {did} value does exist.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|



<h1 id="profiles">Profiles</h1>

> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
   <a href="#create-profile">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /profiles
    </a>
    <br />
   <a href="#get-profile-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /profiles/{did}
    </a>
    <br />
    <a href="#list-profiles-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /profiles
    </a>
    <br />
    <a href="#update-profile">
      <span class="nt">PATCH</span>&nbsp;
      /profiles/{did}
    </a>
    <br />
    <a href="#delete-profile">
      <span class="kd">DELETE</span>
      /profiles/{did}
    </a>
    <br />
   </div>
</div>


DID Profiles are used to provide more context for an Issuer DID. Details about the issuer such as name and logo can be added using a DID Profile. These details will be included in credentials that are issued by the DID.

## Create Profile

> <span class="highlight"><span class="nt">POST</span> /profiles</span></span> REQUEST



```shell
curl --location --request POST 'https://api.dock.io/profiles' \
--header 'DOCK-API-TOKEN: API_KEY' \
--data-raw '{
  "name": "My Test Profile",
  "did": "did:dock:xyz",
  "description": "Testing out the Issuer Profiles API",
  "logo":"data:image/png;base64,SomeBase64EncodedImage=="
}'
```

```json
{
  "did": "did:dock:xyz",
  "name": "My Test Profile",
  "description": "Testing out the Issuer Profiles API",
  "logo":"data:image/png;base64,SomeBase64EncodedImage=="
}
```

The `did` and `name` fields are required to create a new Profile.


<h3 id="create-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|body|[DIDDock](#schemadiddock)|true|DID as fully qualified, e.g., `did:dock:`. |
|name|body|string|true|The name to use for this issuer (e.g. a school name).|
|description|body|string|false|A description of the issuer.|
|logo|body|string|false|A Base64 encoded image to use as the logo for the issuer.|


> 200 Response

```json
{
  "did": "did:dock:xyz",
  "name": "My Test Profile",
  "description": "Testing out the Issuer Profiles API",
  "logo":"data:image/png;base64,SomeBase64EncodedImage=="
}
```

<h3 id="create-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and the Profile was created.||
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid params.|[Error](#schemaerror)|



## Get Profile

> <span class="highlight"><span class="na">GET</span> /profiles/{did}</span></span> REQUEST

```shell
curl --location --request GET 'https://api.dock.io/profiles/did:dock:xyz' \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''

```


When a DID is provided in the path, the API will retrieve the Profile associated with that DID.


<h3 id="get-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DIDDock](#schemadiddock)|true|Represents a specific DID that uniquely identifies the profile.|

> 200 Response

```json
{
  "did": "did:dock:xyz",
  "name": "My Test Profile",
  "description": "Testing out the Issuer Profiles API",
  "logo":"data:image/png;base64,SomeBase64EncodedImage=="
}
```

<h3 id="get-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return the profile.
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The requested profile was not found.|[Error](#schemaerror)|

## List Profiles

> <span class="highlight"><span class="na">GET</span> /profiles</span></span> REQUEST

```shell
curl --location --request GET 'https://api.dock.io/profiles' \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''

```

Return a list of all Profiles that your user account controls.

> 200 Response

```json
[
  {
    "did": "did:dock:xyz",
    "name": "My Test Profile",
    "description": "Testing out the Issuer Profiles API",
    "logo":"data:image/png;base64,SomeBase64EncodedImage=="
  }
]
```

<h3 id="list-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|How many items to offset by for pagination|
|limit|query|integer|false|How many items to return at one time (max 64)|

<h3 id="list-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All of a user's profiles.|[DIDDock](#schemadiddoc)|



## Update Profile

> <span class="highlight"><span class="nt">PATCH</span> /profiles/{did}</span></span> REQUEST

```shell
curl --location --request PATCH 'https://api.dock.io/profiles/did:dock:xyz' \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "did": "did:dock:xyz",
  "name": "My Test Profile",
  "description": "Testing out the Issuer Profiles API",
  "logo":"data:image/png;base64,SomeBase64EncodedImage=="
}'

```

```json
{
  "did": "did:dock:xyz",
  "name": "My Test Profile",
  "description": "Testing out the Issuer Profiles API",
  "logo":"data:image/png;base64,SomeBase64EncodedImage=="
}
```

The update profile operation means that you can update the details of the profile. To do so, you need to provide a different value for **at least** one of `name`, `description` or `logo`.


<h3 id="update-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|body|[DIDDock](#schemadiddock)|true|DID as fully qualified, e.g., `did:dock:`. |
|name|body|string|true|The name to use for this issuer (e.g. a school name).|
|description|body|string|false|A description of the issuer.|
|logo|body|string|false|A Base64 encoded image to use as the logo for the issuer.|


> 200 Response

```json
{
  "did": "did:dock:xyz",
  "name": "My Test Profile",
  "description": "Testing out the Issuer Profiles API",
  "logo":"data:image/png;base64,SomeBase64EncodedImage=="
}
```

<h3 id="update-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will update the profile.||
|400|[Bad Request](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1)|The controller value is incorrect.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The request was unsuccessful, because you don't own the profile.|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The profile does not exist.|[Error](#schemaerror)|

## Delete Profile

> <span class="highlight"><span class="kd">DELETE</span> /profiles/{did}</span></span> REQUEST

```shell
curl --location --request DELETE https://api.dock.io/profiles/{did} \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    }'

```


Deletes a profile from our platform. It does NOT delete the associated DID, nor revoke the credentials issued for the profile.

<h3 id="delete-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DID](#schemadiddock)|true|Represents a specific DID that uniquely identifies the profile to delete.|

> 200 Response

```json
{
}
```

<h3 id="delete-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will remove the profile.||
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The request was unsuccessful because you don't own the profile.|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The profile does not exist.|[Error](#schemaerror)|
|405|[Method not Allowed](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5)|The {did} value is blank/empty. Please ensure that the {did} value does exist.|[Error](#schemaerror)|


<h1 id="credentials">Credentials</h1>

> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
    <a href="#issue-credentials">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /credentials
    </a>
    <br />
     <a href="#get-credential">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /credentials/{id}
    </a>
    <br />
   <a href="#delete-credential">
      <span class="kd">DELETE</span>
      /credentials/{id}
    </a>
    <br />



  </div>
</div>

You can create and sign Verifiable Credentials on Dock Certs and its API. By default, Dock does not store the credential - only its metadata. You can choose to persist a credential, in which case we will encrypt and store the credential for later retrieval using a password. Verifiable Credentials are cryptographically secure and tamper-proof. Once issued, they cannot be edited.

<h2 id="issue-credentials">Issue Credential</h2>

> <span class="highlight"><span class="nt">POST</span> /credentials</span></span> REQUEST

```json-doc

{
  "persist": false,
  "anchor": true,
  "template": "b8dd5768-0777-42c2-ae73-859e1079369b",
  "credential": {
    "type": ["UniversityDegreeCredential"],
    "subject": {
      "id": "did:dock:5CDsD8HZa6TeSfgmMcxAkbSXYWeob4jFQmtU6sxr4XWTZzUA",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    },
    "issuer": "did:dock:xyz",
    "issuanceDate": "2020-08-24T14:15:22Z"
  }
}
```

```shell
curl --location --request POST https://api.dock.io/credentials/ \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "persist": false,
  "anchor": true,
  "template": "b8dd5768-0777-42c2-ae73-859e1079369b",
  "credential": {
    "type": ["UniversityDegreeCredential"],
    "subject": {
      "id": "did:dock:5CDsD8HZa6TeSfgmMcxAkbSXYWeob4jFQmtU6sxr4XWTZzUA",
      "degree": {
        "type": "BachelorDegree",
        "name": "Bachelor of Science and Arts"
      }
    },
    "issuer": "did:dock:xyz",
    "issuanceDate": "2020-08-24T14:15:22Z"
  }
}'


```


Creates and issues a JSON-LD Verifiable Credential that conforms to the [W3C VCDM specification](https://www.w3.org/TR/vc-data-model/). The `type` values and subject properties must be represented by a schema URI in the `context` property. If you do not specify a `context` property, the API will automatically generate an embedded JSON-LD context based on the properties within your credential. You can read more about JSON-LD and contexts [here](https://json-ld.org/spec/latest/json-ld/#the-context).

<aside class="notice">
The <code>https://www.w3.org/2018/credentials/v1</code> context URI is always required and will be supplied by default at all times as mandated by the spec. If you pass a custom context, you must ensure that you define all the required JSON-LD terms. Please also note that the request format here is not the same as an issued verifiable credential. You can issue to multiple subjects per credential by passing an array of objects.
</aside>

To sign a credential, an `issuer` must be supplied as either a fully qualified DID string or an object with at least an `id` property which is a fully qualified DID. (e.g: `did:dock:xyz`)

<aside class="notice">
The <code>issuer</code> property <strong>must</strong> be a DID that you control with Dock Certs.
</aside>

By default, Dock does not store the credential contents at all - only minimal credential metadata. You can choose to set the `persist` value to `true` and provide a `password` string which will store the credential contents encrypted on our platform. The following metadata is stored on each issuance:

- Credential ID property
- Credential size in bytes
- Issuer DID
- Issuance date

For a detailed example of the credential workflow. Please refer [here](https://github.com/docknetwork/dock-api-js/blob/main/workflows/credentialsFlow.js).

<h3 id="zero-knowledge-proofs">Zero Knowledge Proofs (ZKP)</h3>

Dock credentials support Zero Knowledge Proofs and [Selective Disclosure](https://www.dock.io//post/selective-disclosure) by using the BBS+ signing algorithm when issuing the credential. To enable this functionality, simply set the `algorithm` field in the request to `bbsdock+`.

<aside class="warning">
This operation counts towards your monthly transaction/credential issuance limit for each successful call
</aside>

<h3 id="issue-a-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anchor|body|boolean|false|Whether to anchor the credential on the blockchain as soon as it is issued. Defaults to false.|
|persist|body|boolean|false|Whether to store an encrypted version of this credential with us. Defaults to false, if true you must supply password.|
|password|body|string|false|Password used to encrypt the credential if you choose to store it. The same password must be used to retrieve the credential contents. Dock does not store this password.|
|template|body|UUID string|false|The ID of the intended template/design, optional|
|algorithm|body|string|false|Specifies which signing algorithm to use to sign the issued credential. Defaults to `ed25519`.|
|credential|body|[Credential](#schemacredential)|true|Credential object as described in the [schema](#schemacredential).|

### Enumerated Values

|Parameter|Value|Description|
|---|---|---|
|algorithm|ed25519 **or** secp256k1 **or** dockbbs+|The algorithm used to sign the credential|

> 200 Response

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb",
  "type": [
    "VerifiableCredential",
    "UniversityDegreeCredential"
  ],
  "credentialSubject": {
    "id": "did:dock:5CDsD8HZa6TeSfgmMcxAkbSXYWeob4jFQmtU6sxr4XWTZzUA",
    "degree": {
      "type": "BachelorDegree",
      "name": "Bachelor of Science and Arts"
    }
  },
  "issuanceDate": "2020-08-24T14:15:22Z",
  "proof": {
    "type": "EcdsaSecp256k1Signature2019",
    "created": "2021-11-22T22:51:08Z",
    "verificationMethod": "did:dock:5FfmGmkY1BqEqRQhRLCLDLHPBFvhSbEBK3DJhEk9mbkpfAXT#keys-1",
    "proofPurpose": "assertionMethod",
    "proofValue": "zAN1rKrjNqYSr6mjbNEohqhCAnEoLWFgJutBmYMkXZYG8RatBuCv7ymFHEchufa1vjiM4JkHCkasswjukYVVJT3rBmTaRaUDHT"
  },
  "issuer": "did:dock:xyz"
}
```

<h3 id="issue-a-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and returns the created Verifiable Credential.|[VerifiableCredential](#schemaverifiablecredential)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid/insufficient credential params.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The request was unsuccessful, either because the authorization token was missing/invalid or you don't own the DID.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|


## Get Credential

> <span class="highlight"><span class="na">GET</span> /credentials/{id}</span></span> REQUEST

```shell
curl --location --request GET 'https://api.dock.io/credentials/credential_id?password=test' \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''

```


When a credential has been persisted on our systems, you can fetch the credential data by supplying a credential ID and the password used at issuance to encrypt the credential.

<h3 id="get-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|string|true|The ID of the credential (as a full URI).|
|password|query|string|true|The password given at issuance to encrypt the credential in storage|

> 200 Response

```json
{
  "id": "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb",
  "byteSize": 1074,
  "issuerKey": "did:dock:5CU97DhQ3mnbxPAiYw3GoRqFcnvCLGuHj3MS8evD8sARmg3e#KWAtkADdAy1rCiysr4cPZre4Lj7GFWGqyN5mP5X8xuzAnGzAb                     ",
  "createdAt": "2021-12-21T01:36:23.062Z",
  "credential": { ... }
}
```

<h3 id="get-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return the credential metadata and its JSON contents.
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The requested credential was not found.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|



## Delete Credential

> <span class="highlight"><span class="kd">DELETE</span> /credentials/{id}</span></span> REQUEST

```shell
curl --location --request DELETE https://api.dock.io/credentials/{id} \
  --header 'DOCK-API-TOKEN: API_KEY'

```

A credential can have its metadata deleted, and if persisted the contents will also be deleted. Deleting a credential will remove any reference to it and its contents from our systems. This action cannot be undone. This action will not revoke or invalidate the credential in any way.

<h3 id="delete-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|string|true|The ID of the credential (as a full URL-encoded URI).|

> 200 Response

```json
{ }
```

<h3 id="delete-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and credential will be deleted.||
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the credential was not found.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|


## Get Credentials Metadata

> <span class="highlight"><span class="na">GET</span> /credentials</span></span> REQUEST

```shell
curl --location --request GET 'https://api.dock.io/credentials' \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''
```


When you issue a credential with us, persistent or not, we will store certain metadata about the credential to make it easier for you to reference. You can pull a list of credential metadata using this route. To return the content of a persisted credential, you should use the `GET /credentials/{id}` route

<h3 id="get-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|How many items to offset by for pagination|
|limit|query|integer|false|How many items to return at one time (max 64)|

> 200 Response

```json
[
  {
    "id": "https://creds.dock.io/6d601b80d56f4bb2f35b4fbe2406cc186a25b615a66fc405283ad5967f28c143",
    "issuerKey": "did:dock:xyz#xyz",
    "type": "BasicCredential",
    "revoked": false,
    "revocationRegistry": "rev-reg:dock:0x357c104d14e81d66ef43debee91eb62aac9af27c34a1e1a2194ee443989c4d44",
    "createdAt": "2022-04-18T18:28:09.914Z",
    "expirationDate": null,
    "byteSize": 917,
    "persist": false
  }
]
```

<h3 id="get-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return the credential metadata and its JSON contents.



<h1 id="presentations">Presentations</h1>

The presentation is signed using the holder's private key as it is being created. To validate the presentation, the verifier must also check the issuer's signature and the holder's public key. One way to achieve this is to make the holder have a DID too, so that the verifier can look up the DID on the chain and learn the public key.

The API allows you to create and sign a verifiable presentation out of one or more Verifiable Credentials.

For a detailed example of the presentations workflow. Please refer [here](https://github.com/docknetwork/dock-api-js/blob/main/workflows/presentationsFlow.js).

<h2 id="create-a-presentation">Create Presentation</h2>

> <span class="highlight"><span class="nt">POST</span> /presentations</span></span> REQUEST

```shell
curl --location --request POST https://api.dock.io/presentations/ \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "holder": "did:dock:xyz",
  "challenge": "string",
  "domain": "string",
  "credentials": [
    {
      "@context": [
        "string"
      ],
      "id": "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb",
      "type": [
        "string"
      ],
      "credentialSubject": {},
      "issuer": "did:dock:xyz",
      "issuanceDate": "2019-08-24T14:15:22Z",
      "expirationDate": "2019-08-24T14:15:22Z",
      "credentialStatus": {},
      "proof": {
        "type": "Sr25519Signature2020",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "string",
        "created": "2019-08-24T14:15:22Z",
        "proofValue": "string"
      }
    }
  ]
}'

```

```json-doc

{
  "holder": "did:dock:xyz",
  "challenge": "string",
  "domain": "string",
  "credentials": [
    {
      "@context": [
        "string"
      ],
      "id": "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb",
      "type": [
        "string"
      ],
      "credentialSubject": {},
      "issuer": "did:dock:xyz",
      "issuanceDate": "2019-08-24T14:15:22Z",
      "expirationDate": "2019-08-24T14:15:22Z",
      "credentialStatus": {},
      "proof": {
        "type": "Sr25519Signature2020",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "string",
        "created": "2019-08-24T14:15:22Z",
        "proofValue": "string"
      }
    }
  ]
}
```

The holder while creating the presentation signs it with his private key. For the verifier to verify the presentation, in addition to verifying the issuer's signature, he/she needs to verify this signature as well, and for that he must know the holder's public key.

This is an operation to create and sign a verifiable presentation out of one or more Verifiable Credentials.

<h3 id="create-a-presentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|holder|body|[DIDDock](#schemadiddock)|true|DID as fully qualified, e.g., `did:dock:xyz`.|
|challenge|body|string|false|Presentation's Challenge in a string format. The default value for this is `random hex string`. NOTE: if this presentation is being created to respond to a `proof-request` the challenge should be set to the value from the `nonce` field in the proof-request.|
|domain|body|string|false|A domain for the proof in a string format. The default value for the domain is `dock.io`.|
|credentials|body|[VerifiableCredential](#schemaverifiablecredential)|false|Verifiable (signed) Credential returned by API.|

### Enumerated Values

|Parameter|Value|Description|
|---|---|---|
|type|Sr25519Signature2020 **or** Ed25519Signature2018 **or** EcdsaSecp256k1Signature2019|Type of Signature.
|proofPurpose|assertionMethod **or** authentication| The purpose the credential will be used for.

> 200 Response

```json
{

  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "urn:uuid:3978344f-8596-4c3a-a978-8fcaba3903c5",
  "type": ["VerifiablePresentation", "CredentialManagerPresentation"],
  "verifiableCredential": [{  }],
  "proof": [{  }]
}
```

<h3 id="create-a-presentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and returns a Verifiable Presentation.|[VerifiablePresentation](#schemaverifiablepresentation)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid/insufficient parameters.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The request was unsuccessful, either because of a missing/invalid auth header or you don't own the DID.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|



<h2 id="create-proof-request">Create Proof Request</h2>

> <span class="highlight"><span class="nt">POST</span> /proof-requests</span></span> REQUEST

```shell
curl --location --request POST https://api.dock.io/proof-requests/ \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "attributes": {
    "favouriteDrink": {
      "name": "favouriteDrink"
    },
    "fullName": {
      "names": [
        "name",
        "fullName"
      ]
    }
  },
  "name": "My proof request",
  "nonce": "1234567890"
}'

```

```json-doc
{
  "attributes": {
    "favouriteDrink": {
      "name": "favouriteDrink"
    },
    "fullName": {
      "names": [
        "name",
        "fullName"
      ]
    }
  },
  "name": "My proof request",
  "nonce": "1234567890"
}
```

It often makes sense for a verifier to request proof of credentials from a holder. For this, we have built a proof requests system into the API that works with the Dock Wallet. When a request is created, you will receive a URL which you should display in a QR code for a wallet application to scan. You can define which attributes should exist in the credential, a name for the holder and yourself to see and a nonce/challenge which prevents replay attacks.

<h3 id="create-a-presentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attributes|body|object|false|Requested attribute specifications of proof request|
|name|body|string|false|Proof request name, will be shown to the holder|
|nonce|body|string|false|Nonce or challenge for the presentation to match|

> 200 Response

```json
{
  "id": "feec1776-84c3-4783-b80b-c6690a652892",
  "name": "My proof request",
  "nonce": "1234567890",
  "verified": false,
  "created": "2022-10-17T22:48:30.619Z",
  "updated": "2022-10-17T22:48:30.619Z",
  "presentation": {},
  "response_url": "https://api.dock.io/proof-requests/feec1776-84c3-4783-b80b-c6690a652892/send-presentation",
  "attributes": {
    "fullName": {
      "names": [
        "name",
        "fullName"
      ]
    },
    "favouriteDrink": {
      "name": "favouriteDrink"
    }
  }
}
}
```

<h3 id="create-a-presentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and returns a Verifiable Presentation.|[VerifiablePresentation](#schemaverifiablepresentation)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid/insufficient parameters.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The request was unsuccessful, either because of a missing/invalid auth header or you don't own the DID.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|



## List Proof Requests

> <span class="highlight"><span class="na">GET</span> /proof-requests</span></span> REQUEST

```shell
curl --location --request GET https://api.dock.io/proof-requests/ \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw'{

  }'

```


Return a list of all proof requests and their verification status


> 200 Response

```json
[
  {
    "id": "feec1776-84c3-4783-b80b-c6690a652892",
    "name": "My proof request",
    "nonce": "1234567890",
    "verified": false,
    "created": "2022-10-17T22:48:30.619Z",
    "updated": "2022-10-17T22:48:30.619Z",
    "presentation": {},
    "response_url": "http://localhost:8000/proof-requests/feec1776-84c3-4783-b80b-c6690a652892/send-presentation",
    "attributes": {
      "fullName": {
        "names": [
          "name",
          "fullName"
        ]
      },
      "favouriteDrink": {
        "name": "favouriteDrink"
      }
    }
  }
]
```

<h3 id="list-dids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|How many items to offset by for pagination|
|limit|query|integer|false|How many items to return at one time (max 64)|

<h3 id="list-registries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return all proof requests created by the user.|Inline|

## Get Proof Request

> <span class="highlight"><span class="na">GET</span> /proof-requests/{id}</span></span> REQUEST

```shell
curl --location --request GET https://api.dock.io/proof-requests/{id} \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''


```

Get the details of an existing proof request and its verification status

<h3 id="get-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|UUID|true|Proof request UUID|

> 200 Response

```json
{
  "id": "feec1776-84c3-4783-b80b-c6690a652892",
  "name": "My proof request",
  "nonce": "1234567890",
  "verified": false,
  "created": "2022-10-17T22:48:30.619Z",
  "updated": "2022-10-17T22:48:30.619Z",
  "presentation": {},
  "response_url": "https://api.dock.io/proof-requests/feec1776-84c3-4783-b80b-c6690a652892/send-presentation",
  "attributes": {
    "fullName": {
      "names": [
        "name",
        "fullName"
      ]
    },
    "favouriteDrink": {
      "name": "favouriteDrink"
    }
  }
}
```

<h3 id="get-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return the proof request.|[Registry](#schemaregistry)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the proof request was not found.|[Error](#schemaerror)|





<h1 id="registries">Registries</h1>

> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
    <a href="#create-registry-parameters">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /registries
    </a>
    <br />
     <a href="#list-registries-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /registries
    </a>
    <br />
     <a href="#get-registry-parameters">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /registries/{id}
    </a>
    <br />
    <a href="#revoke/unrevoke-credential-parameters">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /registries/{id}
    </a>
    <br />
   <a href="#delete-registry-responses">
      <span class="kd">DELETE</span>
      /registries/{id}
    </a>
    <br />
  </div>
</div>

Revocation means deleting or updating a credential. On Dock, credential revocation is managed with a revocation registry.

There can be multiple registries on the chain, and each registry has a unique id. It is recommended that the revocation authority create a new registry for each credential type. Dock Certs allows you to create, delete, and revoke/unrevoke the credential. You can retrieve a specified registry as well as a list of all registries created by the user.

For a detailed example of the registry workflow. Please refer [here](https://github.com/docknetwork/dock-api-js/blob/main/workflows/registryFlow.js).

## Create Registry

> <span class="highlight"><span class="nt">POST</span> /registries</span></span> REQUEST

```shell
curl --location --request POST https://api.dock.io/registries/ \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "addOnly": true,
  "policy": [
    "did:dock:xyz"
  ]
}'


```

```json-doc

{
  "addOnly": true,
  "policy": [
    "did:dock:xyz"
  ]
}
```

To create a registry, you have to create a `policy` object for which a DID is needed. It is advised that the DID is registered on the chain first. Otherwise, someone can look at the registry and register the DID, thus gaining control of the registry.

<h3 id="create-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addOnly|body|boolean|false|True/false options. The default value is "false".|
|policy|body|[[DIDDock](#schemadiddock)]|true|The DIDs which control this registry. You must own a DID listed here to use the registry. Only one policy supported as of now: `OneOf` DID in list.|

> 200 Response

```json
{
  "id": "930",
  "data": {
    "id": "6151e62d7e03bc4012fde0595cfdb0d140e463a2f0ad5a431ff47243374bc612",
    "policy": {
      "type": "OneOf",
      "policy": [
        "did:dock:5GKeTJ7iMU4hEUwhK9a6ogh1bsWAv8Z1TMKnUf1vCNgdoiEM"
      ],
      "addOnly": false
    }
  }
}
```

<h3 id="create-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will try to create the registry.|[JobStartedResult](#schemajobstartedresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid params, e.g., policy not supported.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|

## List Registries

> <span class="highlight"><span class="na">GET</span> /registries</span></span> REQUEST

```shell
curl --location --request GET https://api.dock.io/registries/ \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw'{

  }'

```


Return a list of all registries created by the user. The list is returned with the registry id and policy of the revocation registry.

<aside class="notice">
For now, only one policy is supported, and each registry is owned by a single DID.
</aside>


> 200 Response

```json
[
  {
    "id": "6151e62d7e03bc4012fde0595cfdb0d140e463a2f0ad5a431ff47243374bc612",
    "policy_and_type": {
      "type": "OneOf",
      "policy": [
        "did:dock:5GKeTJ7iMU4hEUwhK9a6ogh1bsWAv8Z1TMKnUf1vCNgdoiEM"
      ],
      "addOnly": false
      },
    "created_at": "2021-11-25T12:20:51.773Z"
  }
]
```

<h3 id="list-dids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|How many items to offset by for pagination|
|limit|query|integer|false|How many items to return at one time (max 64)|

<h3 id="list-registries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return all registries created by the user.|Inline|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|

## Get Registry

> <span class="highlight"><span class="na">GET</span> /registries/{id}</span></span> REQUEST

```shell
curl --location --request GET https://api.dock.io/registries/{id} \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''


```


 Get the details of an existing registry, such as policy, add-only status, when it was last updated, and controller(s). You need only supply the revocation registry id that was returned upon revocation registry creation.

<h3 id="get-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Hex32](#schemahex32)|true|Revocation registry id.|

> 200 Response

```json
{
  "id": "6151e62d7e03bc4012fde0595cfdb0d140e463a2f0ad5a431ff47243374bc612",
  "policy_and_type": {
    "type": "OneOf",
    "policy": [
      "did:dock:5GKeTJ7iMU4hEUwhK9a6ogh1bsWAv8Z1TMKnUf1vCNgdoiEM"
    ],
    "addOnly": false
  },
  "created_at": "2021-11-25T12:20:51.773Z",
  "job_id": "930"
}
```

<h3 id="get-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return the revocation registry metadata.|[Registry](#schemaregistry)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the registry was not found.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|


## Revoke/Unrevoke Credential

> <span class="highlight"><span class="nt">POST</span> /registries/{id}</span></span> REQUEST

```shell
curl --location --request POST https://api.dock.io/registries/{id} \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "action": "revoke",
  "credentialIds": [
    "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb"
  ]
}'

```

```json-doc

{
  "action": "revoke",
  "credentialIds": [
    "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb"
  ]
}
```


Credential revocation is managed with on-chain revocation registries. To revoke a credential, its id (or hash of its id) must be added to the credential. It is advised to have one revocation registry per credential type. Revoking an already revoked credential has no effect.

Similar to the replay protection mechanism for DIDs, the last modified block number is kept for each registry, which is updated each time a credential is revoked or unrevoked. Unrevoking an unrevoked credential has no effect.

In this API, simply add Revoke/Unrevoke into the `action` parameter and input the desired credential ids.

<h3 id="revoke/unrevoke-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Hex32](#schemahex32)|true|Revocation registry id.|
|action|body|string|false|The action taken, either revoke or unrevoke. The default value is "revoke"|
|credentialIds|body|array|true|The list of credential ids to act upon. |

### Enumerated Values

|Parameter|Value|Description|
|---|---|---|
|action|revoke **or** unrevoke|Action to take on the registry.

> 200 Response

```json
{
  "id": "931",
  "data": {
    "revokeIds": [
      "0xaff1aa6770d43d684690c0ad679a8608d5b7576feb3fdc1d6712decf73ca44ef"
    ]
  }
}
```

<h3 id="revoke/unrevoke-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will try to revoke/unrevoke the credential.|[JobStartedResult](#schemajobstartedresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid params.|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the registry was not found.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|




## Delete Registry

> <span class="highlight"><span class="kd">DELETE</span> /registries/{id}</span></span> REQUEST

```shell
curl --location --request POST https://api.dock.io/registries/{id} \
  --header 'DOCK-API-TOKEN: API_KEY'

```


A registry can be deleted, leading to all the corresponding revocation ids being deleted as well. This requires the signature from the owner, similar to the other updates.

<h3 id="delete-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Hex32](#schemahex32)|true|Revocation registry id.|

> 200 Response

```json
{
  "id": "932",
  "data": {
  "id": "6151e62d7e03bc4012fde0595cfdb0d140e463a2f0ad5a431ff47243374bc612",
  "hexId": "6151e62d7e03bc4012fde0595cfdb0d140e463a2f0ad5a431ff47243374bc612",
  "lastModified": 4226296
  }
}
```

<h3 id="delete-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and revocation registry will be deleted.|[JobStartedResult](#schemajobstartedresult)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the registry was not found.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|



<h1 id="revocationstatus">Revocation Status</h1>

Credentials can be revoked or unrevoked, and as such they contain a revocation status so that verifiers/issuers can check if the credential is still valid. Once a revocation registry has been created and credentials issued with it, you can check the revocation status. Verifiers will do this automatically.

## Get Revocation Status

> <span class="highlight"><span class="na">GET</span> /revocationStatus/{regId}/{revId}</span></span> REQUEST

```shell

curl --location --request GET https://api.dock.io/revocationStatus/{regId}/{revId} \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''

```


To check if an id is revoked or not, you can check its status with the registry id (`regId`) and revocation id (`revId`).

<h3 id="get-revocation-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regId|path|[Hex32](#schemahex32)|true|Revocation registry id.|
|revId|path|[Hex32](#schemahex32)|true|Credential revocation id.|

> 200 Response

```json
{
  "type": true
}
```

<h3 id="get-revocation-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return **true**, if the credential is revoked, **false** otherwise.|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the registry was not found.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|
|400|[Server Error](https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1)|The request was unsuccessful, because you have not revoked or unrevoked the registered credential yet. Please try to revoke/unrevoke the registered credential and try again.|[Error](#schemaerror)|


<h1 id="credential-schemas">Credential Schemas</h1>

> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
          <a href="#create-schema-responses">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /schemas
    </a>
    <br />
     <a href="#list-schemas-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /schemas
    </a>
    <br />
  <a href="#get-schema-parameters">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /schemas/{schemaId}
    </a>
    <br />
  </div>
</div>

Schemas are useful when enforcing a specific structure on a collection of data like a Verifiable Credential. Data Verification schemas, for example, are used to verify that the structure and contents of a Verifiable Credential conform to a published schema. On the other hand, Data Encoding schemas are used to map the contents of a Verifiable Credential to an alternative representation format, such as a binary format used in a zero-knowledge proof.

Before diving further into Schemas, it is important to understand how they are stored in the Dock chain. Schemas are stored on chain as a `Blob` in the Blob Storage module. They are identified and retrieved by their unique blob id, a 32 byte long hex string. They are authored by a DID and have a max size of 1024 bytes.

## Create Schema

> <span class="highlight"><span class="nt">POST</span> /schemas</span></span> REQUEST

```shell
curl --location --request POST https://api.dock.io/schemas \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw '{
 "$schema": "http://json-schema.org/draft-07/schema#",
 "description": "Dock Schema Example",
 "type": "object",
 "properties": {
  "id": {
    "type": "string"
 },
 "emailAddress": {
  "type": "string",
  "format": "email"
 },
 "alumniOf": {
  "type": "string"
 }
 },
 "required": [
  "emailAddress",
  "alumniOf"
 ],
 "additionalProperties": false,
 "author": "{{did}}"
}'


```

```json-doc
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Dock Schema Example",
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "emailAddress": {
      "type": "string",
      "format": "email"
    },
    "alumniOf": {
      "type": "string"
    }
  },
  "required": [
    "emailAddress",
    "alumniOf"
  ],
  "additionalProperties": false,
  "author": "{{did}}"
}
```

Schemas are used to describe the structure of credentials, specifically the credential subject. It helps the issuer, holder, and verifier to unambiguously determine the claims contained within the credential. To create a schema, you need to define the object body using JSON schema.

<h3 id="create-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|JSON-schema.|

> 200 Response

```json
{
  "id": "1082",
  "data": {
    "id": "b8a2f4846df2af8a791e1305a0ebe09b3f2183c187502cf77022027f9643a120",
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "description": "Dock Schema Example 3",
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "emailAddress": {
          "type": "string",
          "format": "email"
        },
        "alumniOf": {
          "type": "string"
        }
      },
      "required": [
        "emailAddress",
        "alumniOf"
      ],
      "additionalProperties": false
    },
    "author": "did:dock:5FBZNTZ4eg2EBuvEcYdkEtAhCXhCEA8zmPzYTwexM3g13fkF",
    "signature": {
      "Secp256k1": "..."
    },
    "uri": "blob:dock:5GEo5M2apeCAsaqfRA9XabiywXETHEVCq6kmk7M8ZHTVUXYx"
  }
}
```

<h3 id="create-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will try to create schema.|[JobId](#schemajobid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid params, e.g., size not supported or not JSON.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|

## List Schemas

> <span class="highlight"><span class="na">GET</span> /schemas</span></span> REQUEST


```shell
curl --location --request GET https://api.dock.io/schemas \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''

```


Return a list of all schemas created by the authenticated user.

> 200 Response

```json
[
  {
    "id": "be37d45ef3fb4e96be86a76e6939c59a4764cc2a38dcd3d6d7818d928e2af116",
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "description": "Dock Schema Example",
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "emailAddress": {
          "type": "string",
          "format": "email"
        },
        "alumniOf": {
          "type": "string"
        }
      },
      "required": [
        "emailAddress",
        "alumniOf"
      ],
      "additionalProperties": false
    },
    "author": "did:dock:5HcbppP8LjoJFYRV7PTLEyPy3ZUK9JCkzC4PQHuVF34gRhe6",
    "uri": "blob:dock:5GN7YHA24SeHd8xC6BGDJnK2p6XcnTgAgZTqfqEZob47TJkh"
  }
]
```

<h3 id="list-schemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|How many items to offset by for pagination|
|limit|query|integer|false|How many items to return at one time (max 64)|

<h3 id="list-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return all schemas created by the user.|Inline|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|


## Get Schema

> <span class="highlight"><span class="na">GET</span> /schemas/{schemaId}</span></span> REQUEST

```shell
curl --location --request GET https://api.dock.io/schemas/{schemaId} \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''

```


Reading a Schema from the Dock chain can easily be achieved by using the `get` method which will return the JSON schema to a specific schema ID.

<h3 id="get-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schemaId|path|[Hex32](#schemahex32)|true|A schema id.|

> 200 Response

```json
{
  "id": "blob:dock:5GN7YHA24SeHd8xC6BGDJnK2p6XcnTgAgZTqfqEZob47TJkh",
  "schema": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "Dock Schema Example",
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "emailAddress": {
        "type": "string",
        "format": "email"
      },
      "alumniOf": {
        "type": "string"
      }
    },
    "required": [
      "emailAddress",
      "alumniOf"
    ],
    "additionalProperties": false
  },
  "author": "did:dock:5HcbppP8LjoJFYRV7PTLEyPy3ZUK9JCkzC4PQHuVF34gRhe6"
}
```

<h3 id="get-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and returns the requested Schema.|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the schema was not found.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|


<h1 id="anchors">Anchors</h1>

> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
    <br />
        <a href="#create-anchor-responses">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /anchors
    </a>
        <br />
        <a href="#list-anchors-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /anchors
    </a>
    <br />
  <a href="#get-anchor-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /anchors/{anchor}
    </a>
  </div>
</div>

Anchoring allows users to store a digest of one or more credentials (or any document) on our blockchain, tying them to immutable timestamps and proving that they were generated at a certain moment in time. By enabling this feature, users will have more options for auditing credentials given and timestamping any documents.

The Dock Blockchain includes a module explicitly intended for proof of existence. You post the hash of a document on-chain at a specific block. Later you can use that hash to prove the document existed at or before that block.

The API allows you to create, get, and retrieve anchors as well as a list of all anchors created by the user.

For a detailed example of the anchor workflow. Please refer [here](https://github.com/docknetwork/dock-api-js/blob/main/workflows/anchorsFlow.js).

## Create Anchor

> <span class="highlight"><span class="nt">POST</span> /anchors</span></span> REQUEST

```shell
curl --location --request POST https://api.dock.io/anchors \

  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw '[
  "can be a string",
  {
    "or": "a JSON document"
  }
]'

```

```json-doc

[
  "can be a string",
  {
    "or": "a JSON document"
  }
]
```

Creating an anchor will state on the blockchain that one or more document hashes were created at a specific time. In the context of verifiable credentials, anchors are used to attest that the credential document was not altered and was created at a specific time. Batching multiple documents/credentials into a single anchor is done through a Merkle tree and can save on cost/time as only the Merkle root has to be anchored.

The API will store the `blake2b256` hash of a document or string that you provide. Dock provides a [fully functioning reference client](https://fe.dock.io/#/anchor/batch) and [SDK example](https://github.com/docknetwork/sdk/blob/master/example/anchor.js) for anchoring.

<h3 id="create-anchor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|array of strings or JSON|true|Supply an array of strings or JSON documents to be hashed and anchored to the blockchain. For credentials, send the Verifiable Credential document(s) or anchor when issuing.|

> 200 Response

```json
{
  "id": "829",
  "data": {
    "root": "0xdfc3cd9ff7836143746c292d4099e62277fac4c2b6a1c004d784adcbc0319634",
    "proofs": []
  }
}
```

<h3 id="create-anchor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will try to create an anchor on the blockchain.|[JobId](#schemajobid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid params.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|


## List Anchors

> <span class="highlight"><span class="na">GET</span> /anchors</span></span> REQUEST

```shell
curl --location --request GET https://api.dock.io/anchors \
  --header 'DOCK-API-TOKEN: API_KEY' \
  --data-raw ''

```


Return a list of all anchors created by the authenticated user, regardless of whether they have contributed to the batching or not.

> 200 Response

```json
[
  {
    "anchor":"54bdd55207c4d41d2b8a7780e967bb5a06bdfb793fc4055baf244e60cd0d839c",
    "type": "single",
    "data": {
      "proofs": [],
      "root":"0x54bdd55207c4d41d2b8a7780e967bb5a06bdfb793fc4055baf244e60cd0d839c",
      "documentIds": [
        "https://creds.dock.io/credential/b1ed680d3d2d8167dc31bc4913e9c511"
      ]
     },
     "created_at": "2021-11-12T13:53:51.640Z",
     "job_id": "827"
  }
]
```

<h3 id="list-anchors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|How many items to offset by for pagination|
|limit|query|integer|false|How many items to return at one time (max 64)|

<h3 id="list-anchors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return all anchors created by the user.|Inline|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|




## Get Anchor

> <span class="highlight"><span class="na">GET</span> /anchors/{anchor}</span></span> REQUEST

```shell
curl --location --request GET https://api.dock.io/anchors/{anchor} \
  --header 'DOCK-API-TOKEN: API_KEY'
  --data-raw ''

```


Get a specific anchor with the given ID.

<h3 id="get-anchor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anchor|path|[Hex32](#schemahex32)|true|An anchor id.|

> 200 Response

```json
{
  "type": "single",
  "proofs": [],
  "root": "0x00",
  "created_at": "2021-11-30T15:47:24.667Z"
}
```

<h3 id="get-anchor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and returns the anchor's details, e.g., `blockHash` and `root`.|[Anchor](#schemaanchor)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the anchor was not found.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|

## Verify Anchor

> <span class="highlight"><span class="nt">POST</span> /verify</span></span> REQUEST

```shell
curl --location --request POST https://api.dock.io/anchors \

  --header 'DOCK-API-TOKEN: API_KEY' \
  --header 'Content-Type: application/json' \
  --data-raw '[
  "can be a string",
  {
    "or": "a JSON document"
  }
]'
```

```json-doc

{
  "documents": [],
  "proofs": [],
  "root": "0x00"
}
```


Verify an anchor's merkle root and proof by supplying the source documents (array of strings of JSON objects, same as in anchor creation).

<h3 id="get-anchor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documents|body|array of strings or JSON|true|An array of strings or JSON objects to represent documents to be hashed|
|proofs|body|JSON object array|true|An array of proofs given on anchor creation|
|root|body|[Hex32](#schemahex32)|true|The anchor merkle root/ID.|


> 200 Response

```json
{
  "verified": true,
  "results": [
    {}
  ]
}
```

<h3 id="get-anchor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and returns the anchor's details, e.g., `blockHash` and `root`.|[Anchor](#schemaanchor)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|


<h1 id="jobs">Jobs</h1>

> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
  <a href="#get-job-status-and-data-parameters">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /jobs/{Id}
    </a>
    <br />
  </div>
</div>

In Dock Certs, "jobs" are blockchain transactions that we submit on your behalf. You can choose to either register a webhook or poll the API to receive job information. Certain things in the API, such as revoking a credential, require a blockchain transaction to finalize before the job can be considered "done". The time to wait varies on network load and other factors, but typically is within 5-10 seconds.

You can track the current job status by querying the job id returned as part of the initial API response that triggered the job. The work is done asynchronously.


## Get Job Status and Data

> <span class="highlight"><span class="na">GET</span> /jobs/{Id}</span></span> REQUEST

```shell
curl --location --request GET https://api.dock.io/jobs/{id} \
  --header 'DOCK-API-TOKEN: API_KEY'

```


To check the Job status and data, you can use the `GET` method and simply put the Job id. It will return information related to the job being processed and its associated blockchain transaction. On completion or failure, the job data will be updated with a response from the blockchain.

<h3 id="get-job-status-and-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[JobId](#schemajobid)|true|Represents a Job id.|

> 200 Response

```json
{
  "id": "123",
  "result": {
    "InBlock": "0x00"
  },
  "status": "finalized"
}
```

<h3 id="get-job-status-and-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and return the job description.|[JobDesc](#schemajobdesc)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the Job id was not found.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|


<h1 id="verify">Verify</h1>

## VCDM Verification

> <span class="highlight"><span class="nt">POST</span> /verify</span></span> REQUEST

```shell
curl --location --request POST https://api.dock.io/verify \
  --header 'DOCK-API-TOKEN: API_KEY'
  --header 'Content-Type: application/json' \
  --data-raw '{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "https://creds.dock.io/credential/93a1cd57a46fd5e6e641f0288e2f8b44",
  "type": [
    "VerifiableCredential"
  ],
  "credentialSubject": [
    {
      "id": "did:dock:5Gwh4PxDjLUXnfqExALYTju9UpZTHzBLNb7j8Ug8NhTKivUe"
    }
  ],
  "issuanceDate": "2021-11-18T19:28:49.840Z",
  "proof": {
    "type": "EcdsaSecp256k1Signature2019",
    "created": "2021-11-18T19:28:51Z",
    "verificationMethod": "did:dock:5FfmGmkY1BqEqRQhRLCLDLHPBFvhSbEBK3DJhEk9mbkpfAXT#keys-1",
    "proofPurpose": "assertionMethod",
    "proofValue": "zAN1rKvtics5d8AZ5rvm9n9DNjfXGtFegv48PorsWvQdeVKPkzSSyKJzdN3jjnfTNqFDg5FWpXeYhubsFKnX8zLNiBsb3D32k3"
  },
  "issuer": {
    "id": "did:dock:5FfmGmkY1BqEqRQhRLCLDLHPBFvhSbEBK3DJhEk9mbkpfAXT",
    "name": "my issuer"
  }
}'


```

```json-doc

{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "https://creds.dock.io/credential/93a1cd57a46fd5e6e641f0288e2f8b44",
  "type": [
    "VerifiableCredential"
  ],
  "credentialSubject": [
    {
      "id": "did:dock:5Gwh4PxDjLUXnfqExALYTju9UpZTHzBLNb7j8Ug8NhTKivUe"
    }
  ],
  "issuanceDate": "2021-11-18T19:28:49.840Z",
  "proof": {
    "type": "EcdsaSecp256k1Signature2019",
    "created": "2021-11-18T19:28:51Z",
    "verificationMethod": "did:dock:5FfmGmkY1BqEqRQhRLCLDLHPBFvhSbEBK3DJhEk9mbkpfAXT#keys-1",
    "proofPurpose": "assertionMethod",
    "proofValue": "zAN1rKvtics5d8AZ5rvm9n9DNjfXGtFegv48PorsWvQdeVKPkzSSyKJzdN3jjnfTNqFDg5FWpXeYhubsFKnX8zLNiBsb3D32k3"
  },
  "issuer": {
    "id": "did:dock:5FfmGmkY1BqEqRQhRLCLDLHPBFvhSbEBK3DJhEk9mbkpfAXT",
    "name": "my issuer"
  }
}
```

A verifier upon receiving a verifiable presentation verifies the validity of each credential in the presentation. This includes checking the correctness of the data model of the credential, the authenticity by verifying the issuer's signature and revocation status if the credential is revocable. It then checks whether the presentation contains the signature from the holder on the presentation, including his given challenge.

You can verify issued/received credentials and presentations using this route. Verification will check that the JSON-LD document's cryptographic proof is correct and that it has not been revoked. It will return a verification status with a boolean verified result.

<h3 id="verify-a-credential-or-presentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VerifiableCredential](#schemaverifiablecredential) or [VerifiablePresentation](#schemaverifiablepresentation)|true|Provide as the body a Verifiable Credential or Verifiable Presentation JSON-LD document.|

> 200 Response

```json
{
  "verified": true,
  "results": [...]
}
```

<h3 id="verify-a-credential-or-presentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return the verification result.|[VerificationResponse](#schemaverificationresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid credential params.|[Error](#schemaerror)|
|402|[Payment required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)|Transaction limit reached or upgrade required to proceed|[Error](#schemaerror)|


# Schemas

> Object Schemas

Data Schemas are useful when enforcing a specific structure on a collection of data like a Verifiable Credential. Other than that, Data Verification schema and Data Encoding Schemas are used to verify and map the structure and contents of a Verifiable Credential.

These are the schemas used in all API operations mentioned before, such as Error, Credential, Jobs, Anchor, Registry, and so on.

For a detailed example of the schema workflow. Please refer [here](https://github.com/docknetwork/dock-api-js/blob/main/workflows/schemaFlow.js).

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "status": 0,
  "type": "string",
  "message": "string"
}

```

This is a schema for an API Error.

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|status|integer|false|Status of the error.|
|type|string|false|Type of the error.|
|message|string|false|Message of the error.|

<h2 id="tocS_Hex32">Hex32</h2>
<!-- backwards compatibility -->
<a id="schemahex32"></a>
<a id="schema_Hex32"></a>
<a id="tocShex32"></a>
<a id="tocshex32"></a>

```json
"string"

```

32 byte hex string. Ignoring higher base (base64) for simplicity.

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|Hex32|string|false|32 byte hex string. Ignoring higher base (base64) for simplicity.|

<h2 id="tocS_JobStartedResult">JobStartedResult</h2>
<!-- backwards compatibility -->
<a id="schemajobstartedresult"></a>
<a id="schema_JobStartedResult"></a>
<a id="tocSjobstartedresult"></a>
<a id="tocsjobstartedresult"></a>

```json
{
  "id": "string",
  "data": {
    "did": "did:dock:xyz",
    "hexDid": "0x00",
  }
}

```

Object containing unique id of the background task and associated data. This id can be used to query the job status.

### Properties

|Name|Type|Description|
|---|---|---|
|id|[JobId](#schemajobid)|Unique id of the background task. This id can be used to query the job status.|
|data|object|Data of the object.|

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"

```

Unique id of the background task. This id can be used to query the job status


<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"in_progress"

```

This is a schema used in Job operation to get a status of the job.

### Enumerated Values

|Property|Value|Description|
|---|---|---|
|JobStatus|todo **or** finalized **or** in_progress **or** error.|Job Status variants.

<h2 id="tocS_JobDesc">JobDesc</h2>
<!-- backwards compatibility -->
<a id="schemajobdesc"></a>
<a id="schema_JobDesc"></a>
<a id="tocSjobdesc"></a>
<a id="tocsjobdesc"></a>

```json
{
  "id": "string",
  "result": {},
  "status": "todo",

}

```

This is a schema used in Job operation to get description of the job including the result if it is available.

### Properties

|Name|Type|Description|
|---|---|---|
|id|[JobId](#schemajobid)|Unique id of the background task. This id can be used to query the job status.|
|status|[JobStatus](#schemajobstatus)|Status of the job.|
|result|object|false|Result of the Job.|

<h2 id="tocS_DIDDock">DIDDock</h2>
<!-- backwards compatibility -->
<a id="schemadiddock"></a>
<a id="schema_DIDDock"></a>
<a id="tocSdiddock"></a>
<a id="tocsdiddock"></a>

```json
"did:dock:xyz"

```

DID as fully qualified, e.g., `did:dock:`.

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|DID|string|false|DID as fully qualified, e.g., `did:dock:`. You cannot specify your own DID, the DID value will be randomly generated.|

<h2 id="tocS_KeyType">KeyType</h2>
<!-- backwards compatibility -->
<a id="schemakeytype"></a>
<a id="schema_KeyType"></a>
<a id="tocSkeytype"></a>
<a id="tocskeytype"></a>

```json
"sr25519"

```

This is a schema type of public key for DID.



### Enumerated Values

|Property|Value|Description|
|---|---|---|
|KeyType|sr25519 **or** ed25519 **or** secp256k1|keyType DID variants.

<h2 id="tocS_SigType">SigType</h2>
<!-- backwards compatibility -->
<a id="schemasigtype"></a>
<a id="schema_SigType"></a>
<a id="tocSsigtype"></a>
<a id="tocssigtype"></a>

```json
"Sr25519Signature2020"

```

This is a schema used in Presentation operation that represents a type of signature.


### Enumerated Values

|Property|Value|Description|
|---|---|---|
|SigType|Sr25519Signature2020 **or** Ed25519Signature2018 **or** EcdsaSecp256k1Signature2019|SigType signature variants.

<h2 id="tocS_ProofPurpose">ProofPurpose</h2>
<!-- backwards compatibility -->
<a id="schemaproofpurpose"></a>
<a id="schema_ProofPurpose"></a>
<a id="tocSproofpurpose"></a>
<a id="tocsproofpurpose"></a>

```json
"assertionMethod"

```

This is a schema that represents a purpose of credential.


### Enumerated Values

|Property|Value|Description|
|---|---|---|
|ProofPurpose|assertionMethod **or** authentication|Purpose of credential.

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
[
  "string"
]

```

This is a schema that represents a JSON-LD context used in DID and Presentation.



<h2 id="tocS_DIDDoc">DIDDoc</h2>
<!-- backwards compatibility -->
<a id="schemadiddoc"></a>
<a id="schema_DIDDoc"></a>
<a id="tocSdiddoc"></a>
<a id="tocsdiddoc"></a>

```json
{
  "@context": [
    "string"
  ],
  "id": "did:dock:xyz",
  "authentication": [
    {}
  ]
}

```

This is a schema that represents a DID document. The current set of properties is incomplete

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|@context|[Context](#schemacontext)|false|JSON-LD context.|
|id|[DIDDock](#schemadiddock)|false|DID as fully qualified, e.g., `did:dock:`.|
|authentication|array|false|DID authentication.|


<h2 id="tocS_Credential">Credential</h2>
<!-- backwards compatibility -->
<a id="schemacredential"></a>
<a id="schema_Credential"></a>
<a id="tocScredential"></a>
<a id="tocscredential"></a>

```json
{
  "context": [
    "string"
  ],
  "type": [
    "string"
  ],
  "subject": {},
  "issuer": "did:dock:xyz",
  "issuanceDate": "2019-08-24T14:15:22Z",
  "expirationDate": "2019-08-24T14:15:22Z",
  "status": {}
}

```

This is a schema that represents a credential format expected by API caller when issuing a credential.

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|string(uri)|false|Credential ID. The default value is a creds.dock.io uri with random ID.|
|context|[string or object]|false|Credential context array of string URIs and/or embedded JSON-LD context objects. If no context parameter is supplied, we will auto generate contexts for you. If you do supply this parameter, you must ensure that all JSON-LD terms are defined. This is for advanced users.|
|type|[string]|false|Credential type. The default value is ['VerifiableCredential']|
|subject|object or [object]|true|Credential subject or subjects array.|
|schema|string|false|Schema ID returned by create schema route or a valid URI|
|issuer|[DIDDock](#schemadiddock)|false|Credential issuer. DID as fully qualified, e.g., `did:dock:`. If not supplied the credential will not be signed.|
|issuanceDate|string(date-time[RFC3339])|false|The date and time in GMT that the credential was issued specified in RFC 3339 format. The issuanceDate will be automatically set if not provided.|
|expirationDate|string(date-time[RFC3339])|false|The date and time in GMT that the credential expired is specified in RFC 3339 format. The default value of the expirationDate will be empty if the user does not provide it.|
|status|object or string|false|Revocation registry id or user supplied status object containg a Dock revocation registry identifier.|

<h2 id="tocS_VerifiablePresentation">VerifiablePresentation</h2>
<!-- backwards compatibility -->
<a id="schemaverifiablepresentation"></a>
<a id="schema_VerifiablePresentation"></a>
<a id="tocSverifiablepresentation"></a>
<a id="tocsverifiablepresentation"></a>

```json
{
  "@context": [
    "string"
  ],
  "id": "http://example.com",
  "type": [
    "string"
  ],
  "verifiableCredential": {
    "@context": [
      "string"
    ],
    "id": "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb",
    "type": [
      "string"
    ],
    "credentialSubject": {},
    "issuer": "did:dock:xyz",
    "issuanceDate": "2019-08-24T14:15:22Z",
    "expirationDate": "2019-08-24T14:15:22Z",
    "credentialStatus": {},
    "proof": {
      "type": "Sr25519Signature2020",
      "proofPurpose": "assertionMethod",
      "verificationMethod": "string",
      "created": "2019-08-24T14:15:22Z",
      "proofValue": "string"
    }
  },
  "proof": {
    "type": "Sr25519Signature2020",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "string",
    "created": "2019-08-24T14:15:22Z",
    "proofValue": "string"
  }
}

```

This is a schema that represents a Verifiable (signed) Presentation returned by API. The current set of properties is almost complete

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|@context|[Context](#schemacontext)|true|JSON-LD context.|
|id|string(uri)|true|Verifiable (signed) presentation id.|
|type|string|true|Verifiable (signed) presentation type.|
|verifiableCredential|[VerifiableCredential](#schemaverifiablecredential)|true|Verifiable (signed) Credential returned by API. The current set of properties is almost complete.|
|proof|object|true|Proof of credential.|

<h3 id="ProofChildPropertiesPresentation">Child Properties of Proof</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SigType](#schemasigtype)|true|Type of signature.|
|proofPurpose|[ProofPurpose](#schemaproofpurpose)|true|Purpose of credential.|
|verificationMethod|string|true|Verification method.|
|created|string(date-time[RFC3339])|true|The date and time in GMT that the credential was created specified in RFC 3339 format.|
|proofValue|string|true|none|Value of credential.|

<h2 id="tocS_VerifiableCredential">VerifiableCredential</h2>
<!-- backwards compatibility -->
<a id="schemaverifiablecredential"></a>
<a id="schema_VerifiableCredential"></a>
<a id="tocSverifiablecredential"></a>
<a id="tocsverifiablecredential"></a>

```json
{
  "@context": [
    "string"
  ],
  "id": "https://creds.dock.io/f087cbfabc90f8b996971ba47598e82b1a03523cb9460217ad58a819cd9c09eb",
  "type": [
    "string"
  ],
  "credentialSubject": {},
  "issuer": "did:dock:xyz",
  "issuanceDate": "2019-08-24T14:15:22Z",
  "expirationDate": "2019-08-24T14:15:22Z",
  "credentialStatus": {},
  "proof": {
    "type": "Sr25519Signature2020",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "string",
    "created": "2019-08-24T14:15:22Z",
    "proofValue": "string"
  }
}

```

This is a schema that represents a verifiable (signed) Credential returned by API. The current set of properties is almost complete.

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|@context|[Context](#schemacontext)|false|JSON-LD context.|
|id|string(uri)|false|Credential id.|
|type|[string]|false|Credential type.|
|credentialSubject|any|false|Credential subject.|
|issuer|[DIDDock](#schemadiddock)|false|Credential issuer or DID as fully qualified, e.g., `did:dock:`.|
|issuanceDate|string(date-time[RFC3339])|false|The date and time in GMT that the credential was issued specified in RFC 3339 format. The issuanceDate will be automatically set if not provided.|
|expirationDate|string(date-time[RFC3339])|false|The date and time in GMT that the credential expired is specified in RFC 3339 format. The default value of the expirationDate will be empty if the user does not provide it.|
|credentialStatus|any|false|Revocation registry id or user supplied status object.|
|proof|object|false|Proof of credential.|

<h3 id="ProofChildPropertiesCredentials">Child Properties of Proof</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|type|[SigType](#schemasigtype)|false|Type of signature.|
|proofPurpose|[ProofPurpose](#schemaproofpurpose)|false|Purpose of credential.|
|verificationMethod|string|false|Verification method.|
|created|string(date-time[RFC3339])|false|The date and time in GMT that the credential was created specified in RFC 3339 format.|
|proofValue|string|false|Value of credential.|

<h2 id="tocS_Anchor">Anchor</h2>
<!-- backwards compatibility -->
<a id="schemaanchor"></a>
<a id="schema_Anchor"></a>
<a id="tocSanchor"></a>
<a id="tocsanchor"></a>

```json
{
  "type": "single/batch",
  "proofs": [],
  "blockHash": "string",
  "root": "string",
  "created_at": "YYYY-"
}

```

An anchor, either a batched or single is the information that constitutes the credentials' proof of existence. The schema includes anchor, type (single, batch), block hash, block number and accompanying data (root, proofs) if any. It depends if the anchor was created using API or not.


<h2 id="tocS_Registry">Registry</h2>
<!-- backwards compatibility -->
<a id="schemaregistry"></a>
<a id="schema_Registry"></a>
<a id="tocSregistry"></a>
<a id="tocsregistry"></a>

```json
{
  "addOnly": true,
  "policy": [
    "did:dock:xyz"
  ]
}

```

This is a schema that represents a Revocation registry used in Revocation or Unrevocation.

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|addOnly|boolean|false|If the `addOnly` value is true, they cannot unrevoke and delete the registry. The default value for this is `false`.|
|policy|[[DIDDock](#schemadiddock)]|false|Only one policy supported as of now called `OneOf`.|

<h2 id="tocS_VerificationResponse">VerificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverificationresponse"></a>
<a id="schema_VerificationResponse"></a>
<a id="tocSverificationresponse"></a>
<a id="tocsverificationresponse"></a>

```json
{
  "verified": true,
  "results": [...]
}

```

This is a schema that is used to define whether a credential/presentation is verified or not

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "code": 0
}

```

This is a schema that represents a default response for a request made.


<script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@type": "WebAPI",
  "description": "Dock provides a complete solution for creating and managing verifiable credentials on the blockchain. This includes a free trial and simple, monthly pricing. Get started here: https://certs.dock.io/
",



  "name": "Dock API"
}
</script>
