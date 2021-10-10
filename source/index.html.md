---
title: Dock API v1
language_tabs:
  - shell: cURL
  - javascript: JavaScript
  - python: Python
  - php: PHP
  - go: Go
toc_footers:
  - <a href="https://console.api.dock.io/">Sign up for an API Key</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="dock-api">Dock API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction
<em> A complete solution for creating, managing, and presenting credentials. </em>

Dock provides a range of tools incorporating blockchain technology that enable businesses and developers to create verifiable credentials. Dock integrates industry-leading World Wide Web Consortium (W3C) and VCDM standards, allowing it to interoperate with other open source technologies. It is also open source and licensed under permissive, developer-friendly terms.

Please read  [Terms of Service](https://www.dock.io/terms-of-service) before using the Dock API.

We also offer a free trial and fair monthly pricing. Begin by going to: https://console.api.dock.io/.

## Primary Features
-	Easily issue, verify, manage, and revoke/unrevoke verifiable credentials
- Create and manage decentralized identities (DIDs)
- Drop anchors on the blockchain for better validation and security
- Create and assign schemas to credentials for compliance
- Harness the security of the Dock blockchain, a network run by 50 independent validators
- Work seamlessly across platforms with Dock’s standards-compliant, interoperable solutions

# Getting Started

## Prerequisites
You must first have an account and acquire your credentials (API keys) before accessing the Dock API.

You can register an account and view your API keys in our [console](https://console.api.dock.io/).

<aside class="warning">
Keep in mind that your API keys have a lot of advantages, so keep them safe! Do not post your private API keys on GitHub, in client-side code, or anywhere else that is publicly available. 
</aside>

## Endpoints
The Dock API provides two endpoints based on which mode was selected when creating your API key. By default API keys are created for production. You can switch to **test mode** in the [API console](https://console.api.dock.io/) by clicking the "test mode" toggle in the top right next to your avatar icon. Once in **test mode** you will see only testnet transactions, API keys, webhooks etc. You can then create an API key from the API management screen to use with either endpoint. It should be noted that in **test mode** your used transaction count **will not increase or hit monthly limits** allowing for sandboxing on our testnet blockchain.

For production mode, use the endpoint: https://api.dock.io
For test mode, use the endpoint: https://api-testnet.dock.io

PLEASE NOTE: Any transaction you perform in **test mode** cannot be used for **production**. This means that, for example, any DID created in **test mode** will not work for issuing or verification in **production**.

## Authentication
The Dock API uses API keys to authenticate requests. You can obtain an API Key by signing into https://console.api.dock.io. For requests, the API Key has to be included in the header, and the website will use a password-free way through email links.

* API Key (accessToken)
    - Parameter Name: **DOCK-API-TOKEN**, in: header. 

<aside class="notice">
An API key may also be IP restricted - when you generate the API key, you can include a list of IP's that are linked with that key.
</aside>

## Architecture Style
The Dock API is built on the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) architecture. Our API uses standard HTTP response codes, authentication, delivers JSON-encoded responses, accepts form-encoded request bodies, and accepts form-encoded request bodies. 

HTTPS is required for all API requests. Requests performed via plain HTTP will be rejected. API requests that do not include authentication will also fail. We also support UTF-8 encoding style.

The table below demonstrates how HTTP methods, including RESTful APIs, are intended to be used in HTTP APIs:

HTTP Method | Description
--------- | -----------
GET | Get a representation of the target resource’s state.
POST | Allow the representation included in the request to be processed by the target resource. 
PATCH | Be able to partially update a resource (in this case, DID's).
DELETE | Delete the state of the target resource.

## Rate Limits
We limit the requests per window per IP. We allow you to make up to 100 calls/minute. If you exceed beyond that, you will reveive a 429 Too Many Requests response and have to wait up to a minute for the next request. 

## Error Handling
Dock API uses standard HTTP response codes to indicate if an API request was successful or unsuccessful. 

The table below shows the most frequent HTTP error messages:
Code | Meaning
--------- | -----------
400 | Bad Request -- Your request was rejected (e.g., missing mandatory field).
401 | Unauthorized -- You're missing or have an invalid API key in the header. 
404 | Not Found -- The page that you're trying to open could not be found on the server.
429 | Too Many Requests -- You sent too many requests. Please try to reduce the number of requests.
500 | Server Errors -- Something has gone wrong on the server. Please try to reload the page or clear both cookies and cache.

# Terminology
It is important to fully understand all the terminologies within Dock ecosystem. The following are common terminologies within our ecosystem:
Terminology | Description
--------- | -----------
DID | DID stands for Decentralized Identifiers. It is a new type of identifier that enables verifiable, decentralized digital identity. A DID refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the DID. For more information, please refer [here](https://docknetwork.github.io/sdk/tutorials/concepts_did.html).
Anchoring | A feature that allows users to store a digest of one or more credentials (or any files) on our blockchain so that they are associated with immutable timestamps and hence can be proven to have been created at a certain point in time. 
Data Schema | The structure that describes the logical view of the data. It is useful to enforce a specific structure on a collection of data like a Verifiable Credential. 
Blob | Blob stands for Binary Large OBject. It is a collection of binary data stored as a single entity. The schemas are identified and retrieved by their unique blob id, which is a 32-byte long hex string. 
DID Resolver | The tool that initiates the process of learning the DID document. 

<h1 id="dock-api-dids">DIDs</h1>

DID stands for Decentralized IDentifiers. DIDs in Dock are created by choosing a 32 byte unique (on Dock chain) identifier along with a public key. 

These are the operations about DIDs:

## Get DID

> Code samples

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

`GET /dids/{did}`

The process of learning the DID Document of a DID is called DID resolution, and the tool that resolves is called the resolver.

This is an operation to resolves a specific DID into a DID document.

<h3 id="get-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DID](#schemadid)|true|represents a specific DID|

An example Dock DID: `did:dock:5CEdyZkZnALDdCAp7crTRiaCq6KViprTM6kHUQCD8X6VqGPW`

> Example responses

> 200 Response

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

<h3 id="get-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and return the DID doc|[DIDDoc](#schemadiddoc)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|DID entered in parameter was not found.|[Error](#schemaerror)|

To view an example of a DID doc, please refer [here](https://docknetwork.github.io/sdk/tutorials/concepts_did.html).

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Update DID

> Code samples

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

`PATCH /dids/{did}`

The public key or the controller of an on-chain DID can be updated by preparing a signed key update. 

This is an operation to updates the DID's key or controller on the blockchain.

> Body parameter

```json
{
  "controller": "did:dock:xyz",
  "keyType": "sr25519"
}
```

<h3 id="update-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DID](#schemadid)|true|represents a specific DID|
|controller|body|[DID](#schemadid)|false|DID as fully qualified, eg. `did:dock:` or 32 byte hex string|
|keyType|body|[KeyType](#schemakeytype)|false|Type of public key for DID|


An example Dock DID: `did:dock:5CEdyZkZnALDdCAp7crTRiaCq6KViprTM6kHUQCD8X6VqGPW`

#### Enumerated Values

|Parameter|Value|
|---|---|
|keyType|sr25519|
|keyType|ed25519|
|keyType|secp256k1|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="update-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will update DID.|[JobId](#schemajobid)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Does not own the DID|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|DID does not exist|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Delete DID

> Code samples

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

`DELETE /dids/{did}`

This is an operation to delete a DID from the blockchain. However, further attempts to resolve this DID will fail.

<h3 id="delete-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DID](#schemadid)|true|represents a specific DID|

An example Dock DID: `did:dock:5CEdyZkZnALDdCAp7crTRiaCq6KViprTM6kHUQCD8X6VqGPW`

> Example responses

> 200 Response

```json
"string"
```

<h3 id="delete-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will remove DID.|[JobId](#schemajobid)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Does not own the DID|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|DID does not exist|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## List DIDs

> Code samples

```shell
# You can also use wget
curl -X GET /dids/ \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/dids/',
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

r = requests.get('/dids/', headers = headers)

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
    $response = $client->request('GET','/dids/', array(
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

`GET /dids/`

This is an operation to get all the DID's users, and the list will be resolved into DID documents.

> Example responses

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All of a user's DIDs fully resolved into DID documents|Inline|

<h3 id="list-dids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DIDDoc](#schemadiddoc)]|false|none|[DID document. The current set of properties is incomplete]|
|» @context|any|false|none|JSON-LD context|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|[string]|false|none|Schemas with no identifier|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|string|false|none|Schemas with no identifier|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|[DIDQualified](#schemadidqualified)(url)|false|none|DID as fully qualified, eg. `did:dock:`.|
|» authentication|[oneOf]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Create DID

> Code samples

```shell
# You can also use wget
curl -X POST /dids/ \
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

fetch('/dids/',
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

r = requests.post('/dids/', headers = headers)

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
    $response = $client->request('POST','/dids/', array(
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
    req, err := http.NewRequest("POST", "/dids/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /dids/`

<<<<<<< HEAD
This an operation to create a new DID on chain with an auto generated keypair, the controller will be the same as the DID unless otherwise specified. The DID is not yet registered on the chain. Before the DID can be registered, a public key needs to be created as well.
=======
This an operation to creates a new DID on chain with an auto generated keypair, the controller will be the same as the DID unless otherwise specified. The DID is not yet registered on the chain. Before the DID can be registered, a public key needs to created as well.
>>>>>>> a53e7729aff2b41dcd7d268f4ca21d56a3cbc65a

> Body parameter

```json
{
  "did": "did:dock:xyz",
  "controller": "did:dock:xyz",
  "keyType": "sr25519"
}
```

<h3 id="create-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|body|[DID](#schemadid)|false|DID as fully qualified, eg. `did:dock:` or 32 byte hex string|
|controller|body|[DID](#schemadid)|false|DID as fully qualified, eg. `did:dock:` or 32 byte hex string|
|keyType|body|[KeyType](#schemakeytype)|false|Type of public key for DID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|keyType|sr25519|
|keyType|ed25519|
|keyType|secp256k1|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "data": {}
}
```

<h3 id="create-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will try to create DID. DID does not exist on network as of now.|[JobStartedResult](#schemajobstartedresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid params|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

<h1 id="dock-api-credentials">Credentials</h1>
 
 These are the operations about credentials:

## Issue a credential

> Code samples

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

fetch('/credentials/',
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

r = requests.post('/credentials/', headers = headers)

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
    $response = $client->request('POST','/credentials/', array(
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
    req, err := http.NewRequest("POST", "/credentials/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /credentials/`

<<<<<<< HEAD
To issue a verifiable credential, the issuer needs to have a public key that is accessible by the holder and verifier to verify the signature (in proof) in the credential. This is an operation to create and issues a verifiable credential with supplied data. Remember, issuing counts as a paid transaction.
=======
To issue a verifiable credential, the issuer needs to have a public key that is accessible by the holder and verifier to verify the signature (in proof) in the credential. This is an operation to creates and issues a verifiable credential with supplied data. Remember, issuing counts as a paid transaction.
>>>>>>> a53e7729aff2b41dcd7d268f4ca21d56a3cbc65a

> Body parameter

```json
{
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
}
```

<h3 id="issue-a-credential-parameters">Parameters</h3>

To view a sample of the parameter usage, please refer [here](https://docknetwork.github.io/sdk/tutorials/tutorial_ipv.html).

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|credential|body|[Credential](#schemacredential)|false|Credential format expected by API caller. The current set of is almost complete|

<h3 id="issue-a-credential-parameters">Child Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|body|string(uri)|false|DID as fully qualified, eg. did:dock:.|
|context|body|[string]|false|Verifiable credential context|
|type|body|[string]|false|Verifiable credential type|
|subject|body|object|false|Verifiable credential subject|
|issuer|body|any|false|Verifiable credential issued using DIDs|
|»»» *anonymous*|body|[DIDQualified](#schemadidqualified)(uri)|false|DID as fully qualified, eg. `did:dock:`.|
|issuanceDate|body|string(date-time)|false|The issuance date which set by default to the first initialize datetime
|expirationDate|body|string(date-time)|false|An expiration date is not set by default as it isn't required by the specs.|
|status|body|any|false|Revocation registry id or user supplied status object|

> Example responses

> 200 Response

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

<h3 id="issue-a-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and return a Verifiable Credential.|[VerifiableCredential](#schemaverifiablecredential)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid/insufficient credential params.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|User does not own DID.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

<h1 id="dock-api-presentations">Presentations</h1>

The presentation indicates which credentials it is about and must be signed by the holder of the credentials.

These are the operations about presentations:

## Create a presentation

> Code samples

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

fetch('/presentations/',
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

r = requests.post('/presentations/', headers = headers)

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
    $response = $client->request('POST','/presentations/', array(
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
    req, err := http.NewRequest("POST", "/presentations/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /presentations/`

The holder while creating the presentation signs it with his private key. For the verifier to verify the presentation, in addition to verifying the issuer's signature, he/she needs to verify this signature as well, and for that he must know the holder's public key.

<<<<<<< HEAD
This is an operation to create and sign a verifiable presentation out of one or more Verifiable Credentials. Remember, signing counts as a paid transaction.
=======
This is an operation to creates and signs a verifiable presentation out of one or more Verifiable Credentials. Remember, signing counts as a paid transaction.
>>>>>>> a53e7729aff2b41dcd7d268f4ca21d56a3cbc65a

> Body parameter

```json
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

<h3 id="create-a-presentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|holder|body|[DIDQualified](#schemadidqualified)(uri)|false|DID as fully qualified, eg. `did:dock:`.|
|challenge|body|string|false|Presentation's Challenge string|
|domain|body|string|false|A domain string for the proof|
|credentials|body|[[VerifiableCredential](#schemaverifiablecredential)]|false|[Verifiable (signed) Credential returned by API. The current set of properties is almost complete]|

<h3 id="create-a-presentation-parameters">Child Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|@context|body|any|false|JSON-LD context|
|id|body|string(uri)|false|Presentation ID|
|type|body|[string]|false|Presentation type|
|credentialSubject|body|any|false|A credential subject|
|issuer|body|any|false|Issuer's ID. An issuer who issued a verifiable credential|
|»»» *anonymous*|body|[DIDQualified](#schemadidqualified)(uri)|false|DID as fully qualified, eg. `did:dock:`.|
|issuanceDate|body|string(date-time)|false|The issuance date which set by default to the first initialize datetime|
|expirationDate|body|string(date-time)|false|An expiration date is not set by default as it isn't required by the specs.|
|credentialStatus|body|any|false|Revocation registry id or user supplied status object|
|proof|body|object|false|Proof of stake chain|
|»»» type|body|[SigType](#Schemasigtype)|false|Type of signature|
|»»» proofPurpose|body|[ProofPurpose](#schemaproofpurpose)|false|Purpose of credential|
|»»» verificationMethod|body|string|false|The verification method|
|»»» created|body|string(date-time)|false|Created date|
|»»» proofValue|body|string|false|Proof of value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|Sr25519Signature2020|
|type|Ed25519Signature2018|
|type|EcdsaSecp256k1Signature2019|
|»»» proofPurpose|assertionMethod|
|»»» proofPurpose|authentication|

> Example responses

> 200 Response

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

<h3 id="create-a-presentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and return a Verifiable Credential.|[VerifiableCredential](#schemaverifiablecredential)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid/insufficient credential params.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|User does not own DID.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

<h1 id="dock-api-registries">Registries</h1>

On Dock, credential revocation is managed with a revocation registry. There can be multiple registries on the chain, and each registry has a unique id. It is recommended that the revocation authority creates a new registry for each credential type. 

These are the operations about managing the registries:

## Delete registry

> Code samples

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

`DELETE /registries/{id}`

A registry can be deleted, leading to all the corresponding revocation ids being deleted as well. This requires the signature from the owner, similar to the other updates. This is an operation to delete a specific registry.

<h3 id="delete-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Hex32](#schemahex32)|true|Revocation registry id|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "data": {}
}
```

<h3 id="delete-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Revocation Registry will be deleted|[JobStartedResult](#schemajobstartedresult)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Registry was not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Get registry

> Code samples

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

`GET /registries/{id}`

This is an operation to get the registry details, such as policy, add-only status, when it was last update, and controller(s).

<h3 id="get-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Hex32](#schemahex32)|true|Revocation registry id|

> Example responses

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Revocation Registry metadata|[Registry](#schemaregistry)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Registry was not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Revoke/unrevoke credential

> Code samples

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

`POST /registries/{id}`

This is an operation to revoke or unrevoke one or more credential ids. Simply add Revoke/Unrevoke into the `action` parameter and input the desired credential ids.

> Body parameter

```json
{
  "action": "revoke",
  "credentialIds": [
    "http://example.com"
  ]
}
```

<h3 id="revoke/unrevoke-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Hex32](#schemahex32)|true|Revocation registry id|
|action|body|string|false|Action taken (Revoke/Unrevoke)|
|credentialIds|body|[string]|false|Credential Ids|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|revoke|
|action|unrevoke|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "data": {}
}
```

<h3 id="revoke/unrevoke-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and will try to revoke/unrevoke the credential.|[JobStartedResult](#schemajobstartedresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid params|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Registry was not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## List registries

> Code samples

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

fetch('/registries/',
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

r = requests.get('/registries/', headers = headers)

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
    $response = $client->request('GET','/registries/', array(
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
    req, err := http.NewRequest("GET", "/registries/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /registries/`

This is an operation to get all registries created by user.

> Example responses

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All registries by user|Inline|

<h3 id="list-registries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|[Hex32](#schemahex32)|false|none|32 byte hex string. Ignoring higher base (base64) for similicity.|
|» registry|[Registry](#schemaregistry)|false|none|Revocation registry|
|»» addOnly|boolean|false|none|none|
|»» policy|[[DID](#schemadid)]|false|none|Only one policy supported as of now called `OneOf`|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Create registry

> Code samples

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

fetch('/registries/',
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

r = requests.post('/registries/', headers = headers)

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
    $response = $client->request('POST','/registries/', array(
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
    req, err := http.NewRequest("POST", "/registries/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /registries/`

<<<<<<< HEAD
To create a registry, you have to create a Policy object for which a DID is needed. It is advised that the DID is registered on the chain first. Otherwise, someone can look at the registry a register the DID, thus controlling the registry.
=======
To create a registry, first a Policy object needs to be created for which a DID is needed. It is advised that the DID is registered on chain first (else someone can look at the registry a register the DID, thus controlling the registry).
>>>>>>> a53e7729aff2b41dcd7d268f4ca21d56a3cbc65a

This is an operation to create a Revocation registry on the blockchain

> Body parameter

```json
{
  "addOnly": true,
  "policy": [
    "did:dock:xyz"
  ]
}
```

<h3 id="create-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|» addOnly|body|boolean|false|none|
|» policy|body|[[DID](#schemadid)]|false|Only one policy supported as of now called `OneOf`|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "data": {}
}
```

<h3 id="create-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will try to create registry.|[JobStartedResult](#schemajobstartedresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid params like policy not supported.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

<h1 id="dock-api-revocationstatus">Revocation Status</h1>

After the registry is being revoked or unrevoked, you can check its status. These are the operations to check revocation status.

## Get revocation status

> Code samples

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

`GET /revocationStatus/{regId}/{revId}`

This is an operation to get the revocation status of a credential, whether it is revoked or not.

<h3 id="get-revocation-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regId|path|[Hex32](#schemahex32)|true|Revocation registry id|
|revId|path|[Hex32](#schemahex32)|true|Credential revocation id|

> Example responses

> 200 Response

```json
{
  "type": true
}
```

<h3 id="get-revocation-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns true of credential is revoked, false otherwise|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Registry was not found.|[Error](#schemaerror)|

<h3 id="get-revocation-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» type|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

<h1 id="dock-api-schemas">Schemas</h1>

Schemas are useful when enforcing a specific structure on a collection of data like a Verifiable Credential. Data Verification schemas, for example, are used to verify that the structure and contents of a Verifiable Credential conform to a published schema. Data Encoding schemas, on the other hand, are used to map the contents of a Verifiable Credential to an alternative representation format, such as a binary format used in a zero-knowledge proof.

These are the operations about schemas:

## Get schema

> Code samples

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

`GET /schemas/{schemaId}`

This is an operation to returns the JSON schema into a specific schema ID. JSON Schema can be used to require that a given JSON document (an instance) satisfies a certain number of criteria. JSON Schema validation asserts constraints on the structure of instance data.

<h3 id="get-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|schemaId|path|[Hex32](#schemahex32)|true|A schema id|

> Example responses

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and return a Schema.|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Schema was not found.|[Error](#schemaerror)|

<h3 id="get-schema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[Hex32](#schemahex32)|false|none|32 byte hex string. Ignoring higher base (base64) for similicity.|
|schema|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## List schemas

> Code samples

```shell
# You can also use wget
curl -X GET /schemas/ \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/schemas/',
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
    $response = $client->request('GET','/schemas/', array(
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
    req, err := http.NewRequest("GET", "/schemas/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /schemas/`

This is an operation to get all schemas created by user.

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="list-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All schemas by user|Inline|

<h3 id="list-schemas-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Create schema

> Code samples

```shell
# You can also use wget
curl -X POST /schemas/ \
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

fetch('/schemas/',
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

r = requests.post('/schemas/', headers = headers)

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
    $response = $client->request('POST','/schemas/', array(
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
    req, err := http.NewRequest("POST", "/schemas/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /schemas/`

<<<<<<< HEAD
This is an operation to create a JSON schema on the blockchain. JSON Schema can be used to require that a given JSON document (an instance) satisfies a certain number of criteria. JSON Schema validation asserts constraints on the structure of instance data.
=======
This is an operation to creates a JSON schema on the blockchain. JSON Schema can be used to require that a given JSON document (an instance) satisfies a certain number of criteria. JSON Schema validation asserts constraints on the structure of instance data.
>>>>>>> a53e7729aff2b41dcd7d268f4ca21d56a3cbc65a

> Body parameter

```json
{}
```

<h3 id="create-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|JSON-schema|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="create-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will try to create schema.|[JobId](#schemajobid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid params like size not supported or not JSON.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

<h1 id="dock-api-anchors">Anchors</h1>

An anchor is a digital fingerprint of external data that is included in a Blockchain transaction to verify the authenticity of the external data. 

The Dock Blockchain includes a module explicitly intended for proof of existence. You post the hash of a document on-chain at a specific block. Later you can use that hash to prove the document existed at or before that block. 

These are the operations about anchors:

## Get anchor

> Code samples

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

`GET /anchors/{anchor}`

This is an operation to gets a specific anchor by ID.

<h3 id="get-anchor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|anchor|path|[Hex32](#schemahex32)|true|An anchor|

> Example responses

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and return a Anchor.|[Anchor](#schemaanchor)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Anchor was not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## List anchors

> Code samples

```shell
# You can also use wget
curl -X GET /anchors/ \
  -H 'Accept: application/json' \
  -H 'DOCK-API-TOKEN: API_KEY'

```

```javascript

const headers = {
  'Accept':'application/json',
  'DOCK-API-TOKEN':'API_KEY'
};

fetch('/anchors/',
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

r = requests.get('/anchors/', headers = headers)

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
    $response = $client->request('GET','/anchors/', array(
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
    req, err := http.NewRequest("GET", "/anchors/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /anchors/`

This is an operation to get all anchors created by user.

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="list-anchors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All anchors by user|Inline|

<h3 id="list-anchors-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Create anchor

> Code samples

```shell
# You can also use wget
curl -X POST /anchors/ \
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

r = requests.post('/anchors/', headers = headers)

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
    $response = $client->request('POST','/anchors/', array(
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
    req, err := http.NewRequest("POST", "/anchors/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /anchors/`

This is an operation to create an Anchor for one or more documents. Remember, if more than one docs are given, a merkle tree is created and root is anchored.

> Body parameter

```json
[
  "string"
]
```

<h3 id="create-anchor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|Documents|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="create-anchor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will try to create Anchor. Anchor does not exist on network as of now.|[JobId](#schemajobid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid params|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

<h1 id="dock-api-jobs">Jobs</h1>

This section describes API resources to get job status and data:

## Get job status and data

> Code samples

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

`GET /jobs/{id}`

<<<<<<< HEAD
This is an operation to return information related to the job being processed and its associated blockchain transaction. On completion or failure, the job data will be updated with a response from the blockchain.
=======
This is an operation to returns information related to the job being processed and its associated blockchain transaction. On completion or failure, the job data will be updated with a response from the blockchain.
>>>>>>> a53e7729aff2b41dcd7d268f4ca21d56a3cbc65a

<h3 id="get-job-status-and-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[JobId](#schemajobid)|true|A Job id|

> Example responses

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The request was successful and return a Job desc|[JobDesc](#schemajobdesc)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Job id was not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

<h1 id="dock-api-verify">Verify</h1>

Verifier on receiving the presentation verifies the validity of each credential in the presentation. This includes checking correctness of the data model of the credential, the authenticity by verifying the issuer's signature and revocation status if the credential is revocable. It then checks whether the presentation contains the signature from the holder on the presentation which also includes his given challenge.

These are the operations about verify activities:

## Verify a credential or presentation

> Code samples

```shell
# You can also use wget
curl -X POST /verify/ \
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

r = requests.post('/verify/', headers = headers)

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
    $response = $client->request('POST','/verify/', array(
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
    req, err := http.NewRequest("POST", "/verify/", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /verify/`

The Verifiable Credentials Data Model 1.0 (VCDM) specification provides a standard way to express credentials on the Web in a way that is cryptographically secure, privacy respecting, and machine-verifiable. 

<<<<<<< HEAD
This is an operation to verify a VCDM credential or presentation JSON-LD object.
=======
This is an operation to verifies a VCDM credential or presentation JSON-LD object.
>>>>>>> a53e7729aff2b41dcd7d268f4ca21d56a3cbc65a

> Body parameter

```json
{}
```

<h3 id="verify-a-credential-or-presentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|JSON-schema|

> Example responses

> 200 Response

```json
{
  "verified": true
}
```

<h3 id="verify-a-credential-or-presentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The verification result|[VerificationResponse](#schemaverificationresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid/insufficient credential params.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

# Schemas

Data Schemas are useful when enforcing a specific structure on a collection of data like a Verifiable Credential. Other than that, Data Verification schema and Data Encoding Schemas are used to verify and map the structure and contents of a Verifiable Credential.

These are the schemas used in all API operations mentioned before, such as Error, Credential, Jobs, Anchor, Registry, and so on.

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|Status of the error|
|type|string|false|none|Type of the error|
|message|string|false|none|Message of the error|

<h2 id="tocS_Hex32">Hex32</h2>
<!-- backwards compatibility -->
<a id="schemahex32"></a>
<a id="schema_Hex32"></a>
<a id="tocShex32"></a>
<a id="tocshex32"></a>

```json
"string"

```

32 byte hex string. Ignoring higher base (base64) for similicity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|32 byte hex string. Ignoring higher base (base64) for similicity.|

<h2 id="tocS_JobStartedResult">JobStartedResult</h2>
<!-- backwards compatibility -->
<a id="schemajobstartedresult"></a>
<a id="schema_JobStartedResult"></a>
<a id="tocSjobstartedresult"></a>
<a id="tocsjobstartedresult"></a>

```json
{
  "id": "string",
  "data": {}
}

```

Object containing unique id of the background task and associated data. This id can be used to query the job status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[JobId](#schemajobid)|false|none|Unique id of the background task. This id can be used to query the job status|
|data|object|false|none|Data of the object|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|string|false|none|Unique id of the background task. This id can be used to query the job status|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobStatus|string|false|none|Status of the job.|

#### Enumerated Values

|Property|Value|
|---|---|
|JobStatus|todo|
|JobStatus|finalized|
|JobStatus|in_progress|
|JobStatus|error|

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

This is a schema used in Job operation to get description of the job including result if available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[JobId](#schemajobid)|false|none|Unique id of the background task. This id can be used to query the job status|
|status|[JobStatus](#schemajobstatus)|false|none|Status of the job.|
|result|object|false|none|Result of the Job|

<h2 id="tocS_DIDQualified">DIDQualified</h2>
<!-- backwards compatibility -->
<a id="schemadidqualified"></a>
<a id="schema_DIDQualified"></a>
<a id="tocSdidqualified"></a>
<a id="tocsdidqualified"></a>

```json
"did:dock:xyz"

```

This is a schema used in some operations that used DID as fully qualified, eg. `did:dock:`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DIDQualified|string(uri)|false|none|DID as fully qualified, eg. `did:dock:`.|

<h2 id="tocS_DID">DID</h2>
<!-- backwards compatibility -->
<a id="schemadid"></a>
<a id="schema_DID"></a>
<a id="tocSdid"></a>
<a id="tocsdid"></a>

```json
"did:dock:xyz"

```

DID as fully qualified, eg. `did:dock:` or 32 byte hex string

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DID|string|false|none|DID as fully qualified, eg. `did:dock:` or 32 byte hex string|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyType|string|false|none|Type of public key for DID|

#### Enumerated Values

|Property|Value|
|---|---|
|KeyType|sr25519|
|KeyType|ed25519|
|KeyType|secp256k1|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SigType|string|false|none|Type of signature|

#### Enumerated Values

|Property|Value|
|---|---|
|SigType|Sr25519Signature2020|
|SigType|Ed25519Signature2018|
|SigType|EcdsaSecp256k1Signature2019|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProofPurpose|string|false|none|Purpose of credential|

#### Enumerated Values

|Property|Value|
|---|---|
|ProofPurpose|assertionMethod|
|ProofPurpose|authentication|

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

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|Properties with no identifier|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Properties with no identifier|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[Context](#schemacontext)|false|none|JSON-LD context|
|id|[DIDQualified](#schemadidqualified)|false|none|DID as fully qualified, eg. `did:dock:`.|
|authentication|[oneOf]|false|none|DID authentication|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|Schemas with no identifier|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|Schemas with no identifier|

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

This is a schema that represents a credential format expected by API caller. The current set of is almost complete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uri)|false|none|Credential ID|
|context|[string]|false|none|Credential context|
|type|[string]|false|none|Credential type|
|subject|object|false|none|Credential subject|
|issuer|any|false|none|Credential issuer|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DIDQualified](#schemadidqualified)|false|none|DID as fully qualified, eg. `did:dock:`.|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuanceDate|string(date-time)|false|none|Issuance Date|
|expirationDate|string(date-time)|false|none|Expiration Date|
|status|any|false|none|Revocation registry id or user supplied status object|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|Schemas with no identifier|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|Schemas with no identifier|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[Context](#schemacontext)|false|none|JSON-LD context|
|id|string(uri)|false|none|Verifiable (signed) presentation id|
|type|[string]|false|none|Verifiable (signed) presentation type|
|verifiableCredential|any|false|none|Verifiable credential|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[VerifiableCredential](#schemaverifiablecredential)|false|none|Verifiable (signed) Credential returned by API. The current set of properties is almost complete|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[[VerifiableCredential](#schemaverifiablecredential)]|false|none|[Verifiable (signed) Credential returned by API. The current set of properties is almost complete]|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proof|object|false|none|none|
|» type|[SigType](#schemasigtype)|false|none|Type of signature|
|» proofPurpose|[ProofPurpose](#schemaproofpurpose)|false|none|Purpose of credential|
|» verificationMethod|string|false|none|Verification method|
|» created|string(date-time)|false|none|Created Date|
|» proofValue|string|false|none|Proof of value|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[Context](#schemacontext)|false|none|JSON-LD context|
|id|string(uri)|false|none|Credential id|
|type|[string]|false|none|Credential type|
|credentialSubject|any|false|none|Credential subject|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|Schemas with no identifier|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[object]|false|none|Schemas with no identifier|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuer|any|false|none|Credential issuer|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DIDQualified](#schemadidqualified)|false|none|DID as fully qualified, eg. `did:dock:`.|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuanceDate|string(date-time)|false|none|Issuance Date|
|expirationDate|string(date-time)|false|none|Expiration Date|
|credentialStatus|any|false|none|Revocation registry id or user supplied status object|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proof|object|false|none|none|
|» type|[SigType](#schemasigtype)|false|none|Type of signature|
|» proofPurpose|[ProofPurpose](#schemaproofpurpose)|false|none|Purpose of credential|
|» verificationMethod|string|false|none|Verification method|
|» created|string(date-time)|false|none|Created date|
|» proofValue|string|false|none|Value of credential|

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

An anchor. Either a batched or single. Data includes anchor, type (single, batch), block hash, block number and accompanying data (root, proofs) if any. The data depends if the anchor was created using API or not.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anchor|[Hex32](#schemahex32)|false|none|32 byte hex string. Ignoring higher base (base64) for similicity.|
|blockHash|[Hex32](#schemahex32)|false|none|32 byte hex string. Ignoring higher base (base64) for similicity.|
|root|[Hex32](#schemahex32)|false|none|32 byte hex string. Ignoring higher base (base64) for similicity.|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOnly|boolean|false|none|none|
|policy|[[DID](#schemadid)]|false|none|Only one policy supported as of now called `OneOf`|

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

This is a schema that used to define whether a credential/presentation is verified or not

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verified|boolean|false|none|none|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|

<script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@type": "WebAPI",
  "description": "Dock provides a complete solution for creating and managing verifiable credentials on the blockchain. This includes a free trial and simple, monthly pricing. Get started here: https://console.api.dock.io/
",
  
  
  
  "name": "Dock API"
}
</script>
