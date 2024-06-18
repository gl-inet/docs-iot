# otbr-mgmt

## ubus services

### auto_resume_otbr_agent

Auto resume `otbr-agent ` program when it crash.

- Request parameters:

| Name   | Type    | Description                                                  |
| :----- | ------- | ------------------------------------------------------------ |
| enable | Boolean | Whether to enable auto resume `otbr-agent`. Enable by default. |

- Request sample: `ubus call otbr-mgmt auto_resume_otbr_agent '{"level":7}'`
- Response sample:


```
{
    "err_code": 0
}
```

### commissioner_start

Set Commissioner start.

- Request parameters:

| Name    | Type    | Description                              |
| :------ | ------- | ---------------------------------------- |
| timeout | Integer | Time to stop Commissioner automatically. |

- Request sample: `ubus call otbr-mgmt commissioner_start '{"timeout":120}'`
- Response sample:


```
{
    "err_code": 0
}
```

### commissioner_state

Get Commissioner state.

- Request parameters:

- Request sample: `ubus call otbr-mgmt commissioner_state'`
- Response sample:


```
{
    "State": 0
}
```

### commissioner_stop

Set the log level.

- Request parameters:

- Request sample: `ubus call otbr-mgmt commissioner_stop'`
- Response sample:


```
{
    "err_code": 0
}
```

### force_to_leader

Try to force the device role from router to leader.

- Request parameters:

- Request sample: `ubus call otbr-mgmt force_to_leader'`
- Response sample:


```
{
    "err_code": 0
}
```

### force_to_update_ot_status

Force to update ot status cache.

- Request parameters:

- Request sample: `ubus call otbr-mgmt force_to_update_ot_status'`
- Response sample:


```
{
    "err_code": 0
}
```

### get_calc_pskc

Calculate PSKc.

- Request parameters:

| Name        | Type   | Description   |
| :---------- | ------ | ------------- |
| passphrase  | String | Passphrase.   |
| networkname | String | Network Name. |
| extpanid    | String | Ext PAN ID.   |

- Response parameters:

| Name | Type   | Description |
| :--- | ------ | ----------- |
| pskc | String | PSKc.       |

- Request sample: `ubus call otbr-mgmt get_calc_pskc '{"extpanid":"ba371d3340c41e46","passphrase":"goodlife","networkname":"OpenThread-27c5"}'`
- Response sample:


```
{
    "pskc": "e8121315d06701e4817814469cf7622b"
}
```

### get_child_table

Start a query for child table of a router with a given RLOC16.

- Request parameters:

| Name   | Type           | Description      |
| :----- | -------------- | ---------------- |
| rloc16 | Integer/String | Router's RLOC16. |

- Request sample: `ubus call otbr-mgmt get_child_table '{"rloc16":"0xcc00"}'`
- Response parameters:

- Response sample:


```
{
        "child_table": {
                "0xcc01": {
                        "full-net": "no",
                        "rloc16": "0xcc01",
                        "err-rate-frame": "0.00%",
                        "csl-channel": 0,
                        "rss-ave": -49,
                        "ver": 2,
                        "rss-last": -49,
                        "csl-sync": "no",
                        "supvn": 129,
                        "timeout": 240,
                        "csl-timeout": 0,
                        "csl-period": 0,
                        "rx-on": "yes",
                        "conn-time": "00:00:38",
                        "ip6": [
                                "fde5:9613:59da:da24:8795:7f5a:e051:5387",
                                "fd70:562d:7b34:1:e2ea:27:685e:2c84"
                        ],
                        "margin": 51,
                        "age": 38,
                        "ext-addr": "122bc09d8fd78e8e",
                        "q-msg": 0,
                        "err-rate-msg": "0.00%",
                        "type": "mtd"
                }
        }
}
```

### get_childip6

Send a query to a parent to retrieve the IPv6 addresses of all its MTD children.

- Request parameters:

| Name   | Type           | Description      |
| :----- | -------------- | ---------------- |
| rloc16 | Integer/String | Router's RLOC16. |

- Request sample: `ubus call otbr-mgmt get_childip6 '{"rloc16":"0xcc00"}'`
- Response sample:


```
{
        "childip6_list": {
                "0xcc01": {
                        "ip6": [
                                "fde5:9613:59da:da24:8795:7f5a:e051:5387",
                                "fd70:562d:7b34:1:e2ea:27:685e:2c84"
                        ],
                        "rloc16": "0xcc01"
                }
        }
}
```

