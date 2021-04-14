---
title: Dock API mode 3 v1
language_tabs:
  - shell: shell
  - javascript: JavaScript
language_clients:
  - shell: ""
  - javascript: request
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="dock-api-mode-3">Dock API mode 3 v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

* API Key (accessToken)
    - Parameter Name: **DOCK-API-TOKEN**, in: header. 

<h1 id="dock-api-mode-3-default">Default</h1>

## Get job description for the given id

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

`GET /jobs/{id}`

<h3 id="get-job-description-for-the-given-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[JobId](#schemajobid)|true|A Job id|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "status": "Unstarted",
  "result": {}
}
```

<h3 id="get-job-description-for-the-given-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Job desc|[JobDesc](#schemajobdesc)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Job id was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Get DIDDoc for the given DID

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

`GET /dids/{did}`

<h3 id="get-diddoc-for-the-given-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DID](#schemadid)|true|A DID|

> Example responses

> 200 Response

```json
{
  "@context": [
    "string"
  ],
  "id": "http://example.com",
  "authentication": [
    {}
  ]
}
```

<h3 id="get-diddoc-for-the-given-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The DIDDoc|[DIDDoc](#schemadiddoc)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|DID was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Update the DID's key or controller

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
  "controller": "string",
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

`PATCH /dids/{did}`

> Body parameter

```json
{
  "controller": "string",
  "keyType": "sr25519"
}
```

<h3 id="update-the-did's-key-or-controller-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Properties of DID|
|» controller|body|[DID](#schemadid)|false|DID as 32 byte hex of fully quanlified|
|» keyType|body|[KeyType](#schemakeytype)|false|Type of public key for DID|
|did|path|[DID](#schemadid)|true|A DID|

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

<h3 id="update-the-did's-key-or-controller-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will update DID.|[JobId](#schemajobid)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Does not own the DID|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|DID does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Remove DID

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

`DELETE /dids/{did}`

<h3 id="remove-did-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|did|path|[DID](#schemadid)|true|A DID|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="remove-did-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will remove DID.|[JobId](#schemajobid)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Does not own the DID|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|DID does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Get DIDDoc for DIDs created by user. No pagination as issuer will not have a lot of DIDs anyway.

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

`GET /dids/`

> Example responses

> 200 Response

```json
[
  {
    "@context": [
      "string"
    ],
    "id": "http://example.com",
    "authentication": [
      {}
    ]
  }
]
```

<h3 id="get-diddoc-for-dids-created-by-user.-no-pagination-as-issuer-will-not-have-a-lot-of-dids-anyway.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All DIDDocs|Inline|

<h3 id="get-diddoc-for-dids-created-by-user.-no-pagination-as-issuer-will-not-have-a-lot-of-dids-anyway.-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DIDDoc](#schemadiddoc)]|false|none|[DID document. The current set of propoerties is incomplete]|
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
|» authentication|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Create a new DID. Auto generates the key

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
  "did": "string",
  "controller": "string",
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

`POST /dids/`

> Body parameter

```json
{
  "did": "string",
  "controller": "string",
  "keyType": "sr25519"
}
```

<h3 id="create-a-new-did.-auto-generates-the-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Properties of DID|
|» did|body|[DID](#schemadid)|false|DID as 32 byte hex of fully quanlified|
|» controller|body|[DID](#schemadid)|false|DID as 32 byte hex of fully quanlified|
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
"string"
```

<h3 id="create-a-new-did.-auto-generates-the-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will try to create DID. DID does not exist on network as of now.|[JobId](#schemajobid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid params|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Create a verifiable credential

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
    "type": [
      "string"
    ],
    "subject": {},
    "issuer": "string",
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

`POST /credentials/`

> Body parameter

```json
{
  "credential": {
    "id": "http://example.com",
    "type": [
      "string"
    ],
    "subject": {},
    "issuer": "string",
    "issuanceDate": "2019-08-24T14:15:22Z",
    "expirationDate": "2019-08-24T14:15:22Z",
    "status": {}
  }
}
```

