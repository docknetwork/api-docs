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

Dock is a network that offers a complete solution for creating and managing blockchain-verifiable credentials tooling to build applications that are standards compliant, scalable, and affordable. 

Please read  [Terms of Service](https://www.dock.io/terms-of-service) prior to using the Dock API.

We also offers a free trial and fair monthly pricing, begin by going to: https://console.api.dock.io/.

## Primary Features
-	Create a DID
- Issue a Credential or Presentation
- Verify a Credential or Presentation
- Revoke a Credential or Presentation

## Other Features
-	Easily issue, verify, manage, and revoke verifiable credentials and decentralized identities
- Harness the security of the Dock blockchain, a network run by 50 independent validators
- Work seamlessly across platforms with Dock’s standards-compliant, interoperable solutions

# Getting Started

## Prerequisites
The Dock API uses API keys to authenticate requests. 

 You must first have an account and acquire your credentials before accessing the Dock API. To register your account, you only need to provide some basic information about your application and how it will be used.

 You can register account and view your API keys in our [console](https://console.api.dock.io/).

## Authentication
To use the Dock API, you must first obtain API Key by signing into https://console.api.dock.io. For requests, the API Key has to be included in the header, and the website will uses a password-free way through email links.

* API Key (accessToken)
    - Parameter Name: **DOCK-API-TOKEN**, in: header. 

<aside class="notice">
API key may also be IP restricted - when you generate the API key, you can include a list of IP's that are linked with that key.
</aside>

## Architecture Style
Dock works with REST architecture. As a result, our API resources are accessible openly using HTTP methods (`GET`, `POST`, `PUT` and `DELETE`). 

Our API methods have couple important constraints:
- Subscription limits
- HTTPS for all requests

## Rate Limits
We don't have rate limitations right now. However, our paid plans limit the number of calls you may make each month.

## Encoding
The encoding we use is UTF-8. Each Unicode character is encoded as a variable number of 1 to 4 octets, with the number of octets determined by the Unicode character's integer value. Because it encodes each character in the range U+0000 through U+007F as a single octet, it is an efficient encoding of Unicode texts that primarily utilize US-ASCII characters.

UTF-8 is the standard encoding for XML, and it has overtaken ASCII as the most used character set on the Internet since 2010.

## Error Handling
The Dock API delivers standard HTTP error codes and includes further error information in the response body (when allowed by HTTP specification).

The table below shows the most frequent HTTP error messages:
Code | Meaning
--------- | -----------
400 | Bad Request -- Your request was rejected (e.g. missing mandatory field).
401 | Unathorized -- You missing or have invalid API key in the header. 
429 | Your subscription is exceeded.

# Stakeholders
It is essential to have a thorough grasp of Dock ecosystem's underlying concepts to use Dock API. The following are Dock ecosystem stakeholders:
Stakeholder | Role
--------- | -----------
Identity Owners | Entities with a DID on the chain. 
Issuers | Entities who issue credentials using the Dock SDK. 
Revocation authorities | Entities who are allowed to revoke (or undo the revocation in some cases) issued credentials.
Holders | Entities who receive credentials from issuers.
Verifiers | Entities who verify the received presentations from the holder.
Validators | Entities who run a full node and are in charge of producing blocks and finalizing them.
Governing Council | A group of individuals who are part of the Dock Association, whose remit is to govern the network and manage its ongoing development while driving adoption.

# Terminology
It is important to fully understand all the terminologies within Dock ecosystem. The following are common terminologies within our ecosystem:
Terminology | Description
--------- | -----------
DID | DID stands for Decentralized Identifiers. It is a new type of identifier that enables verifiable, decentralized digital identity. A DID refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the DID. For more information, please refer [here](https://docknetwork.github.io/sdk/tutorials/concepts_did.html).
Anchoring | A feature that allows users to store a digest of one or more credentials (or any files) on our blockchain, so that they are associated with immutable timestamps and hence can be proven to have been created at a certain point of time. 
Data Schema | The structure that describes the logical view of the data. It is useful to enforce a specific structure on a collection of data like a Verifiable Credential. 
Blob | Blob stands for Binary Large OBject. It is a collection of binary data stored as a single entity. The schemas are identified and retrieved by their unique blob id which is a 32 byte long hex string. 
DID Resolver | The tool that initiates the process of learning the DID document. 

<h1 id="dock-api-dids">DIDs</h1>

Operations about DIDs

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

Resolves a specific DID into a DID document.

<h3 id="get-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DID|path|[DID](#schemadid)|true|A DID|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The DIDDoc|[DIDDoc](#schemadiddoc)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|DID was not found.|[Error](#schemaerror)|

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

Updates the DID's key or controller on the blockchain.

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
|body|body|object|false|Properties of DID|
|» controller|body|[DID](#schemadid)|false|DID as fully qualified, eg. `did:dock:` or 32 byte hex string|
|» keyType|body|[KeyType](#schemakeytype)|false|Type of public key for DID|
|DID|path|[DID](#schemadid)|true|A DID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» keyType|sr25519|
|» keyType|ed25519|
|» keyType|secp256k1|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="update-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will update DID.|[JobId](#schemajobid)|
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

Deletes a DID from the blockchain, further attempts to resolve this DID will fail.

<h3 id="delete-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DID|path|[DID](#schemadid)|true|A DID|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="delete-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will remove DID.|[JobId](#schemajobid)|
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
|»» *anonymous*|[string]|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|string|false|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|[DIDQualified](#schemadidqualified)(uri)|false|none|DID as fully qualified, eg. `did:dock:`.|
|» authentication|[oneOf]|false|none|none|

*oneOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|object|false|none|none|

*xor*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|string|false|none|none|

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

Creates a new DID on chain with an auto generated keypair, the controller will be the same as the DID unless otherwise specified.

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
|body|body|object|false|Properties of DID|
|» did|body|[DID](#schemadid)|false|DID as fully qualified, eg. `did:dock:` or 32 byte hex string|
|» controller|body|[DID](#schemadid)|false|DID as fully qualified, eg. `did:dock:` or 32 byte hex string|
|» keyType|body|[KeyType](#schemakeytype)|false|Type of public key for DID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» keyType|sr25519|
|» keyType|ed25519|
|» keyType|secp256k1|

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

<h1 id="dock-api-credentials">credentials</h1>

Operations about credentials

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

Creates and issues a verifiable credential with supplied data. Issuing counts as a paid transaction.

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

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|JSON-schema|
|» credential|body|[Credential](#schemacredential)|false|Credential format expected by API caller. The current set of is almost complete|
|»» id|body|string(uri)|false|none|
|»» context|body|[string]|false|none|
|»» type|body|[string]|false|none|
|»» subject|body|object|false|none|
|»» issuer|body|any|false|none|
|»»» *anonymous*|body|[DIDQualified](#schemadidqualified)(uri)|false|DID as fully qualified, eg. `did:dock:`.|
|»»» *anonymous*|body|object|false|none|
|»» issuanceDate|body|string(date-time)|false|none|
|»» expirationDate|body|string(date-time)|false|none|
|»» status|body|any|false|Revocation registry id or user supplied status object|
|»»» *anonymous*|body|object|false|none|
|»»» *anonymous*|body|string|false|none|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A VC.|[VerifiableCredential](#schemaverifiablecredential)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid/insufficient credential params.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|User does not own DID.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

<h1 id="dock-api-presentations">Presentations</h1>

Operations about presentations

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

Creates and signs a verifiable presentation out of one or more Verifiable Credentials. Signing counts as a paid transaction.

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
|body|body|object|true|JSON-schema|
|» holder|body|[DIDQualified](#schemadidqualified)(uri)|false|DID as fully qualified, eg. `did:dock:`.|
|» challenge|body|string|false|none|
|» domain|body|string|false|none|
|» credentials|body|[[VerifiableCredential](#schemaverifiablecredential)]|false|[Verifiable (signed) Credential returned by API. The current set of properties is almost complete]|
|»» @context|body|any|false|JSON-LD context|
|»»» *anonymous*|body|[string]|false|none|
|»»» *anonymous*|body|string|false|none|
|»» id|body|string(uri)|false|none|
|»» type|body|[string]|false|none|
|»» credentialSubject|body|any|false|none|
|»»» *anonymous*|body|object|false|none|
|»»» *anonymous*|body|[object]|false|none|
|»» issuer|body|any|false|none|
|»»» *anonymous*|body|[DIDQualified](#schemadidqualified)(uri)|false|DID as fully qualified, eg. `did:dock:`.|
|»»» *anonymous*|body|object|false|none|
|»» issuanceDate|body|string(date-time)|false|none|
|»» expirationDate|body|string(date-time)|false|none|
|»» credentialStatus|body|any|false|Revocation registry id or user supplied status object|
|»»» *anonymous*|body|object|false|none|
|»»» *anonymous*|body|string|false|none|
|»» proof|body|object|false|none|
|»»» type|body|[SigType](#schemasigtype)|false|Type of signature|
|»»» proofPurpose|body|[ProofPurpose](#schemaproofpurpose)|false|Purpose of credential|
|»»» verificationMethod|body|string|false|none|
|»»» created|body|string(date-time)|false|none|
|»»» proofValue|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|»»» type|Sr25519Signature2020|
|»»» type|Ed25519Signature2018|
|»»» type|EcdsaSecp256k1Signature2019|
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A VC.|[VerifiableCredential](#schemaverifiablecredential)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid/insufficient credential params.|[Error](#schemaerror)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|User does not own DID.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

<h1 id="dock-api-registries">Registries</h1>

Operations about registries

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

Deletes a specific registry

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

Get the registry details like policy, controller(s)

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

Revoke or unrevoke one or more credential ids

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
|body|body|object|true|Specify action and credential ids|
|» action|body|string|false|none|
|» credentialIds|body|[string]|false|none|
|id|path|[Hex32](#schemahex32)|true|Revocation registry id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|revoke|
|» action|unrevoke|

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will try to revoke/unrevoke the credential.|[JobStartedResult](#schemajobstartedresult)|
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

Get all registries created by user

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

Create a Revocation registry on the blockchain

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
|body|body|[Registry](#schemaregistry)|true|Revocation registry|
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

<h1 id="dock-api-revocationstatus">revocationStatus</h1>

Operations about revocation_status

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

Get the revocation status of a credential

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

Operations about schemas

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

Returns the JSON schema for a specific ID

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Schema|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Schema was not found.|[Error](#schemaerror)|

<h3 id="get-schema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|[Hex32](#schemahex32)|false|none|32 byte hex string. Ignoring higher base (base64) for similicity.|
|» schema|object|false|none|none|

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

Get all schemas created by user

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

Creates a JSON schema on the blockchain

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

Operations about anchors

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

Gets a specific anchor by ID

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Anchor|[Anchor](#schemaanchor)|
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

Get all anchors created by user

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

Anchor one or more documents. If more than one docs are given, a merkle tree is created and root is anchored

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

Operations about jobs

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

Returns information related to the job being processed and its associated blockchain transaction. On completion or failure, the job data will be updated with a response from the blockchain.

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Job desc|[JobDesc](#schemajobdesc)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Job id was not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

<h1 id="dock-api-verify">Verification</h1>

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

Verifies a VCDM credential or presentation JSON-LD object.

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

An API Error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|none|
|type|string|false|none|none|
|message|string|false|none|none|

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
|data|object|false|none|none|

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
|*anonymous*|string|false|none|Unique id of the background task. This id can be used to query the job status|

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"todo"

```

Status of the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Status of the job.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|todo|
|*anonymous*|finalized|
|*anonymous*|in_progress|
|*anonymous*|error|

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

Description of the job including result if available

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[JobId](#schemajobid)|false|none|Unique id of the background task. This id can be used to query the job status|
|status|[JobStatus](#schemajobstatus)|false|none|Status of the job.|
|result|object|false|none|none|

<h2 id="tocS_DIDQualified">DIDQualified</h2>
<!-- backwards compatibility -->
<a id="schemadidqualified"></a>
<a id="schema_DIDQualified"></a>
<a id="tocSdidqualified"></a>
<a id="tocsdidqualified"></a>

```json
"did:dock:xyz"

```

DID as fully qualified, eg. `did:dock:`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string(uri)|false|none|DID as fully qualified, eg. `did:dock:`.|

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
|*anonymous*|string|false|none|DID as fully qualified, eg. `did:dock:` or 32 byte hex string|

<h2 id="tocS_KeyType">KeyType</h2>
<!-- backwards compatibility -->
<a id="schemakeytype"></a>
<a id="schema_KeyType"></a>
<a id="tocSkeytype"></a>
<a id="tocskeytype"></a>

```json
"sr25519"

```

Type of public key for DID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Type of public key for DID|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|sr25519|
|*anonymous*|ed25519|
|*anonymous*|secp256k1|

<h2 id="tocS_SigType">SigType</h2>
<!-- backwards compatibility -->
<a id="schemasigtype"></a>
<a id="schema_SigType"></a>
<a id="tocSsigtype"></a>
<a id="tocssigtype"></a>

```json
"Sr25519Signature2020"

```

Type of signature

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Type of signature|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Sr25519Signature2020|
|*anonymous*|Ed25519Signature2018|
|*anonymous*|EcdsaSecp256k1Signature2019|

<h2 id="tocS_ProofPurpose">ProofPurpose</h2>
<!-- backwards compatibility -->
<a id="schemaproofpurpose"></a>
<a id="schema_ProofPurpose"></a>
<a id="tocSproofpurpose"></a>
<a id="tocsproofpurpose"></a>

```json
"assertionMethod"

```

Purpose of credential

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Purpose of credential|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|assertionMethod|
|*anonymous*|authentication|

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

JSON-LD context

### Properties

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

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

DID document. The current set of properties is incomplete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[Context](#schemacontext)|false|none|JSON-LD context|
|id|[DIDQualified](#schemadidqualified)|false|none|DID as fully qualified, eg. `did:dock:`.|
|authentication|[oneOf]|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

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

Credential format expected by API caller. The current set of is almost complete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uri)|false|none|none|
|context|[string]|false|none|none|
|type|[string]|false|none|none|
|subject|object|false|none|none|
|issuer|any|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DIDQualified](#schemadidqualified)|false|none|DID as fully qualified, eg. `did:dock:`.|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuanceDate|string(date-time)|false|none|none|
|expirationDate|string(date-time)|false|none|none|
|status|any|false|none|Revocation registry id or user supplied status object|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

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

Verifiable (signed) Presentation returned by API. The current set of properties is almost complete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[Context](#schemacontext)|false|none|JSON-LD context|
|id|string(uri)|false|none|none|
|type|[string]|false|none|none|
|verifiableCredential|any|false|none|none|

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
|» verificationMethod|string|false|none|none|
|» created|string(date-time)|false|none|none|
|» proofValue|string|false|none|none|

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

Verifiable (signed) Credential returned by API. The current set of properties is almost complete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[Context](#schemacontext)|false|none|JSON-LD context|
|id|string(uri)|false|none|none|
|type|[string]|false|none|none|
|credentialSubject|any|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[object]|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuer|any|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[DIDQualified](#schemadidqualified)|false|none|DID as fully qualified, eg. `did:dock:`.|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuanceDate|string(date-time)|false|none|none|
|expirationDate|string(date-time)|false|none|none|
|credentialStatus|any|false|none|Revocation registry id or user supplied status object|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proof|object|false|none|none|
|» type|[SigType](#schemasigtype)|false|none|Type of signature|
|» proofPurpose|[ProofPurpose](#schemaproofpurpose)|false|none|Purpose of credential|
|» verificationMethod|string|false|none|none|
|» created|string(date-time)|false|none|none|
|» proofValue|string|false|none|none|

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

An anchor. Either a batched or single. Data includes anchor, type (single, batch), block hash, block no and accompanying data (root, proofs) if any. The data depends if the anchor was created using API or not.

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

Revocation registry

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

Whether a credential/presentation is verified or not

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

Default response

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