### get_ip6_by_extaddr

Get IPv6 Address by Extended MAC.

- Request parameters:

| Name    | Type   | Description                         |
| :------ | ------ | ----------------------------------- |
| extaddr | String | The IEEE 802.15.4 Extended Address. |

- Request sample: `ubus call otbr-mgmt get_ip6_by_extaddr '{"extaddr":"5276797bfabece97"}'`
- Response sample:


```
{
        "ipaddr": "fde5:9613:59da:da24:d690:75eb:47f8:dce5"
}
```

### get_joiner_list

Get joiner list. It must work with the HTTP API.

- Request parameters:

- Request sample: `ubus call otbr-mgmt get_joiner_list`
- Response sample:


```
{
        "joinerNum": 1,
        "joinerList": [
                {
                        "JoinEvent": [
                                "0",
                                "1",
                                "2"
                        ],
                        "expirationTime": 18615,
                        "eui64": "F4CE36DCAF080D85",
                        "timeout": 120,
                        "joinStatus": "Joining",
                        "pskd": "AAAAAA",
                        "addTime": 1718684822
                }
        ],
        "joinerMax": 256
}
```

### get_network_data

Get network data.

- Request parameters:

| Name  | Type    | Description |
| :---- | ------- | ----------- |
| level | Integer | log level.  |

- Request sample: `ubus call otbr-mgmt get_network_data'`
- Response sample:


```
{
        "NetworkDataList": [
                {
                        "IsLeader": true,
                        "IsThisDevice": true,
                        "IP6AddressList": [
                                "fde5:9613:59da:da24:0:ff:fe00:fc11",
                                "fde5:9613:59da:da24:0:ff:fe00:fc10",
                                "fde5:9613:59da:da24:0:ff:fe00:fc38",
                                "fd70:562d:7b34:1:2ab9:edd9:725:108c",
                                "fde5:9613:59da:da24:0:ff:fe00:fc00",
                                "fde5:9613:59da:da24:0:ff:fe00:cc00",
                                "fde5:9613:59da:da24:d690:75eb:47f8:dce5",
                                "fe80:0:0:0:5076:797b:fabe:ce97"
                        ],
                        "NeighborRouterTable": [

                        ],
                        "ExtAddress": "5276797BFABECE97",
                        "Version": "v1.3",
                        "Rloc16": 52224,
                        "IsBorderRouter": true,
                        "Rloc16s": "0xcc00",
                        "ChildTable": [
                                {
                                        "MessageErrorRate": "0.00%",
                                        "ConnectionTime": "01:32:20",
                                        "CslChannel": 0,
                                        "ExtAddress": "E28A983C2168E6BF",
                                        "Rloc16": 52226,
                                        "FrameErrorRate": "0.00%",
                                        "Mode": {
                                                "RxOnWhenIdle": 1,
                                                "NetworkData": 0,
                                                "DeviceType": 0
                                        },
                                        "LinkMargin": 54,
                                        "LastRssi": -47,
                                        "CslSync": "no",
                                        "IP6AddressList": [
                                                "fde5:9613:59da:da24:9dad:7fc2:739c:a1f8",
                                                "fd70:562d:7b34:1:7263:4fc1:bd9b:c9c"
                                        ],
                                        "IsThisDevice": false,
                                        "AvgRssi": -46,
                                        "Age": 111,
                                        "CslTimeout": 0,
                                        "Version": "v1.1",
                                        "CslPeriod": 0,
                                        "DeviceType": "mtd",
                                        "Rloc16s": "0xcc02",
                                        "IsBorderRouter": false
                                }
                        ]
                }
        ]
}
```

### get_ot_status

Get OT status.

- Request sample: `ubus call otbr-mgmt get_ot_status`
- Response sample:


```
{
        "Commissioner": {
                "State": 2
        },
        "OTBRVersion": "ot-br-posix/2023-11-1-r4.4.3; POSIX; Feb 16 2022 20:29:10",
        "RCP": {
                "Rloc16": 52224,
                "ExtAddress": "5276797bfabece97",
                "State": 4
        },
        "Network": {
                "PSKc": "293a4459786172f411c7b39c78406bec",
                "IPv6": [
                        "fde5:9613:59da:da24:0:ff:fe00:fc37",
                        "fde5:9613:59da:da24:0:ff:fe00:fc11",
                        "fde5:9613:59da:da24:0:ff:fe00:fc10",
                        "fde5:9613:59da:da24:0:ff:fe00:fc38",
                        "fd70:562d:7b34:1:2ab9:edd9:725:108c",
                        "fde5:9613:59da:da24:0:ff:fe00:fc00",
                        "fde5:9613:59da:da24:0:ff:fe00:cc00",
                        "fde5:9613:59da:da24:d690:75eb:47f8:dce5",
                        "fe80:0:0:0:5076:797b:fabe:ce97"
                ],
                "PanId": 50772,
                "OnMeshPrefix": [
                        "fd70:562d:7b34:1::/64"
                ],
                "ActiveTimestamp": 1,
                "Channel": 26,
                "LeaderData": {
                        "DataVersion": 245,
                        "StableDataVersion": 130,
                        "LeaderRouterId": 51,
                        "PartitionId": 1573146047,
                        "Weighting": 64
                },
                "BorderAgentID": "856801577801e3167ac9cca74e4d94e0",
                "ActiveDataset": "0e08000000000001000035060004001fffe002089f4f5846aec77dc70708fde5961359dada240510c9ef1b68eb2bd12170876f2afb6ea2bb0102c6540410293a4459786172f411c7b39c78406bec0c0402a0f7f8030b474c2d533230302d363364000300001a",
                "MeshLocalPrefix": "fde5:9613:59da:da24:",
                "ExtPanId": "9f4f5846aec77dc7",
                "NetworkName": "GL-S200-63d",
                "NetworkKey": "c9ef1b68eb2bd12170876f2afb6ea2bb"
        },
        "OpenThreadVersionAPI": 370,
        "ThreadVersion": "v1.3",
        "SRP": {
                "ServerState": 1,
                "ServerDomain": "default.service.arpa."
        }
}
```

### get_router_neighbor_table

Start a query for router neighbor table of a router with a given RLOC16.

- Request parameters:

| Name   | Type           | Description          |
| :----- | -------------- | -------------------- |
| rloc16 | Integer/String | The Router's RLOC16. |

- Request sample: `ubus call otbr-mgmt get_router_neighbor_table '{"rloc16":"0xcc00"}'`
- Response sample:


```
{
        "neighbor_table": [
                {
                        "ver": 2,
                        "err-rate-msg": "0.00%",
                        "err-rate-frame": "0.00%",
                        "rss-ave": -45,
                        "conn-time": "00:00:49",
                        "rss-last": -45,
                        "ext-addr": "e28a983c2168e6bf",
                        "margin": 55,
                        "rloc16": "0x7000"
                }
        ]
}
```

### get_scan_list

Perform an IEEE 802.15.4 Active Scan.

- Request sample: `ubus call otbr-mgmt get_scan_list`
- Response sample:


```
{
        "ScanList": [
                {
                        "ExtendedPanId": "c98837a337a504c2",
                        "Extaddr": "b2abeff4fcb6297b",
                        "PanId": "0xd964",
                        "Lqi": 255,
                        "Channel": 11,
                        "Rssi": -58,
                        "NetworkName": "AMZN-Thread-d964"
                },
                {
                        "ExtendedPanId": "dead00beef00cafe",
                        "Extaddr": "6aeeba4c5c1996dd",
                        "PanId": "0xabcd",
                        "Lqi": 255,
                        "Channel": 11,
                        "Rssi": -58,
                        "NetworkName": "KNX"
                },
                {
                        "ExtendedPanId": "dead00beef00cafe",
                        "Extaddr": "923000eedece6273",
                        "PanId": "0xabcd",
                        "Lqi": 255,
                        "Channel": 11,
                        "Rssi": -66,
                        "NetworkName": "KNX"
                },
                {
                        "ExtendedPanId": "e731e704e3e9d043",
                        "Extaddr": "5e4fa1c6a46c0e61",
                        "PanId": "0x586c",
                        "Lqi": 255,
                        "Channel": 18,
                        "Rssi": -47,
                        "NetworkName": "OpenThread-586c"
                },
                {
                        "ExtendedPanId": "78c70ebcbac64bb3",
                        "Extaddr": "0e7f7c8786e52688",
                        "PanId": "0xdc02",
                        "Lqi": 255,
                        "Channel": 25,
                        "Rssi": -81,
                        "NetworkName": "MyHome1938550755"
                },
                {
                        "ExtendedPanId": "9f4f5846aec77dc7",
                        "Extaddr": "e28a983c2168e6bf",
                        "PanId": "0xc654",
                        "Lqi": 255,
                        "Channel": 26,
                        "Rssi": -46,
                        "NetworkName": "GL-S200-63d"
                },
                {
                        "ExtendedPanId": "c19a49f075f7544d",
                        "Extaddr": "46708965614ccfb5",
                        "PanId": "0x51b9",
                        "Lqi": 255,
                        "Channel": 26,
                        "Rssi": -78,
                        "NetworkName": "GL-S20-60a"
                },
                {
                        "ExtendedPanId": "b8a4e11ddf352247",
                        "Extaddr": "425c94898b659217",
                        "PanId": "0x2577",
                        "Lqi": 255,
                        "Channel": 26,
                        "Rssi": -58,
                        "NetworkName": "GL-S20-65f"
                },
                {
                        "ExtendedPanId": "1bf0e288e0e60fa8",
                        "Extaddr": "7e7673f668353501",
                        "PanId": "0x410c",
                        "Lqi": 250,
                        "Channel": 26,
                        "Rssi": -73,
                        "NetworkName": "GL-S200-5ea"
                },
                {
                        "ExtendedPanId": "1cb6d607010d456b",
                        "Extaddr": "e2c0cfd3c4deb0ef",
                        "PanId": "0xacc2",
                        "Lqi": 114,
                        "Channel": 26,
                        "Rssi": -74,
                        "NetworkName": "GL-S20-da2"
                },
                {
                        "ExtendedPanId": "66ff68c9487ec03d",
                        "Extaddr": "7eab96852b4dd64a",
                        "PanId": "0xa63c",
                        "Lqi": 255,
                        "Channel": 26,
                        "Rssi": -73,
                        "NetworkName": "GL-S200-61c"
                }
        ]
}
```