<h3 id="create-a-verifiable-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|JSON-schema|
|» credential|body|[Credential](#schemacredential)|false|Credential format expected by API caller. The current set of propoerties is almost complete|
|»» id|body|string(uri)|false|none|
|»» type|body|[string]|false|none|
|»» subject|body|object|false|none|
|»» issuer|body|[DID](#schemadid)|false|DID as 32 byte hex of fully quanlified|
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
  "issuer": "string",
  "issuanceDate": "2019-08-24T14:15:22Z",
  "expirationDate": "2019-08-24T14:15:22Z",
  "credentialStatus": {},
  "proof": {
    "type": "Sr25519Signature2020",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "string",
    "created": "2019-08-24T14:15:22Z",
    "jws": "string"
  }
}
```

<h3 id="create-a-verifiable-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A VC.|[VerifiableCredential](#schemaverifiablecredential)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid/insufficient credential params.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|User does not own DID.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Get the registry details like policy, controller(s)

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

`GET /registries/{id}`

<h3 id="get-the-registry-details-like-policy,-controller(s)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[Hex32](#schemahex32)|true|Revocation registry id|

> Example responses

> 200 Response

```json
{
  "addOnly": true,
  "policy": [
    "string"
  ]
}
```

<h3 id="get-the-registry-details-like-policy,-controller(s)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Revocation Registry metadata|[Registry](#schemaregistry)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Registry was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Revoke or unrevoke one or more credential ids

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
  "action": "Revoke",
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

`POST /registries/{id}`

> Body parameter

```json
{
  "action": "Revoke",
  "credentialIds": [
    "http://example.com"
  ]
}
```

<h3 id="revoke-or-unrevoke-one-or-more-credential-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Specify action and credential ids|
|» action|body|string|false|none|
|» credentialIds|body|[string]|false|none|
|id|path|[Hex32](#schemahex32)|true|Revocation registry id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|Revoke|
|» action|Unrevoke|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="revoke-or-unrevoke-one-or-more-credential-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will try to update registry.|[JobId](#schemajobid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid params|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Registry was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Get all registries created by user

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

`GET /registries/`

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "registry": {
      "addOnly": true,
      "policy": [
        "string"
      ]
    }
  }
]
```

<h3 id="get-all-registries-created-by-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All registries by user|Inline|

<h3 id="get-all-registries-created-by-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|[Hex32](#schemahex32)|false|none|32 byte hex string. Ignoring higher base (base64) for similicity. TODO -> Specify hex format in spec|
|» registry|[Registry](#schemaregistry)|false|none|Revocation registry|
|»» addOnly|boolean|false|none|none|
|»» policy|[[DID](#schemadid)]|false|none|Only one policy supported as of now called `OneOf`|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Create a Revocation registry

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
    "string"
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

`POST /registries/`

> Body parameter

```json
{
  "addOnly": true,
  "policy": [
    "string"
  ]
}
```

<h3 id="create-a-revocation-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Registry](#schemaregistry)|true|Revocation registry|
|» addOnly|body|boolean|false|none|
|» policy|body|[[DID](#schemadid)]|false|Only one policy supported as of now called `OneOf`|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="create-a-revocation-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will try to create registry.|[JobId](#schemajobid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid params like policy not supported.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Get the revocation status of a credential

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

`GET /revocationStatus/{regId}/{revId}`

<h3 id="get-the-revocation-status-of-a-credential-parameters">Parameters</h3>

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

<h3 id="get-the-revocation-status-of-a-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns true of credential is revoked, false otherwise|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Registry was not found.|None|

<h3 id="get-the-revocation-status-of-a-credential-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» type|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Get the schema

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

`GET /schemas/{schemaId}`

<h3 id="get-the-schema-parameters">Parameters</h3>

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

<h3 id="get-the-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Schema|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Schema was not found.|None|

<h3 id="get-the-schema-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|[Hex32](#schemahex32)|false|none|32 byte hex string. Ignoring higher base (base64) for similicity. TODO -> Specify hex format in spec|
|» schema|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Get all schemas created by user

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

`GET /schemas/`

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get-all-schemas-created-by-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All schemas by user|Inline|

<h3 id="get-all-schemas-created-by-user-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Create a JSON-Schema. This is not meant to be used to create arbitrary blobs. We can provide separate API.

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

`POST /schemas/`

> Body parameter

```json
{}
```

<h3 id="create-a-json-schema.-this-is-not-meant-to-be-used-to-create-arbitrary-blobs.-we-can-provide-separate-api.-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|JSON-schema|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="create-a-json-schema.-this-is-not-meant-to-be-used-to-create-arbitrary-blobs.-we-can-provide-separate-api.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will try to create schema.|[JobId](#schemajobid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid params like size not supported or not JSON.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Get the anchor

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

`GET /anchors/{anchor}`

<h3 id="get-the-anchor-parameters">Parameters</h3>

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

<h3 id="get-the-anchor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Anchor|[Anchor](#schemaanchor)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Anchor was not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Get all anchors created by user

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

`GET /anchors/`

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get-all-anchors-created-by-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|All anchors by user|Inline|

<h3 id="get-all-anchors-created-by-user-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

## Anchor one or more documents. If more than one docs are given, a merkle tree is created and root is anchored

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

`POST /anchors/`

> Body parameter

```json
[
  "string"
]
```

<h3 id="anchor-one-or-more-documents.-if-more-than-one-docs-are-given,-a-merkle-tree-is-created-and-root-is-anchored-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|Documents|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="anchor-one-or-more-documents.-if-more-than-one-docs-are-given,-a-merkle-tree-is-created-and-root-is-anchored-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Will try to create Anchor. Anchor does not exist on network as of now.|[JobId](#schemajobid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid params|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
accessToken
</aside>

# Schemas

<h2 id="tocS_Hex32">Hex32</h2>
<!-- backwards compatibility -->
<a id="schemahex32"></a>
<a id="schema_Hex32"></a>
<a id="tocShex32"></a>
<a id="tocshex32"></a>

```json
"string"

```

32 byte hex string. Ignoring higher base (base64) for similicity. TODO -> Specify hex format in spec

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|32 byte hex string. Ignoring higher base (base64) for similicity. TODO -> Specify hex format in spec|

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
"Unstarted"

```

Status of the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Status of the job.|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|Unstarted|
|*anonymous*|Started|
|*anonymous*|Finished|

<h2 id="tocS_JobDesc">JobDesc</h2>
<!-- backwards compatibility -->
<a id="schemajobdesc"></a>
<a id="schema_JobDesc"></a>
<a id="tocSjobdesc"></a>
<a id="tocsjobdesc"></a>

```json
{
  "id": "string",
  "status": "Unstarted",
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
"http://example.com"

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
"string"

```

DID as 32 byte hex of fully quanlified

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|DID as 32 byte hex of fully quanlified|

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
  "id": "http://example.com",
  "authentication": [
    {}
  ]
}

```

DID document. The current set of propoerties is incomplete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[Context](#schemacontext)|false|none|JSON-LD context|
|id|[DIDQualified](#schemadidqualified)|false|none|DID as fully qualified, eg. `did:dock:`.|
|authentication|[object]|false|none|none|

<h2 id="tocS_Credential">Credential</h2>
<!-- backwards compatibility -->
<a id="schemacredential"></a>
<a id="schema_Credential"></a>
<a id="tocScredential"></a>
<a id="tocscredential"></a>

```json
{
  "id": "http://example.com",
  "type": [
    "string"
  ],
  "subject": {},
  "issuer": "string",
  "issuanceDate": "2019-08-24T14:15:22Z",
  "expirationDate": "2019-08-24T14:15:22Z",
  "status": {}
}

```

Credential format expected by API caller. The current set of propoerties is almost complete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uri)|false|none|none|
|type|[string]|false|none|none|
|subject|object|false|none|none|
|issuer|[DID](#schemadid)|false|none|DID as 32 byte hex of fully quanlified|
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
  "issuer": "string",
  "issuanceDate": "2019-08-24T14:15:22Z",
  "expirationDate": "2019-08-24T14:15:22Z",
  "credentialStatus": {},
  "proof": {
    "type": "Sr25519Signature2020",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "string",
    "created": "2019-08-24T14:15:22Z",
    "jws": "string"
  }
}

```

Verifiable (signed) Credential returned by API. The current set of propoerties is almost complete

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|[Context](#schemacontext)|false|none|JSON-LD context|
|id|string(uri)|false|none|none|
|type|[string]|false|none|none|
|credentialSubject|object|false|none|none|
|issuer|[DID](#schemadid)|false|none|DID as 32 byte hex of fully quanlified|
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
|» jws|string|false|none|none|

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
|anchor|[Hex32](#schemahex32)|false|none|32 byte hex string. Ignoring higher base (base64) for similicity. TODO -> Specify hex format in spec|
|blockHash|[Hex32](#schemahex32)|false|none|32 byte hex string. Ignoring higher base (base64) for similicity. TODO -> Specify hex format in spec|
|root|[Hex32](#schemahex32)|false|none|32 byte hex string. Ignoring higher base (base64) for similicity. TODO -> Specify hex format in spec|

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
    "string"
  ]
}

```

Revocation registry

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOnly|boolean|false|none|none|
|policy|[[DID](#schemadid)]|false|none|Only one policy supported as of now called `OneOf`|

