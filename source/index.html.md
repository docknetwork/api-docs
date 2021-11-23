---
title: Dock API v1
language_tabs:
  - json-doc: Payload
  - shell: cURL
  - javascript: JavaScript
  - python: Python
  - php: PHP
  - go: Go
toc_footers:
  - <a href="https://console.api.dock.io/">Sign up for an API Key</a>
  - <a href="https://swagger.api.dock.io/">Swagger specification</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

# The Dock API
<em> A complete solution for creating, managing and presenting Verifiable Credentials. </em>

Dock provides a range of tools incorporating blockchain technology that enable businesses and developers to create and use verifiable credentials. Dock integrates industry-leading World Wide Web Consortium (W3C) and VCDM standards, allowing it to interoperate with other open source technologies. We provide a range of open-source software on [GitHub](https://github.com/docknetwork) that can be used alongside the API.

In addition to the code samples shown in these docs, we have provided various code samples for the common requests that you can easily access [here](https://github.com/docknetwork/dock-api-js/tree/main/examples).

We also offer a free trial, testnet sandboxing and fair monthly pricing. Sign up and [start issuing credentials with our API console](https://console.api.dock.io/). Please read our [Terms of Service](https://www.dock.io/terms-of-service) before using the Dock API. You can inspect and try out our [swagger console here](https://swagger.api.dock.io/).

## Primary Features
-	Easily issue, verify, manage, and revoke/unrevoke verifiable credentials.
- Create and manage decentralized identities (DIDs).
- Drop anchors on the blockchain for better validation and security.
- Create and assign schemas to credentials for compliance.
- Harness the security of the Dock blockchain, a network run by 50 independent validators.
- Work seamlessly across platforms with Dock’s standards-compliant, interoperable solutions.

# Getting Started

## Prerequisites
You must first have an account and acquire your credentials (API keys) before accessing the Dock API.

You can register an account and generate a key in our [API console](https://console.api.dock.io/).

<aside class="warning">
Keep in mind that your API keys should typically be kept private, so keep them safe! Do not post your private API keys on GitHub, in client-side code, or anywhere else that is publicly available.
</aside>

## Endpoints
The Dock API provides two endpoints based on which mode was selected when creating your API key. By default API keys are created for production. You can switch to **test mode** in the [API console](https://console.api.dock.io/) by clicking the "test mode" toggle in the top right next to your avatar icon. Once in **test mode** you will see only testnet transactions, API keys, webhooks etc. You can then create an API key from the API management screen to use with either endpoint. It should be noted that in **test mode** your used transaction count **will not increase or hit monthly limits** allowing for sandboxing on our testnet blockchain.

- For production mode, use the endpoint: [https://api.dock.io](https://api.dock.io)
- For test mode, use the endpoint: [https://api-testnet.dock.io](https://api-testnet.dock.io)

PLEASE NOTE: Any transaction you perform in **test mode** cannot be used for **production**. This means that, for example, any DID created in **test mode** will not work for issuing or verification in **production**.

## Authentication
The Dock API uses API keys to authenticate requests. You can obtain an API Key by signing into [the api console](https://console.api.dock.io). Once a key has been generated, it should be included in **all** request headers as below:

* API Key (accessToken)
    - Name: **DOCK-API-TOKEN**
    - OR HTTP Bearer Authorization

<aside class="notice">
When you generate an API key, you may include a list of whitelisted IP's that can use with that key.
</aside>

## Architecture Style
The Dock API is built using a [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) architecture. Our API uses standard HTTP response codes, authentication, delivers JSON-encoded responses, accepts form-encoded request bodies, and accepts form-encoded request bodies.

HTTPS is required for all API requests. Requests performed via plain HTTP will be rejected. API requests that do not include authentication will also fail. JSON requests should typically be encoded as UTF-8.

HTTP Method | Description
--------- | -----------
GET | Get one or many resources
POST | Creates a new resources
PATCH | Partially update a resource
DELETE | Delete a resource

## Rate Limits
We allow you to make up to 200 requests in a 2 minute window (avg 100 reqs/min or 1.6 reqs/second). If you exceed beyond that, you will receive a 429 Too Many Requests response and have to wait up to a minute for the next request depending on when you hit the limit. If you require higher rate limits, please [contact us](mailto:contact@dock.io).

## Error Handling
Dock API uses standard HTTP response codes to indicate if an API request was successful or unsuccessful.

The table below shows the most frequent HTTP error messages:


Code | Meaning
--------- | -----------
400 | Bad Request -- Your request was rejected (e.g., missing mandatory field).
401 | Unauthorized -- Do not own resource or have an invalid API key in the header.
404 | Not Found -- The resource that you're trying to interact with could not be found on the server.
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

# Postman collection
Download and use our [Postman Collection](https://github.com/docknetwork/api-docs/blob/main/Dock%20API.postman_collection.json) to experiment with basic API flows:

- Download Postman [here](https://www.postman.com/downloads/).
- Download our [API collection here](https://github.com/docknetwork/api-docs/blob/main/Dock%20API.postman_collection.json).
- Import Dock Collection in Postman with our API collection that you have downloaded previously. For the detailed instructions to import the json file, please refer [here](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/).
- Create a new environment in Postman. For the detailed instruction to create a new environment, please refer [here](https://learning.postman.com/docs/sending-requests/managing-environments/).
- In your new Postman environment, you need to create two new `ApiKey` and `BaseUrl` variables. Please refer [here](https://learning.postman.com/docs/sending-requests/variables/) for the instructions to set the new variables.
- Login to [Dock API console](https://console.api.dock.io/).
- Enable the **Test mode** in your API console to use the sandbox environment.
- In your API Console dashboard, click **Create API key** to generate the key, copy and save it.
- Set `ApiKey` initial and current values with the value that you generated in the API console.
- Set `BaseUrl` initial and current values with [https://api-testnet.dock.io](https://api-testnet.dock.io)

## Create credential and presentation flow

This flow refers to Postman, but the general steps are the same however you use the API. The Postman collection includes the scripts that automatically propagate results into the next request bodies when you follow the below steps. To issue a credential and or a presentation on the holder's behalf, the following steps are required:

> DID Create - 200 Response

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

* To create a new DID to issue with, go to **Create DID** and click **Send**. The `id` property denotes a job ID in the system that you can use to query for blockchain transaction status.


<aside class="notice">
Creating a DID submits a transaction to the blockchain, this could take some time to process. Please hit the `/jobs` endpoint to check the status of the job to see if it's finalized or not.
</aside>

> DID Created and resolved - 200 Response

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

* To verify if the new DID has been registered, go to **Verify DID Registered** and click **Send**.

<aside class="notice">
You only need to create a DID once and then you can issue many credentials with it. A subject/holder DID should not be the same as the issuer DID in a real world credential.
</aside>

* To create a Verifiable Credential using the the new issuer DID, go to **Create Signed Credential** and click **Send**. This will send some example credential data to the API and sign it with your DID keypair. It will return a Verifiable Credential that conforms to the W3C spec.

> CREDENTIAL ISSUED - 200 Response

```json
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "http://example.com/39",
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

* To verify if the credential's cryptographic proof, revocation status and more go to **Verify Signed Credential** and click **Send**.

> CREDENTIAL VERIFIED - 200 Response

```json
{
    "verified": true,
    "results": [ ... ]
}
```

<aside class="notice">
The next steps involve using the API to create presentations on behalf of your holders. Ideally, you should not do this and distribute the credential to your users and have their own wallet apps create the presentations for a verifier.
</aside>

* To create a Verifiable Presentation by using the credential, go to **Create Presentation** and click **Send**.

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
            "id": "http://example.com/39",
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

* The same credential verification route can be used to verify a presentation. In Postman, go to **Verify Presentation** and click **Send**.


<h1 id="dids">DIDs</h1>

> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
   <a href="#create-did">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /dids
    </a>
    <br />
   <a href="#get-did">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /dids/{did}
    </a>
    <br />
    <a href="#list-dids-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /dids
    </a>
    <br />
    <a href="#update-did">
      <span class="nt">PATCH</span>&nbsp;
      /dids/{did}
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

> <span class="highlight"><span class="nt">POST</span> /dids</span>

```shell
# You can also use wget
curl -X POST /dids \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript
const inputBody = '{
  "did": "did:dock:xyz",
  "controller": "did:dock:xyz",
  "keyType": "sr25519"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/dids',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.post('/dids', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/dids', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/dids", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```json-doc
{
  "did": "did:dock:xyz",
  "controller": "did:dock:xyz",
  "keyType": "sr25519"
}
```

A DID, a public key, and a controller are required to create a new DID. The controller is both the owner of the public key and a DID. The DID can be created using an auto-generated keypair, and the controller will be the same as the DID unless otherwise specified. The DID and public key have no cryptographic relation.

It is important to have a public key of one of its three supported types. Dock supports 3 types of public keys: `sr25519`, `ed25519`, and `secp256k1`.

<aside class="warning">
This operation counts towards your monthly transaction limits for each successful call
</aside>

<h3 id="create-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|body|[DID](#schemadid)|false|DID as fully qualified, e.g., `did:dock:`. Default value will is a randomly generated DID. |
|controller|body|[DID](#schemadid)|false|DID as fully qualified, e.g., `did:dock:`. The default value of the controller is the `did` property.|
|keyType|body|[KeyType](#schemakeytype)|false|Type of public key for DID. The default value of the keyType is `sr25519`.|

### Enumerated Values

|Parameter|Value|Desctiprion
|---|---|---|
|keyType|sr25519 **or** ed25519 **or** secp256k1| keyType signature variants.

> 200 Response

```json
{
  "id": "string",
  "data": {
    "did": "did:dock:xyz",
    "hexDid": "0x00",
  }
}
```

<h3 id="create-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will try to create DID. NOTE: DID does not exist on network until the job identified in the response is complete.|[JobStartedResult](#schemajobstartedresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid params.|[Error](#schemaerror)|



## Resolve DID

> <span class="highlight"><span class="na">GET</span> /dids/{did}</span>

```shell
# You can also use wget
curl -X GET /dids/{did} \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/dids/{did}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.get('/dids/{did}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/dids/{did}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/dids/{did}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

When a DID is provided in the path, the API will attempt to resolve that DID into a [DID document](https://www.w3.org/TR/did-core/#dfn-did-documents). This document contains the public keys and more information relating to that DID, check [the identity foundation did configuration](https://identity.foundation/.well-known/resources/did-configuration/) document to learn more.

The API supports resolving many DID methods, some examples are:

- `did:dock:5CEdyZkZnALDdCAp7crTRiaCq6KViprTM6kHUQCD8X6VqGPW` - resolves through the Dock blockchain
- `did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd` - the public key is embedded in the DID

<h3 id="get-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DID](#schemadid)|true|Represents a specific DID that uniquely identifies the key resource.|

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

## List DIDs

> <span class="highlight"><span class="na">GET</span> /dids</span>

```shell
# You can also use wget
curl -X GET /dids \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/dids',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.get('/dids', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/dids', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/dids/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

Return a list of all user's DIDs you've previously created. The DIDs are returned into a sorted DID document.

> 200 Response

```json
[
  {
    "@context": [
      "string"
    ],
    "id": "did:dock:xyz",
    "authentication": [
      {}
    ]
  }
]
```

<h3 id="list-dids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All of a user's DIDs fully resolved into DID documents.|[DIDDoc](#schemadiddoc)|







## Update DID

> <span class="highlight"><span class="nt">PATCH</span> /dids/{did}</span>

```shell
# You can also use wget
curl -X PATCH /dids/{did} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript
const inputBody = '{
  "controller": "did:dock:xyz",
  "keyType": "sr25519"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/dids/{did}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.patch('/dids/{did}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PATCH','/dids/{did}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "/dids/{did}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```json-doc
{
  "controller": "did:dock:xyz",
  "keyType": "sr25519"
}
```

The public key or the controller of an on-chain DID can be updated by preparing a signed key update. Updates the specified key by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the `keyType` parameter, that becomes the DID’s active source on the blockchain for all transactions in the future.

To rotate the key of an existing DID, the current key is used to sign an update message containing the new public key and optionally the new controller (if a controller is not supplied, the controller remains unchanged). The update message contains the block number for the last update of the DID.

<aside class="warning">
This operation counts towards your monthly transaction limits for each successful call
</aside>

<h3 id="update-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DID](#schemadid)|true|Represents a specific DID that uniquely identifies the key resource.|
|controller|body|[DID](#schemadid)|false|DID as fully qualified, e.g., `did:dock:`. The default value of the controller is the DID value.|
|keyType|body|[KeyType](#schemakeytype)|false|Type of the public key for DID. The default value of the keyType is sr25519.|

An example Dock DID:`did:dock:5CEdyZkZnALDdCAp7crTRiaCq6KViprTM6kHUQCD8X6VqGPW`

### Enumerated Values

|Parameter|Value|Description|
|---|---|---|
|keyType|sr25519 **or** ed25519 **or** secp256k1|keyType signature variants.

> 200 Response

```json
"string"
```

<h3 id="update-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will update DID.|[JobId](#schemajobid)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The request was unsuccessful, because you don't own the DID.|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The DID does not exist.|[Error](#schemaerror)|


## Delete DID

> <span class="highlight"><span class="kd">DELETE</span> /dids/{did}</span>

```shell
# You can also use wget
curl -X DELETE /dids/{did} \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/dids/{did}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.delete('/dids/{did}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/dids/{did}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/dids/{did}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

A DID can be deleted from the blockchain by sending the corresponding message signed with the current key. However, further attempts to resolve this DID will fail.

It should be noted that the accounts used to send the transactions are unrelated to the keys connected with the DID. As a result, the DID may have been created with one account, updated, and deleted with another account. In the data model, the accounts are irrelevant, and they are not connected with the DID in the chain state.

<aside class="warning">
This operation counts towards your monthly transaction limits for each successful call
</aside>

<h3 id="delete-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DID](#schemadid)|true|Represents a specific DID that uniquely identifies the key resource.|

An example Dock DID: `did:dock:5CEdyZkZnALDdCAp7crTRiaCq6KViprTM6kHUQCD8X6VqGPW`

> 200 Response

```json
"string"
```

<h3 id="delete-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will remove the DID.|[JobId](#schemajobid)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The request was unsuccessful, because you don't own the DID.|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The DID does not exist.|[Error](#schemaerror)|





<h1 id="credentials">Credentials</h1>

> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
    <a href="#issue-credentials">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /credentials
    </a>
    <br />
  </div>
</div>

You can create and sign Verifiable Credentials on the Dock API. By default, Dock does not store the credential - only its metadata. You can choose to persist a credential, in which case we will encrypt and store the credential for later retrieval using a password. Verifiable Credentials are cryptographically secure and tamper-proof. Once issued, they cannot be edited.

<h2 id="issue-credentials">Issue Credential</h2>

> <span class="highlight"><span class="nt">POST</span> /credentials</span>

```json-doc
{
  "persist": false,
  "credential": {
    "id": "http://example.com",
    "context": ["https://www.w3.org/2018/credentials/examples/v1"],
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
# You can also use wget
curl -X POST /credentials/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript
const inputBody = '{
  "credential": {
    "id": "http://example.com",
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/credentials',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.post('/credentials', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/credentials', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/credentials", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

Creates and issues a JSON-LD Verifiable Credential that conforms to the [W3C VCDM specification](https://www.w3.org/TR/vc-data-model/). The `type` values and subject properties must be represented by a schema URI in the `context` property.

<aside class="notice">
The <code>https://www.w3.org/2018/credentials/v1</code> context URI is always required and will be supplied by default if you don't specify your own <code>context</code> values.
</aside>

To sign a credential, an `issuer` must be supplied as either a fully qualified DID string or an object with at least an `id` property which is a fully qualified DID. (e.g: `did:dock:xyz`)

By default, Dock does not store the credential contents at all - only minimal credential metadata. You can choose to set the `persist` value to `true` and provide a `password` string which will store the credential contents encrypted on our platform. The following metadata is stored on each issuance:

- Credential ID property
- Credential size in bytes
- Issuer DID
- Issuance date

For a detailed example of the credential workflow. Please refer [here](https://github.com/docknetwork/dock-api-js/blob/main/workflows/credentialsFlow.js).

<aside class="warning">
This operation counts towards your monthly transaction limits for each successful call
</aside>

<h3 id="issue-a-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|persist|body|boolean|false|Whether to store an encrypted version of this credential with us. Defaults to false, if true you must supply password.|
|password|body|string|false|Password used to encrypt the credential if you choose to store it. The same password must be used to retrieve the credential contents. Dock does not store this password.|
|credential|body|[Credential](#schemacredential)|true|Credential object as described in the [schema](#schemacredential).|

> 200 Response

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.com",
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


<h1 id="presentations">Presentations</h1>

The presentation is signed using the holder's private key as it is being created. To validate the presentation, the verifier must also check the issuer's signature and the holder's public key. One way to achieve this is to make the holder have a DID too, so that the verifier can look up the DID on the chain and learn the public key.

The API allows you to create and sign a verifiable presentation out of one or more Verifiable Credentials.

For a detailed example of the presentations workflow. Please refer [here](https://github.com/docknetwork/dock-api-js/blob/main/workflows/presentationsFlow.js).

<h2 id="create-a-presentation">Create Presentation</h2>

> <span class="highlight"><span class="nt">POST</span> /presentations</span>

```shell
# You can also use wget
curl -X POST /presentations/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript
const inputBody = '{
  "holder": "did:dock:xyz",
  "challenge": "string",
  "domain": "string",
  "credentials": [
    {
      "@context": [
        "string"
      ],
      "id": "http://example.com",
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/presentations',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.post('/presentations', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/presentations', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/presentations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

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
      "id": "http://example.com",
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

<aside class="warning">
This operation counts towards your monthly transaction limits for each successful call
</aside>

<h3 id="create-a-presentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|holder|body|[DIDQualified](#schemadidqualified)|true|DID as fully qualified, e.g., `did:dock:...`.|
|challenge|body|string|false|Presentation's Challenge in a string format. The default value for this is `random hex string`.|
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
}
```

<h3 id="create-a-presentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and returns a Verifiable Presentation.|[VerifiablePresentation](#schemaverifiablepresentation)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid/insufficient parameters.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The request was unsuccessful, either because of a missing/invalid auth header or you don't own the DID.|[Error](#schemaerror)|


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

There can be multiple registries on the chain, and each registry has a unique id. It is recommended that the revocation authority create a new registry for each credential type. Dock API allows you to create, delete, and revoke/unrevoke the credential. You can retrieve a specified registry as well as a list of all registries created by the user.

For a detailed example of the registry workflow. Please refer [here](https://github.com/docknetwork/dock-api-js/blob/main/workflows/registryFlow.js).

## Create Registry

> <span class="highlight"><span class="nt">POST</span> /registries</span>

```shell
# You can also use wget
curl -X POST /registries/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript
const inputBody = '{
  "addOnly": true,
  "policy": [
    "did:dock:xyz"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/registries',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.post('/registries', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/registries', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/registries", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

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

<aside class="warning">
This operation counts towards your monthly transaction limits for each successful call
</aside>

<h3 id="create-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addOnly|body|boolean|false|True/false options. The default value is "false".|
|policy|body|[[DID](#schemadid)]|true|The DIDs which control this registry. You must own a DID listed here to use the registry. Only one policy supported as of now: `OneOf` DID in list.|

> 200 Response

```json
{
  "id": "string",
  "data": {
    "did": did:dock:xyz,
    "hexDid": 0x00,
  }
}
```

<h3 id="create-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will try to create the registry.|[JobStartedResult](#schemajobstartedresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid params, e.g., policy not supported.|[Error](#schemaerror)|

## List Registries

> <span class="highlight"><span class="na">GET</span> /registries</span>

```shell
# You can also use wget
curl -X GET /registries/ \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/registries',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.get('/registries', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/registries', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/registries", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```


Return a list of all registries created by the user. The list is returned with the registry id and policy of the revocation registry.

<aside class="notice">
For now, only one policy is supported, and each registry is owned by a single DID.
</aside>


> 200 Response

```json
[
  {
    "id": "string",
    "registry": {
      "addOnly": true,
      "policy": [
        "did:dock:xyz"
      ]
    }
  }
]
```

<h3 id="list-registries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return all registries created by the user.|Inline|

## Get Registry

> <span class="highlight"><span class="na">GET</span> /registries/{id}</span>

```shell
# You can also use wget
curl -X GET /registries/{id} \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/registries/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.get('/registries/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/registries/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/registries/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```


 Get the details of an existing registry, such as policy, add-only status, when it was last updated, and controller(s). You need only supply the revocation registry id that was returned upon revocation registry creation.

<h3 id="get-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Hex32](#schemahex32)|true|Revocation registry id.|

> 200 Response

```json
{
  "addOnly": true,
  "policy": [
    "did:dock:xyz"
  ]
}
```

<h3 id="get-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return the revocation registry metadata.|[Registry](#schemaregistry)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the registry was not found.|[Error](#schemaerror)|


## Revoke/Unrevoke Credential

> <span class="highlight"><span class="nt">POST</span> /registries/{id}</span>

```shell
# You can also use wget
curl -X POST /registries/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript
const inputBody = '{
  "action": "revoke",
  "credentialIds": [
    "http://example.com"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/registries/{id}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.post('/registries/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/registries/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/registries/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```json-doc
{
  "action": "revoke",
  "credentialIds": [
    "http://example.com"
  ]
}
```


Credential revocation is managed with on-chain revocation registries. To revoke a credential, its id (or hash of its id) must be added to the credential. It is advised to have one revocation registry per credential type. Revoking an already revoked credential has no effect.

Similar to the replay protection mechanism for DIDs, the last modified block number is kept for each registry, which is updated each time a credential is revoked or unrevoked. Unrevoking an unrevoked credential has no effect.

In this API, simply add Revoke/Unrevoke into the `action` parameter and input the desired credential ids.

<aside class="warning">
This operation counts towards your monthly transaction limits for each successful call
</aside>

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
  "id": "string",
  "data": {
    "did": did:dock:xyz,
    "hexDid": 0x00,
  }
}
```

<h3 id="revoke/unrevoke-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will try to revoke/unrevoke the credential.|[JobStartedResult](#schemajobstartedresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid params.|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the registry was not found.|[Error](#schemaerror)|



## Delete Registry

> <span class="highlight"><span class="kd">DELETE</span> /registries/{id}</span>

```shell
# You can also use wget
curl -X DELETE /registries/{id} \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/registries/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.delete('/registries/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/registries/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/registries/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```


A registry can be deleted, leading to all the corresponding revocation ids being deleted as well. This requires the signature from the owner, similar to the other updates.

<aside class="warning">
This operation counts towards your monthly transaction limits for each successful call
</aside>

<h3 id="delete-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Hex32](#schemahex32)|true|Revocation registry id.|

> 200 Response

```json
{
  "id": "string",
  "data": {
    "did": did:dock:xyz,
    "hexDid": 0x00,
  }
}
```

<h3 id="delete-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and revocation registry will be deleted.|[JobStartedResult](#schemajobstartedresult)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the registry was not found.|[Error](#schemaerror)|



<h1 id="revocationstatus">Revocation Status</h1>

Once the registry is being revoked or unrevoked, you can check its status with the registry id and revocation id.

## Get Revocation Status

> <span class="highlight"><span class="na">GET</span> /revocationStatus/{regId}/{revId}</span>

```shell
# You can also use wget
curl -X GET /revocationStatus/{regId}/{revId} \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/revocationStatus/{regId}/{revId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.get('/revocationStatus/{regId}/{revId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/revocationStatus/{regId}/{revId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/revocationStatus/{regId}/{revId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

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


<h1 id="credential-schemas">Credential Schemas</h1>

> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
  <a href="#get-schema-parameters">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /schemas/{schemaId}
    </a>
    <br />
        <a href="#list-schemas-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /schemas
    </a>
    <br />
        <a href="#create-schema-responses">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /schemas
    </a>
    <br />
  </div>
</div>

Schemas are useful when enforcing a specific structure on a collection of data like a Verifiable Credential. Data Verification schemas, for example, are used to verify that the structure and contents of a Verifiable Credential conform to a published schema. On the other hand, Data Encoding schemas are used to map the contents of a Verifiable Credential to an alternative representation format, such as a binary format used in a zero-knowledge proof.

Before diving further into Schemas, it is important to understand how they are stored in the Dock chain. Schemas are stored on chain as a `Blob` in the Blob Storage module. They are identified and retrieved by their unique blob id, a 32 byte long hex string. They are authored by a DID and have a max size of 1024 bytes.

## Get Schema

> <span class="highlight"><span class="na">GET</span> /schemas/{schemaId}</span>

```shell
# You can also use wget
curl -X GET /schemas/{schemaId} \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/schemas/{schemaId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.get('/schemas/{schemaId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/schemas/{schemaId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/schemas/{schemaId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

Reading a Schema from the Dock chain can easily be achieved by using the `get` method which will return the JSON schema to a specific schema ID.

<h3 id="get-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schemaId|path|[Hex32](#schemahex32)|true|A schema id.|

> 200 Response

```json
{
  "id": "string",
  "schema": {}
}
```

<h3 id="get-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and returns the requested Schema.|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the schema was not found.|[Error](#schemaerror)|


## List Schemas

> <span class="highlight"><span class="na">GET</span> /schemas</span>


```shell
# You can also use wget
curl -X GET /schemas \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/schemas',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.get('/schemas/', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/schemas', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/schemas", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```


Return a list of all schemas created by the authenticated user.

> 200 Response

```json
[
  {}
]
```

<h3 id="list-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return all schemas created by the user.|Inline|


## Create Schema

> <span class="highlight"><span class="nt">POST</span> /schemas</span>

```shell
# You can also use wget
curl -X POST /schemas \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/schemas',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.post('/schemas', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/schemas', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/schemas", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

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

<aside class="warning">
This operation counts towards your monthly transaction limits for each successful call
</aside>

<h3 id="create-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|JSON-schema.|

> 200 Response

```json
"string"
```

<h3 id="create-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will try to create schema.|[JobId](#schemajobid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid params, e.g., size not supported or not JSON.|[Error](#schemaerror)|


<h1 id="anchors">Anchors</h1>

> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
  <a href="#get-anchor-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /anchors/{anchor}
    </a>
    <br />
        <a href="#list-anchors-responses">
      <span class="na">GET</span>&nbsp;&nbsp;&nbsp;
      /anchors
    </a>
    <br />
        <a href="#create-anchor-responses">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /anchors
    </a>
    <br />
  </div>
</div>

Anchoring allows users to store a digest of one or more credentials (or any files) on our blockchain, tying them to immutable timestamps and proving that they were generated at a certain moment in time. By enabling this feature, users will have more options for auditing credentials given and timestamping any documents.

The Dock Blockchain includes a module explicitly intended for proof of existence. You post the hash of a document on-chain at a specific block. Later you can use that hash to prove the document existed at or before that block.

The API allows you to create, get, and retrieve anchors as well as a list of all anchors created by the user.

For a detailed example of the anchor workflow. Please refer [here](https://github.com/docknetwork/dock-api-js/blob/main/workflows/anchorsFlow.js).

## Get Anchor

> <span class="highlight"><span class="na">GET</span> /anchors/{anchor}</span>

```shell
# You can also use wget
curl -X GET /anchors/{anchor} \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/anchors/{anchor}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.get('/anchors/{anchor}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/anchors/{anchor}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/anchors/{anchor}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```


Get a specific anchor with the given ID.

<h3 id="get-anchor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anchor|path|[Hex32](#schemahex32)|true|An anchor id.|

> 200 Response

```json
{
  "anchor": "string",
  "blockHash": "string",
  "root": "string"
}
```

<h3 id="get-anchor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and returns the anchor's details, e.g., `blockHash` and `root`.|[Anchor](#schemaanchor)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the anchor was not found.|[Error](#schemaerror)|


## List Anchors

> <span class="highlight"><span class="na">GET</span> /anchors</span>

```shell
# You can also use wget
curl -X GET /anchors \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/anchors',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.get('/anchors', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/anchors', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/anchors", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

Return a list of all anchors created by the authenticated user, regardless of whether they have contributed to the batching or not.

> 200 Response

```json
[
  {
    "anchor": "5ec890117e7f8b5dda9930b1e19c27c2e27009d21b2f3aa0c42146655bfdf826",
    "type": "single",
    "data": {
      "proofs": [],
      "root":"0x5ec890117e7f8b5dda9930b1e19c27c2e27009d21b2f3aa0c42146655bfdf826"
  },
    "created_at": "2021-11-01T17:39:21.692Z",
    "job_id": "658"
 },
 {
  "anchor":"54bdd55207c4d41d2b8a7780e967bb5a06bdfb793fc4055baf244e60cd0d839c",
  "type": "single",
  "data": {
    "proofs": [],
    "root":"0x54bdd55207c4d41d2b8a7780e967bb5a06bdfb793fc4055baf244e60cd0d839c",
    "documentIds": [
      "https://creds.dock.io/credential/d1ed680d3d2d8167cc31bc4913e9c511"
    ]
   },
 "created_at": "2021-11-12T13:53:51.640Z",
 "job_id": "827"
 }
]
```

<h3 id="list-anchors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return all anchors created by the user.|Inline|


## Create Anchor

> <span class="highlight"><span class="nt">POST</span> /anchors</span>

```shell
# You can also use wget
curl -X POST /anchors \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript
const inputBody = '[
  "string"
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/anchors/',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.post('/anchors', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/anchors', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/anchors", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```json-doc
[
  {
  "id": "829",
  "data": {
  "root": "0xdfc3cd9ff7836143746c292d4099e62277fac4c2b6a1c004d784adcbc0319634",
  "proofs": []
    }
  }
]
```


To create an anchor, you can use more than one document; it is called Batching. Batching (combining multiple anchors into one) can be used to save on transaction costs by anchoring multiple documents in a single transaction as a Merkle tree.

The anchoring module is hashing algorithm and hash length agnostic. You can post a multi hash, or even use the identity hash; the chain doesn't care. One thing to note is that rather than storing your anchor directly, the anchoring module will store the `blake2b256` hash of the anchor. Dock provides a [fully functioning reference client](https://fe.dock.io/#/anchor/batch) for anchoring.

<aside class="warning">
This operation counts towards your monthly transaction limits for each successful call
</aside>

<h3 id="create-anchor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|Documents.|

> 200 Response

```json
"string"
```

<h3 id="create-anchor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will try to create an anchor on the blockchain.|[JobId](#schemajobid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid params.|[Error](#schemaerror)|


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


API requests that involve writing data to the blockchain trigger Jobs to do that work asynchronously.

You can track the current job status by querying the job id returned as part of the initial API response that triggered the job.


## Get Job Status and Data

> <span class="highlight"><span class="na">GET</span> /jobs/{Id}</span>

```shell
# You can also use wget
curl -X GET /jobs/{id} \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/jobs/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.get('/jobs/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/jobs/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/jobs/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```


To check the Job status and data, you can use the `GET` method and simply put the Job id. It will return information related to the job being processed and its associated blockchain transaction. On completion or failure, the job data will be updated with a response from the blockchain.

<h3 id="get-job-status-and-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[JobId](#schemajobid)|true|Represents a Job id.|

> 200 Response

```json
{
  "id": "string",
  "status": "todo",
  "result": {}
}
```

<h3 id="get-job-status-and-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and return the job description.|[JobDesc](#schemajobdesc)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The request was unsuccessful, because the Job id was not found.|[Error](#schemaerror)|


<h1 id="verify">Verify</h1>


> Endpoints

<div class="highlight">
  <div class="highlight shell align-code">
  <a href="#verify-a-credential-or-presentation-parameters">
      <span class="nt">POST</span>&nbsp;&nbsp;
      /verify
    </a>
    <br />
  </div>
</div>

A Verifier upon receiving a verifiable presentation verifies the validity of each credential in the presentation. This includes checking the correctness of the data model of the credential, the authenticity by verifying the issuer's signature and revocation status if the credential is revocable. It then checks whether the presentation contains the signature from the holder on the presentation, including his given challenge.


## Presentation/Credential Verification

> <span class="highlight"><span class="nt">POST</span> /verify</span>

```shell
# You can also use wget
curl -X POST /verify \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/verify/',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'DOCK-API-TOKEN': 'API_KEY'
}

r = requests.post('/verify', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'DOCK-API-TOKEN' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/verify', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "DOCK-API-TOKEN": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/verify", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```json-doc
{}
```


Once your Verifiable Credential (VCDM credential) has been signed, you can verify it with the verify method. The verify method takes an object of arguments and is optional.

Also, when your Verifiable Presentation (presentation JSON-LD object) has been signed, you can verify it with the verify method.

<h3 id="verify-a-credential-or-presentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VerifiableCredential](#schemaverifiablecredential) or [VerifiablePresentation](#schemaverifiablepresentation)|true|JSON-schema.|

> 200 Response

```json
{
  "verified": true
}
```

<h3 id="verify-a-credential-or-presentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will return the verification result.|[VerificationResponse](#schemaverificationresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The request was unsuccessful, because of invalid credential params.|[Error](#schemaerror)|


# Schemas

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
    "did": did:dock:xyz,
    "hexDid": 0x00,
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
"todo"

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
  "status": "todo",
  "result": {}
}

```

This is a schema used in Job operation to get description of the job including the result if it is available.

### Properties

|Name|Type|Description|
|---|---|---|
|id|[JobId](#schemajobid)|Unique id of the background task. This id can be used to query the job status.|
|status|[JobStatus](#schemajobstatus)|Status of the job.|
|result|object|false|Result of the Job.|

<h2 id="tocS_DIDQualified">DIDQualified</h2>
<!-- backwards compatibility -->
<a id="schemadidqualified"></a>
<a id="schema_DIDQualified"></a>
<a id="tocSdidqualified"></a>
<a id="tocsdidqualified"></a>

```json
"did:dock:xyz"

```

This is a schema used in some operations that used DID as fully qualified, e.g., `did:dock:xyz`.

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|DIDQualified|string(uri)|false|DID as fully qualified, e.g., `did:dock:xyz`.|

<h2 id="tocS_DID">DID</h2>
<!-- backwards compatibility -->
<a id="schemadid"></a>
<a id="schema_DID"></a>
<a id="tocSdid"></a>
<a id="tocsdid"></a>

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
|id|[DIDQualified](#schemadidqualified)|false|DID as fully qualified, e.g., `did:dock:`.|
|authentication|array|false|DID authentication.|


<h2 id="tocS_Credential">Credential</h2>
<!-- backwards compatibility -->
<a id="schemacredential"></a>
<a id="schema_Credential"></a>
<a id="tocScredential"></a>
<a id="tocscredential"></a>

```json
{
  "id": "http://example.com",
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

This is a schema that represents a credential format expected by API caller.

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|string(uri)|false|Credential ID. The default value is a creds.dock.io uri with random ID.|
|context|array|false|Credential context. The default value is https://www.w3.org/2018/credentials/v1.|
|type|[string]|false|Credential type. The default value is ['VerifiableCredential']|
|subject|object|true|Credential subject.|
|issuer|[DIDQualified](#schemadidqualified)|false|Credential issuer. DID as fully qualified, e.g., `did:dock:`. If not supplied the credential will not be signed.|
|issuanceDate|string(date-time[RFC3339])|false|The date and time in GMT that the credential was issued specified in RFC 3339 format. The issuanceDate will be automatically set if not provided.|
|expirationDate|string(date-time[RFC3339])|false|The date and time in GMT that the credential expired is specified in RFC 3339 format. The default value of the expirationDate will be empty if the user does not provide it.|
|status|object or string|false|Revocation registry id or user supplied status object.|

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
    "id": "http://example.com",
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
  "id": "http://example.com",
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
|issuer|[DIDQualified](#schemadidqualified)|false|Credential issuer or DID as fully qualified, e.g., `did:dock:`.|
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
  "anchor": "string",
  "blockHash": "string",
  "root": "string"
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
|policy|[[DID](#schemadid)]|false|Only one policy supported as of now called `OneOf`.|

<h2 id="tocS_VerificationResponse">VerificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverificationresponse"></a>
<a id="schema_VerificationResponse"></a>
<a id="tocSverificationresponse"></a>
<a id="tocsverificationresponse"></a>

```json
{
  "verified": true
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
  "description": "Dock provides a complete solution for creating and managing verifiable credentials on the blockchain. This includes a free trial and simple, monthly pricing. Get started here: https://console.api.dock.io/
",



  "name": "Dock API"
}
</script>
