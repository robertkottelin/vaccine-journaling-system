export type Myepicproject = {
  "version": "0.1.0",
  "name": "myepicproject",
  "instructions": [
    {
      "name": "startStuffOff",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addGif",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "gifLink",
          "type": "string"
        }
      ]
    },
    {
      "name": "setData",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "dataLink",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "baseAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalGifs",
            "type": "u64"
          },
          {
            "name": "totalData",
            "type": "u64"
          },
          {
            "name": "gifList",
            "type": {
              "vec": {
                "defined": "ItemStruct"
              }
            }
          },
          {
            "name": "dataList",
            "type": {
              "vec": {
                "defined": "Data"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ItemStruct",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gifLink",
            "type": "string"
          },
          {
            "name": "userAddress",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "Data",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dataLink",
            "type": "string"
          },
          {
            "name": "userAddress",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};

export const IDL: Myepicproject = {
  "version": "0.1.0",
  "name": "myepicproject",
  "instructions": [
    {
      "name": "startStuffOff",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addGif",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "gifLink",
          "type": "string"
        }
      ]
    },
    {
      "name": "setData",
      "accounts": [
        {
          "name": "baseAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "dataLink",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "baseAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalGifs",
            "type": "u64"
          },
          {
            "name": "totalData",
            "type": "u64"
          },
          {
            "name": "gifList",
            "type": {
              "vec": {
                "defined": "ItemStruct"
              }
            }
          },
          {
            "name": "dataList",
            "type": {
              "vec": {
                "defined": "Data"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ItemStruct",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gifLink",
            "type": "string"
          },
          {
            "name": "userAddress",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "Data",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "dataLink",
            "type": "string"
          },
          {
            "name": "userAddress",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};