### get_srp_service

Get srp service list.

- Request sample: `ubus call otbr-mgmt get_srp_service`
- Response sample:


```
{
        "Services": {
                "E6B872BFD7E74D72": {
                        "KeyLease": 1209600,
                        "Lease": 7200,
                        "TXT": [
                                "SII=1000",
                                "SAI=1000",
                                "T=0"
                        ],
                        "Weight": 0,
                        "Address": [
                                "fd70:562d:7b34:1:6204:6aae:29f8:a521"
                        ],
                        "Ttl": 7200,
                        "ExtAddress": "E6B872BFD7E74D72",
                        "Host": "E6B872BFD7E74D72.default.service.arpa.",
                        "Port": 5540,
                        "Deleted": false,
                        "Subtypes": "_ID58D4DFDB2832EBD",
                        "InstanceName": "D58D4DFDB2832EBD-A4338F2D951B9090._matter._tcp.default.service.arpa.",
                        "Priority": 0
                }
        }
}
```

### set_log_level

Set the log level.

- Request parameters:

| Name  | Type    | Description |
| :---- | ------- | ----------- |
| level | Integer | log level.  |

- Request sample: `ubus call otbr-mgmt set_log_level '{"level":7}'`
- Response sample:


```
{
    "err_code": 0
}
```

### set_ot_config

Set OT config.

- Request parameters:

| Name        | Type    | Description                                                  |
| :---------- | ------- | ------------------------------------------------------------ |
| channel     | Integer | The IEEE 802.15.4 Channel value.                             |
| panid       | Integer | The IEEE 802.15.4 PAN ID value.                              |
| networkname | String  | The Thread Network Name.                                     |
| networkkey  | String  | The Thread Network Key.                                      |
| passphrase  | String  | Thread network Passphrase, a user-defined character string that serves as Commissioner Credential and is used to generate PSKc. Its length is limited to 6 to 255 bytes of UTF-8 encoded character. |
| extpanid    | String  | The Thread Extended PAN ID value.                            |

- Request sample: `ubus call otbr-mgmt set_ot_config '{"channel":25,"panid":"0x9710","networkname":"MyHome857640893","networkkey":"d9cca4111149b4a9aa5ed1af4d4df253","passphrase":"OTtest","extpanid":"e589c2d5e1594e59"}'`
- Response sample:


```
{
    "err_code": 0
}
```

### set_ot_enable

Set OT enable.

- Request parameters:

| Name   | Type    | Description               |
| :----- | ------- | ------------------------- |
| enable | Boolean | Whether to enable Thread. |

- Request sample: `ubus call otbr-mgmt set_ot_enable '{"enable":true}'`
- Response sample:


```
{
    "err_code": 0
}
```
