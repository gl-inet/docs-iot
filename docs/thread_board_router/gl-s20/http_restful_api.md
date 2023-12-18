# GL-S20 Http Restful API

## Overview

| URI                                                          | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **/ui**                                                      | **APIs for web UI**                                          |
| [/ui/challenge](#/ui/challenge)                              | Get the randrom number of login encryption                   |
| [/ui/login](#/ui/login)                                      | Login and get the token                                      |
| [/ui/logout](#/ui/logout)                                    | Logout                                                       |
| [/ui/check_initialized](#/ui/check_initialized)              | Check if this devive is initialized                          |
| [/ui/set_init](#/ui/set_init)                                | Initialize this device                                       |
| **/otbr**                                                    | **APIs for openthread broder router**                        |
| [ /otbr/get_status](# /otbr/get_status)                      | Get current status                                           |
| [/otbr/scan](#/otbr/scan)                                    | Start thread network scan                                    |
| [/otbr/get_join_status](#/otbr/get_join_status)              | Get the status of joiner, only use for S20 work as joiner    |
| [/otbr/join](#/otbr/join)                                    | Start joinning to the thread network                         |
| [/otbr/set_config](#/otbr/set_config)                        | Set the configurations of current thread network             |
| [/otbr/stop](#/otbr/stop)                                    | Disable the thread                                           |
| [/otbr/start](#/otbr/start)                                  | Enable the thread                                            |
| [/otbr/generate_thread_network](#/otbr/generate_thread_network) | Generate a new configuations of the thread network           |
| [/otbr/set_txpower](#/otbr/set_txpower)                      | Set the TX power                                             |
| [/otbr/set_commissioning](#/otbr/set_commissioning)          | Set the state of commissioner                                |
| [/otbr/add_joiner](#/otbr/add_joiner)                        | Add a new joiner                                             |
| [/otbr/get_commissioning_status](#/otbr/get_commissioning_status) | Get the status of commissioner                               |
| [/otbr/rejoin_all](#/otbr/rejoin_all)                        | Rejoin all the joiners                                       |
| [/otbr/get_joiner_list](#/otbr/get_joiner_list)              | Get the list of joiners                                      |
| [/otbr/remove_joiner_list](#/otbr/remove_joiner_list)        | Remove all the joiners in the list                           |
| [/otbr/export_joiner_list](#/otbr/export_joiner_list)        | Export the list of joiners                                   |
| [/otbr/import_joiner_list](#/otbr/import_joiner_list)        | Import the list of joiners                                   |
| [/otbr/commit_joiner_list](#/otbr/commit_joiner_list)        | Commit the list of joiners                                   |
| [/otbr/get_bbr_status](#/otbr/get_bbr_status)                | Get the status the backbone router                           |
| [/otbr/disable_bbr](#/otbr/disable_bbr)                      | Disable the backbone router                                  |
| [/otbr/enable_bbr](#/otbr/enable_bbr)                        | Enable the backbone router                                   |
| **/eth**                                                     | **APIs for Ethernet**                                        |
| [/eth/get_status](#/eth/get_status)                          | Get the current status of Ethernet                           |
| [/eth/get_config](#/eth/get_config)                          | Get Ethernet configuration                                   |
| [/eth/set_config](#/eth/set_config)                          | Set Ethernet configuration                                   |
| **/wifi**                                                    | **APIs for Wifi**                                            |
| [/wifi/get_status](#/wifi/get_status)                        | Get the current status of WiFi                               |
| [/wifi/stop](#/wifi/stop)                                    | Disconnect wifi                                              |
| [/wifi/start](#/wifi/start)                                  | Connect to wifi                                              |
| [/wifi/get_save_wifi](#/wifi/get_save_wifi)                  | Get a list of configured WiFi, with a maximum of 3 saved     |
| [/wifi/delete_save_wifi](#/wifi/delete_save_wifi)            | Delete WiFi with saved configuration                         |
| [/wifi/scan](#/wifi/scan)                                    | Scan the current WiFi environment, and get the AP list       |
| [/wifi/set_reconn_to_saved_wifi](#/wifi/set_reconn_to_saved_wifi) | Set whether to enable automatic switching to saved WiFi (when the current WiFi cannot be connected) |
| [/wifi/get_reconn_to_saved_wifi](#/wifi/get_reconn_to_saved_wifi) | Get whether to enable automatic switching to saved WiFi (when the current WiFi cannot be connected) |
| **/wan_failover**                                            | **APIs for wan failover**                                    |
| [/wan_failover/get_config](#/wan_failover/get_config)        | Get the current WAN failover configuration                   |
| [/wan_failover/set_config](#/wan_failover/set_config)        | Set the current WAN failover configuration                   |
| **/sys**                                                     | **APIs for System**                                          |
| [/sys/get_info](#/sys/get_info)                              | Get system special status information                        |
| [/sys/get_status](#/sys/get_status)                          | Get system status information                                |
| [/sys/get_time_config](#/sys/get_time_config)                | Get time related configurations, including SNTP server and time zone settings |
| [/sys/set_time_config](#/system/set_time_config)             | Set time related configurations, including SNTP server and time zone settings |
| [/sys/check_current_firmware](#/sys/check_current_firmware)  | Get current firmware information                             |
| [/sys/check_online_firmware](#/sys/check_online_firmware)    | Get the latest firmware information for online servers       |
| [/sys/upgrade_online_firmware](#/sys/upgrade_online_firmware) | upgrade firmware form online servers                         |
| [/sys/check_upgrade_status](#/sys/check_upgrade_status)      | Used to obtain upgrade status when upgrade loading           |
| [/sys/upgrade_online_certificate](#/sys/upgrade_online_certificate) | Online upgrade certificate                                   |
| [/sys/upgrade_local_certificate](#/sys/upgrade_local_certificate) | Upgrade certificate locally                                  |
| [/sys/get_log](#/sys/get_log)                                | Get system log                                               |
| [/sys/export_sys_config](#/sys/export_sys_config)            | Export current system configuration                          |
| [/sys/import_sys_config](#/sys/import_sys_config)            | Import system configuration                                  |
| [/sys/set_admin_pwd](#/sys/set_admin_pwd)                    | Change administrator password                                |
| [/sys/reset](#/sys/reset)                                    | Restore factory settings                                     |
| [/sys/restart](#/sys/restart)                                | Device restart                                               |



## /UI

### Login and Use Steps

#### Step1: Get encryption parameters by challenge method

Call the **/ui/challenge** method to login. This method respond data for encryption, including: salt and nonce.

```
{
    "code": 0,
    "result": {
        "alg": 66,
        "salt": "ZmVhMjk5",
        "nonce": "N2E1NDAwNjIzZGMzY2QxYjQyY2VlZTEx"
    }
}
```

**Note**: The string used for encrypted transmission, which is randomly generated and valid for only **2000ms**. This means that steps 2-3 must be completed within 2000ms, otherwise the process has to restart from step 1.

#### Step2: Generate hash values for login

* Get the hash string for password using hmac-sha256 with salt
* Combine the default user name, the hash string of password and the nonce. Format as : **$(USERNAME):$(HASH):$(NONCE)**
  * The default user name is : **root**
* Get the MD5 hash string of the combine string

**Simply JavaScript code demo**

```javascript
import CryptoJS from 'crypto-js'
const hs256 = CryptoJS.HmacSHA256(password, salt) 
     const base64 = CryptoJS.enc.Base64.stringify(hs256) 
     const str = `root:${base64}:${nonce}`  
     const md5 = CryptoJS.MD5(str).toString() c
```

#### Step3: Get sid by login

Call the **/ui/login** method, passing the username as the username parameter and the hash value as the hash parameter.

**/ui/login request body:**

```json
{
  "username": "root",
  "hash": "771dff96fa01146f6e42ad01bed197ca"
}
```

**/ui/login response body:**

```json
{
  "code": 0,
  "result": {
    "sid": "NDA2NWQ1YTYzN2NkZDFjNTU1MGE2ZDhi"
  }
}
```

This method responds with the sid used for authentication and other apis should add it as "**Token**" in the http header. The validity of the sid is **35s** and will be reset each time you call the interface with it. That is, if you don't call any interface for 35s, you need to get the sid again.



### <span id="/ui/challenge">/ui/challenge</span>

**Get the randrom number of login encryption.**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description                                                  |
  | ------- | ------ | ------------------------------------------------------------ |
  | alg     | number | Id of the algorithm used for encryption, 66 means **hmac-sha256** |
  | salt    | string | Salt of the encryption                                       |
  | nonce   | string | Nonce of the encryption                                      |
  | code    | number | 0 means success                                              |
  | err_msg | string | Only exists on error                                         |

  

### <span id="/ui/set_init">/ui/set_init</span>

**Initialize this device**

* Request Method: **POST**

* Request parameters：

  | Field    | Type   | Description                                |
  | -------- | ------ | ------------------------------------------ |
  | lang     | string | The language of web; support: "zh-cn" "en" |
  | password | string | The password of web                        |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/ui/login">/ui/login</span>

**Login and get the token**

* Request Method: **POST**

* Request parameters：

  | Field    | Type   | Description                                        |
  | -------- | ------ | -------------------------------------------------- |
  | username | string | Username for login， must be "root"                |
  | hash     | string | See the step2 hash values generate, and pass it in |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/ui/logout">/ui/logout</span>

**Logout**

* Request Method: **POST**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/ui/check_initialized">/ui/check_initialized</span>

**Check if this devive is initialized**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field             | Type    | Description                                                  |
  | ----------------- | ------- | ------------------------------------------------------------ |
  | firmware_category | string  | The current firmware type used; Currently, there are two values: "**2c**" and "2b" |
  | firmware_version  | string  | Firmware Version                                             |
  | hostname          | string  | Device Host Name                                             |
  | initialized       | boolean | Whether initialized                                          |
  | mac               | string  | Device mac                                                   |
  | model             | string  | Device model                                                 |
  | code              | number  | 0 means success                                              |
  | err_msg           | string  | Only exists on error                                         |





## /OTBR

### <span id="/otbr/get_status">/otbr/get_status</span>

**Get current status**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field                   | Type   | Description                                                  |
  | ----------------------- | ------ | ------------------------------------------------------------ |
  | OpenThreadVersionAPI    | string | OpenThread API Version                                       |
  | OTBRVersion             | string | OpenThread Version ([ot-br-posix](https://github.com/openthread/ot-br-posix) Version) |
  | ThreadVersion           | string | Thread Specification Version，v1.1，v1.2, v1.3               |
  | Network                 | object | Thread network information                                   |
  | Network.Channel         | number | Thread network channel, with a value range of 11-26          |
  | Network.ExtPanId        | string | Thread network Extended PAN ID, Its length is limited to 16 bytes of UTF-8 encoded characters |
  | Network.NetworkKey      | string | Thread network key, with a length of 32 bytes UTF-8 encoded characters |
  | Network.NetworkName     | string | Thread network name, with a length limit of 1-16 characters  |
  | Network.PanId           | string | Thread network PAN ID, value range: 0x0< PAN ID<0xFFFF       |
  | Network.PSKc            | string | Thread network PSKc                                          |
  | Network.Passphrase      | string | Thread network Passphrase, User defined string, it can be used for Commissioner Credential and also used to generate PSKc, with a length limit of 6-255 bytes UTF-8 encoded characters |
  | Network.MeshLocalPrefix | string | Thread network MeshLocalPrefix                               |
  | Network.OnMeshPrefix    | string | Thread network On-Mesh Prefix                                |
  | Network.IPv6            | array  | IPv6 Address List                                            |
  | Network.ActiveDataset   | string | Hex formatted network information                            |
  | RCP                     | object | RCP information                                              |
  | RCP.State               | number | RCP current state: <br />disabled=0<br />detached=1<br />child=2<br />router=3<br />leader=4 |
  | RCP.RCPVersion          | string | RCP Version information, which refers to the OpenThread version information used by the firmware burned in the Thread module |
  | RCP.ExtAddress          | string | IEEE 802.15.4 Extended Address                               |
  | RCP.EUI64               | string | The factory-assigned IEEE EUI-64                             |
  | RCP.TXPower             | number | The transmit power in dBm                                    |
  | RCP.Rloc16              | number | Thread RLOC16 value                                          |
  | code                    | number | 0 means success                                              |
  | err_msg                 | string | Only exists on error                                         |



### <span id="/otbr/scan">/otbr/scan</span>

**Start thread network scan**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field                   | Type   | Description                                |
  | ----------------------- | ------ | ------------------------------------------ |
  | ScanList                | array  | Scan List                                  |
  | ScanList[x].Channel     | number | The channel of this thread network         |
  | ScanList[x].Rssi        | number | The Thread network signal strength         |
  | ScanList[x].Lqi         | number | This Thread network link quality indicator |
  | ScanList[x].NetworkName | string | The network name of this Thread network    |
  | ScanList[x].ExtPanId    | string | This Thread network Extended PAN ID        |
  | ScanList[x].PanId       | number | This Thread network PAN ID                 |
  | code                    | number | 0 means success                            |
  | err_msg                 | string | Only exists on error                       |



### <span id="/otbr/get_join_status">/otbr/get_join_status</span>

**Get the status of joiner, only use for S20 work as joiner**

* Request Method: **POST**

* Request parameters：

  | Field          | Type   | Description                                                  |
  | -------------- | ------ | ------------------------------------------------------------ |
  | CredentialType | string | Joiner Credential Type:<br />"networkKeyType"<br />"pskdType"<br />(Note: Only "pskdType" valid) |

* Response parameters：

  | Field   | Type   | Description           |
  | ------- | ------ | --------------------- |
  | status  | number | Joiner current status |
  | code    | number | 0 means success       |
  | err_msg | string | Only exists on error  |



### <span id="/otbr/join">/otbr/join</span>

**Start joinning to the thread network**

* Request Method: **POST**

* Request parameters：

  | Field          | Type   | Description                                                  |
  | -------------- | ------ | ------------------------------------------------------------ |
  | CredentialType | string | Joiner Credential Type:<br />"networkKeyType"<br />"pskdType" |
  | NetworkKey     | string | Thread network key, with a length of 32 bytes UTF-8 encoded characters |
  | PSKd           | string | The Joiner Credential is a device-specific string of all uppercase alphanumeric characters (0-9 and A-Y, excluding I, O, Q and Z for readability), with a length between 6 and 32 characters. |
  | Channel        | number | Thread network channel, obtained through scanning; When using networkKeyType, it is necessary use this field. |
  | PanId          | number | Thread network PAN ID, obtained through scanning; When using networkKeyType, it is necessary use this field. |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/set_config">/otbr/set_config</span>

**Set the configurations of current thread network**

* Request Method: **POST**

* Request parameters：

  | Field       | Type   | Description                                                  |
  | ----------- | ------ | ------------------------------------------------------------ |
  | NetworkName | string | Thread network name, with a length limit of 1-16 characters  |
  | ExtPanId    | string | Thread network Extended PAN ID                               |
  | PanId       | number | Thread network PAN ID                                        |
  | Passphrase  | string | Thread network Passphrase, User defined string, it can be used for Commissioner Credential and also used to generate PSKc, with a length limit of 6-255 bytes UTF-8 encoded characters. Default use "goodlife". |
  | NetworkKey  | string | Thread network key, with a length of 32 bytes UTF-8 encoded characters |
  | Channel     | number | Thread network channel, with a value range of 11-26          |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/stop">/otbr/stop</span>

**Disable the thread**

* Request Method: **POST**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/start">/otbr/start</span>

**Enable the thread**

* Request Method: **POST**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/generate_thread_network">/otbr/generate_thread_network</span>

**Generate a new configuations of the thread network**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/set_txpower">/otbr/set_txpower</span>

**Set the TX power**

* Request Method: **POST**

* Request parameters：

  | Field   | Type   | Description                                                  |
  | ------- | ------ | ------------------------------------------------------------ |
  | TXPower | number | The transmission power of thread network, range is -24 <= TXPower <= 20 |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/set_commissioning">/otbr/set_commissioning</span>

**Set the state of commissioner**

* Request Method: **POST**

* Request parameters：

  | Field  | Type    | Description                 |
  | ------ | ------- | --------------------------- |
  | Enable | boolean | Whether enable commissioner |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/add_joiner">/otbr/add_joiner</span>

**Add a new joiner**

* Request Method: **POST**

* Request parameters：

  | Field   | Type   | Description                                                  |
  | ------- | ------ | ------------------------------------------------------------ |
  | PSKd    | string | The Joiner Credential is a device-specific string of all uppercase alphanumeric characters (0-9 and A-Y, excluding I, O, Q and Z for readability), with a length between 6 and 32 characters. |
  | Timeout | number | Timeout for Joiners, in seconds. Default 120s                |
  | EUI64   | string | Joiner EUI64, default *, means all                           |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/get_commissioning_status">/otbr/get_commissioning_status</span>

**Get the status of commissioner**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description                |
  | ------- | ------ | -------------------------- |
  | State   | number | 1: active<br />0: disabled |
  | code    | number | 0 means success            |
  | err_msg | string | Only exists on error       |



### <span id="/otbr/rejoin_all">/otbr/rejoin_all</span>

**Rejoin all the joiners**

* Request Method: **POST**

* Request parameters：

  | Field   | Type   | Description                                     |
  | ------- | ------ | ----------------------------------------------- |
  | Type    | number | 1: Only Timeout<br />2: Only Joined<br />3: ALL |
  | Timeout | number | Timeout for Joiners, in seconds. Default 120s   |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/get_joiner_list">/otbr/get_joiner_list</span>

**Get the list of joiners**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field                    | Type   | Description                                                  |
  | ------------------------ | ------ | ------------------------------------------------------------ |
  | DeviceList               | array  | Joiner device list                                           |
  | DeviceList[x].EUI64      | string | Joiner EUI64, "*" means all                                  |
  | DeviceList[x].Status     | number | Joiner device status:<br />0:  Reday to Join<br />1:  Joining<br />2:  Joined<br />3:  Timeout |
  | DeviceList[x].PSKd       | string | The Joiner Credential                                        |
  | DeviceList[x].Timeout    | number | Joiner joining timeout                                       |
  | DeviceList[x].AddTime    | number | Timestamp when adding                                        |
  | DeviceList[x].JoinedTime | number | Joiner successfully obtained credential timestamp            |
  | code                     | number | 0 means success                                              |
  | err_msg                  | string | Only exists on error                                         |



### <span id="/otbr/remove_joiner_list">/otbr/remove_joiner_list</span>

**Remove all the joiners in the list**

* Request Method: **POST**

* Request parameters：

  | Field         | Type   | Description                       |
  | ------------- | ------ | --------------------------------- |
  | DeviceList    | array  | Need to remove Joiner device list |
  | DeviceList[x] | string | Joiner EUI64                      |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/export_joiner_list">/otbr/export_joiner_list</span>

**Export the list of joiners**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field               | Type   | Description                 |
  | ------------------- | ------ | --------------------------- |
  | joiner_list_version | string | Joiner device list version  |
  | DeviceList          | array  | Joiner device list          |
  | DeviceList[x].EUI64 | string | Joiner EUI64, "*" means all |
  | DeviceList[x].PSKd  | string | The Joiner Credential       |
  | code                | number | 0 means success             |
  | err_msg             | string | Only exists on error        |



### <span id="/otbr/import_joiner_list">/otbr/import_joiner_list</span>

**Import the list of joiners**

* Request Method: **POST**

* Request parameters：

  | Field                           | Type         | Description                                         |
  | ------------------------------- | ------------ | --------------------------------------------------- |
  | joiner_list_version             | string       | Joiner device list version                          |
  | DeviceList                      | arrayarray   | Joiner device listNeed to remove Joiner device list |
  | DeviceList[x].EUI64             | string       | Joiner EUI64, "*" means all                         |
  | DeviceList[x].PSKdDeviceList[x] | stringstring | The Joiner CredentialJoiner EUI64                   |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/commit_joiner_list">/otbr/commit_joiner_list</span>

**Commit the list of joiners**

* Request Method: **POST**

* Request parameters：

  | Field   | Type   | Description    |
  | ------- | ------ | -------------- |
  | Timeout | number | commit timeout |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/get_bbr_status">/otbr/get_bbr_status</span>

**Get the status the backbone router**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description                |
  | ------- | ------ | -------------------------- |
  | State   | number | 1: active<br />0: disabled |
  | code    | number | 0 means success            |
  | err_msg | string | Only exists on error       |



### <span id="/otbr/disable_bbr">/otbr/disable_bbr</span>

**Disable the backbone router**

* Request Method: **POST**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



### <span id="/otbr/enable_bbr">/otbr/enable_bbr</span>

**Enable the backbone router**

* Request Method: **POST**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



## /eth

### <span id="/eth/get_status">/eth/get_status</span>

**Get the current status of Ethernet**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field        | Type   | Description                                                  |
  | ------------ | ------ | ------------------------------------------------------------ |
  | status       | number | Connection status <br />0: Not connected<br />1: Successfully connected <br />2: Connecting <br />3: Physical device not connected |
  | protocol     | string | Networking methods<br />“dhcp” or “static”                   |
  | ipv4         | object | IPv4 related status, only available after connection         |
  | ipv4.ip      | string | ipv4 address                                                 |
  | ipv4.gateway | string | ipv4 gateway                                                 |
  | ipv6         | object | IPv6 related status, only available after connection         |
  | ipv6.ip      | string | ipv6 address                                                 |
  | code         | number | 0 means success                                              |
  | err_msg      | string | Only exists on error                                         |



### <span id="/eth/get_config">/eth/get_config</span>

**Get Ethernet configuration**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field        | Type   | Description                                          |
  | ------------ | ------ | ---------------------------------------------------- |
  | protocol     | string | Networking methods<br />“dhcp” or “static”           |
  | ipv4         | object | IPv4 related status, only available after connection |
  | ipv4.ip      | string | Static IPv4 address                                  |
  | ipv4.netmask | string | Static ipv4 network mask                             |
  | ipv4.gateway | string | Static ipv4 gateway                                  |
  | code         | number | 0 means success                                      |
  | err_msg      | string | Only exists on error                                 |



### <span id="/eth/set_config">/eth/set_config</span>

**Set Ethernet configuration**

* Request Method: **POST**

* Request parameters：

  | Field        | Type   | Description                                |
  | ------------ | ------ | ------------------------------------------ |
  | protocol     | string | Networking methods<br />“dhcp” or “static” |
  | ipv4         | object | ipv4 setting, effective when static        |
  | ipv4.ip      | string | Static IPv4 address                        |
  | ipv4.netmask | string | Static ipv4 network mask                   |
  | ipv4.gateway | string | Static ipv4 gateway                        |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |



## /wifi

### <span id="/wifi/get_status">/wifi/get_status</span>

**Get the current status of WiFi**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field        | Type   | Description                                                  |
  | ------------ | ------ | ------------------------------------------------------------ |
  | status       | number | Connection status<br />0: Idle; <br />1: Connecting; <br />2: Connected, <br />3: Connection failed |
  | fail_msg     | string | Connection failure information                               |
  | ssid         | string | Connected or currently connected WiFi ssid                   |
  | bssid        | string | Connected wifi bssid                                         |
  | ipv4         | object | IPv4 related status, only available after connection         |
  | ipv4.ip      | string | ipv4 address                                                 |
  | ipv4.gateway | string | ipv4 gateway                                                 |
  | ipv6         | object | IPv6 related status, only available after connection         |
  | ipv6.ip      | string | ipv6 address                                                 |
  | code         | number | 0 means success                                              |
  | err_msg      | string | Only exists on error                                         |

### <span id="/wifi/stop">/wifi/stop</span>

**Disconnect wifi**

* Request Method: **POST**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |

  

### <span id="/wifi/start">/wifi/start</span>

**Connect to wifi**

* Request Method: **POST**

* Request parameters：

  | Field            | Type    | Description                                                  |
  | ---------------- | ------- | ------------------------------------------------------------ |
  | enable_wifi_save | boolean | Whether save this configuration when connecting to WiFi      |
  | protocol         | string  | Networking methods<br />“dhcp” or “static”                   |
  | ipv4             | object  | ipv4 setting, effective when static                          |
  | ipv4.ip          | string  | Static IPv4 address                                          |
  | ipv4.netmask     | string  | Static ipv4 network mask                                     |
  | ipv4.gateway     | string  | Static ipv4 gateway                                          |
  | ssid             | string  | wifi ssid                                                    |
  | pwd              | string  | wifi password                                                |
  | lock_bssid       | boolean | Whether specify an AP to connect to the specified bssid      |
  | bssid            | string  | wifi bssid                                                   |
  | auth_mode        | number  | wifi authentication mode<br />0: open <br />1: WEP <br />2: WPA_PSK <br />3: WPA2_PSK  <br />4: WPA_WPA2_PSK <br />5: WPA2_ENTERPRISE (Not support)<br />6: WPA3_PSK <br />7: WPA2_WPA3_PSK <br />8: WAPI_PSK <br />9: OWE |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |

  

### <span id="/wifi/get_save_wifi">/wifi/get_save_wifi</span>

**Get a list of configured WiFi, with a maximum of 3 saved**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field                | Type    | Description                                                  |
  | -------------------- | ------- | ------------------------------------------------------------ |
  | list                 | array   | wifi list                                                    |
  | list[x].ssid         | string  | wifi ssid                                                    |
  | list[x].bssid        | string  | wifi bssid                                                   |
  | list[x].lock_bssid   | boolean | whether lock the bssid                                       |
  | list[x].auth_mode    | number  | wifi authentication mode<br />0: open <br />1: WEP <br />2: WPA_PSK <br />3: WPA2_PSK  <br />4: WPA_WPA2_PSK <br />5: WPA2_ENTERPRISE (Not support)<br />6: WPA3_PSK <br />7: WPA2_WPA3_PSK <br />8: WAPI_PSK <br />9: OWE |
  | list[x].pwd          | string  | wifi password                                                |
  | list[x].protocol     | string  | Networking methods<br />“dhcp” or “static”                   |
  | list[x].ipv4         | object  | Static IPv4 configuration                                    |
  | list[x].ipv4.ip      | string  | Static IPv4 address                                          |
  | list[x].ipv4.netmask | string  | Static  ipv4 network mask                                    |
  | list[x].ipv4.gateway | string  | Static   ipv4 gateway                                        |
  | code                 | number  | 0 means success                                              |
  | err_msg              | string  | Only exists on error                                         |

### <span id="/wifi/delete_save_wifi">/wifi/delete_save_wifi</span>

**Delete WiFi with saved configuration**

* Request Method: **POST**

* Request parameters：

  | Field     | Type   | Description                                                  |
  | --------- | ------ | ------------------------------------------------------------ |
  | ssid      | string | which wifi ssid need to delete                               |
  | auth_mode | number | need to delete wifi authentication mode<br />0: open <br />1: WEP <br />2: WPA_PSK <br />3: WPA2_PSK  <br />4: WPA_WPA2_PSK <br />5: WPA2_ENTERPRISE (Not support)<br />6: WPA3_PSK <br />7: WPA2_WPA3_PSK <br />8: WAPI_PSK <br />9: OWE |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |

  

### <span id="/wifi/scan">/wifi/scan</span>

**Scan the current WiFi environment, and get the AP list**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field             | Type   | Description                                                  |
  | ----------------- | ------ | ------------------------------------------------------------ |
  | list              | array  | wifi list                                                    |
  | list[x].ssid      | string | wifi ssid                                                    |
  | list[x].bssid     | string | wifi bssid                                                   |
  | list[x].auth_mode | number | wifi authentication mode<br />0: open <br />1: WEP <br />2: WPA_PSK <br />3: WPA2_PSK  <br />4: WPA_WPA2_PSK <br />5: WPA2_ENTERPRISE (Not support)<br />6: WPA3_PSK <br />7: WPA2_WPA3_PSK <br />8: WAPI_PSK <br />9: OWE |
  | list[x].rssi      | number | signal intensity RSSI                                        |
  | code              | number | 0 means success                                              |
  | err_msg           | string | Only exists on error                                         |

### <span id="/wifi/set_reconn_to_saved_wifi">/wifi/set_reconn_to_saved_wifi</span>

**Set whether to enable automatic switching to saved WiFi (when the current WiFi cannot be connected)**

* Request Method: **POST**

* Request parameters：

  | Field  | Type    | Description    |
  | ------ | ------- | -------------- |
  | enable | boolean | Whether enable |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |

  

### <span id="/wifi/get_reconn_to_saved_wifi">/wifi/get_reconn_to_saved_wifi</span>

**Get whether to enable automatic switching to saved WiFi (when the current WiFi cannot be connected)**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field   | Type    | Description          |
  | ------- | ------- | -------------------- |
  | enable  | boolean | Whether enable       |
  | code    | number  | 0 means success      |
  | err_msg | string  | Only exists on error |



## /wan_failover

### <span id="/wan_failover/get_config">/wan_failover/get_config</span>

**Get the current WAN failover configuration**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field                   | Type    | Description                                                  |
  | ----------------------- | ------- | ------------------------------------------------------------ |
  | eth                     | object  | Ethernet failover configuration                              |
  | eth.enable              | boolean | Whether enable Ethernet check                                |
  | eth.check_interval      | number  | eth check interval, unit is minutes                          |
  | eth.check_success_time  | number  | eth change to Available Condition: Accumulated Success Times of IP Ping Set |
  | eth.check_fail_time     | number  | eth change to fault condition: The cumulative number of ping failures for each set IP |
  | eth.check_ipv4          | array   | eth IPv4 test address list, up to 3                          |
  | eth.check_ipv4[x]       | string  | eth IPv4 test address                                        |
  | eth.check_ipv6          | array   | eth IPv6 test address list, up to 3                          |
  | eth.check_ipv6[x]       | string  | eth IPv6 test address                                        |
  | wifi                    | object  | wifi Ethernet failover configuration                         |
  | wifi.enable             | boolean | Whether enable wifi check                                    |
  | wifi.check_interval     | number  | wifi check interval, unit is minutes                         |
  | wifi.check_success_time | number  | wifi change to Available Condition: Accumulated Success Times of IP Ping Set |
  | wifi.check_fail_time    | number  | wifi change to fault condition: The cumulative number of ping failures for each set IP |
  | wifi.check_ipv4         | array   | wifi IPv4 test address list, up to 3                         |
  | wifi.check_ipv4[x]      | string  | wifi IPv4 test address                                       |
  | wifi.check_ipv6         | array   | wifi IPv6 test address list, up to 3                         |
  | wifi.check_ipv6[x]      | string  | wifi IPv6 test address                                       |
  | priority                | object  | Priority configuration                                       |
  | priority.eth            | number  | eth priority, the smaller the number, the higher the priority |
  | priority.wifi           | number  | wifi priority, the smaller the number, the higher the priority |
  | code                    | number  | 0 means success                                              |
  | err_msg                 | string  | Only exists on error                                         |



### <span id="/wan_failover/set_config">/wan_failover/set_config</span>

**Set the current WAN failover configuration**

* Request Method: **POST**

* Request parameters：

  | Field              | Type    | Description                          |
  | ------------------ | ------- | ------------------------------------ |
  | eth                | object  | Ethernet failover configuration      |
  | eth.enable         | boolean | Whether enable Ethernet check        |
  | eth.check_ipv4     | array   | eth IPv4 test address list, up to 3  |
  | eth.check_ipv4[x]  | string  | eth IPv4 test address                |
  | eth.check_ipv6     | array   | eth IPv6 test address list, up to 3  |
  | eth.check_ipv6[x]  | string  | eth IPv6 test address                |
  | wifi               | object  | wifi Ethernet failover configuration |
  | wifi.enable        | boolean | Whether enable wifi check            |
  | wifi.check_ipv4    | array   | wifi IPv4 test address list, up to 3 |
  | wifi.check_ipv4[x] | string  | wifi IPv4 test address               |
  | wifi.check_ipv6    | array   | wifi IPv6 test address list, up to 3 |
  | wifi.check_ipv6[x] | string  | wifi IPv6 test address               |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |

  

## /sys

### <span id="/sys/get_info">/sys/get_info</span>

**Get system special status information**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field                      | Type   | Description                                                  |
  | -------------------------- | ------ | ------------------------------------------------------------ |
  | wan_status                 | number | 0: No network <br />1: There is got IP but no network (only with Failover enabled) <br />2: Network is avaliable |
  | thread_nwk_status          | number | 0: No thread network <br />1: With thread network            |
  | thread_commissioner_status | number | 0: Disable  commissioner<br />1: Enable commissioner         |
  | code                       | number | 0 means success                                              |
  | err_msg                    | string | Only exists on error                                         |



### <span id="/sys/get_status">/sys/get_status</span>

**Get system status information**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field        | Type   | Description                                      |
  | ------------ | ------ | ------------------------------------------------ |
  | memory_total | number | The total memory of the system, in units of byte |
  | memory_free  | number | Free memory of the system, in units of byte      |
  | ble_mac      | string | Ble mac                                          |
  | wifi_mac     | string | Wifi mac                                         |
  | eth_mac      | string | Eth mac                                          |
  | model        | string | Device model                                     |
  | sn           | string | Device sn                                        |
  | code         | number | 0 means success                                  |
  | err_msg      | string | Only exists on error                             |



### <span id="/sys/get_time_config">/sys/get_time_config</span>

**Get time related configurations, including SNTP server and time zone settings**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field     | Type   | Description                                            |
  | --------- | ------ | ------------------------------------------------------ |
  | sntp      | string | SNTP server address                                    |
  | timezone  | number | Timezone, range from -12 to 14 (from UTC-12 to UTC+14) |
  | localtime | number | Current time zone timestamp                            |
  | code      | number | 0 means success                                        |
  | err_msg   | string | Only exists on error                                   |



### <span id="/sys/set_time_config">/sys/set_time_config</span>

**Set time related configurations, including SNTP server and time zone settings**

* Request Method: **POST**

* Request parameters：

  | Field    | Type   | Description                                                  |
  | -------- | ------ | ------------------------------------------------------------ |
  | sntp     | string | SNTP server address                                          |
  | timezone | string | Timezone<br />"UTC-12"<br />"UTC-11"<br />"UTC-10"<br />"UTC-9"<br />"UTC-8"<br />"UTC-7"<br />"UTC-6"<br />"UTC-5"<br />"UTC-4"<br />"UTC-3"<br />"UTC-2"<br />"UTC-1"<br />"UTC+0"<br />"UTC+1"<br />"UTC+2"<br />"UTC+3"<br />"UTC+4"<br />"UTC+5"<br />"UTC+6"<br />"UTC+7"<br />"UTC+8"<br />"UTC+9"<br />"UTC+10"<br />"UTC+11"<br />"UTC+12"<br />"UTC+13"<br />"UTC+14" |

  

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |

  

### <span id="/sys/check_current_firmware">/sys/check_current_firmware</span>

**Get current firmware information**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field                    | Type   | Description              |
  | ------------------------ | ------ | ------------------------ |
  | current_firmware_type    | string | Current firmware type    |
  | current_firmware_version | string | Current firmware version |
  | code                     | number | 0 means success          |
  | err_msg                  | string | Only exists on error     |

  

### <span id="/sys/check_online_firmware">/sys/check_online_firmware</span>

**Get the latest firmware information for online servers**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field                           | Type   | Description                 |
  | ------------------------------- | ------ | --------------------------- |
  | online_firmware_list            | array  | Firmware list on the server |
  | online_firmware_list[x].type    | string | Firmware type               |
  | online_firmware_list[x].version | string | Firmware version            |
  | code                            | number | 0 means success             |
  | err_msg                         | string | Only exists on error        |

  

### <span id="/sys/upgrade_online_firmware">/sys/upgrade_online_firmware</span>

**upgrade firmware form online servers**

* Request Method: **POST**

* Request parameters：

  | Field                | Type    | Description                                                  |
  | -------------------- | ------- | ------------------------------------------------------------ |
  | official             | object  | Official firmware. If want to valid this object, custom object do not be carry. |
  | official.type        | string  | Firmware type                                                |
  | official.version     | string  | Firmware version                                             |
  | official.save_config | boolean | Whether keep the configuration after upgrade                 |
  | custom               | object  | Custom firmware. If want to valid this object, official object do not be carry. |
  | custom.url           | string  | Firmware download url                                        |

* Response parameters：

  | Field   | Description          | Type   |
  | ------- | -------------------- | ------ |
  | code    | 0 means success      | number |
  | err_msg | Only exists on error | string |

  

### <span id="/sys/check_upgrade_status">/sys/check_upgrade_status</span>

**Used to obtain upgrade status when upgrade loading**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description                                                  |
  | ------- | ------ | ------------------------------------------------------------ |
  | status  | number | 0: Upgrade successful, device is about to restart<br />1: Upgrade failed, need to jump back to the higher-level page<br />2: Upgrading in progress; |
  | code    | number | 0 means success                                              |
  | err_msg | string | Only exists on error                                         |

  

### <span id="/sys/upgrade_online_certificate">/sys/upgrade_online_certificate</span>

**Online upgrade certificate**

* Request Method: **POST**

* Request parameters：

  | Field | Type   | Description              |
  | ----- | ------ | ------------------------ |
  | url   | string | Certificate download URL |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |

  

### <span id="/sys/upgrade_local_certificate">/sys/upgrade_local_certificate</span>

**Upgrade ca certificate locally**

* Request Method: **POST**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |

  

### <span id="/sys/get_log">/sys/get_log</span>

**Get system log**

* Request Method: **GET**

* Request parameters：

  None

* Response parameters：

  | Field   | Description          | Type   |
  | ------- | -------------------- | ------ |
  | code    | 0 means success      | number |
  | err_msg | Only exists on error | string |

  

### <span id="/sys/export_sys_config">/sys/export_sys_config</span>

**Export current system configuration**

* Request Method: **POST**

* Request parameters：

  None

* Response parameters：

  | Field                                | Type    | Description                                                  |
  | ------------------------------------ | ------- | ------------------------------------------------------------ |
  | cfg_ver                              | number  | System configuconration version                              |
  | ui_cfg                               | object  | UI configuconration                                          |
  | ui_cfg.language                      | string  | The language of web; support: "zh-cn" "en"                   |
  | sntp_cfg                             | object  | SNTP configuconration                                        |
  | sntp_cfg.sntp_srv                    | string  | SNTP server address                                          |
  | sntp_cfg.time_zone                   | string  | Timezone<br />"UTC-12"<br />"UTC-11"<br />"UTC-10"<br />"UTC-9"<br />"UTC-8"<br />"UTC-7"<br />"UTC-6"<br />"UTC-5"<br />"UTC-4"<br />"UTC-3"<br />"UTC-2"<br />"UTC-1"<br />"UTC+0"<br />"UTC+1"<br />"UTC+2"<br />"UTC+3"<br />"UTC+4"<br />"UTC+5"<br />"UTC+6"<br />"UTC+7"<br />"UTC+8"<br />"UTC+9"<br />"UTC+10"<br />"UTC+11"<br />"UTC+12"<br />"UTC+13"<br />"UTC+14" |
  | otbr_cfg                             | object  | OTBR configuconration                                        |
  | otbr_cfg.nwk_on_off                  | number  | Whether enable thread network                                |
  | otbr_cfg.txpower                     | number  | The transmission power of thread network, range is -24 <= TXPower <= 20 |
  | otbr_cfg.passphrase                  | string  | Thread network Passphrase, User defined string, it can be used for Commissioner Credential and also used to generate PSKc, with a length limit of 6-255 bytes UTF-8 encoded characters |
  | otbr_cfg.bbr_on_off                  | number  | Whether enable thread bbr                                    |
  | otbr_cfg.channel                     | number  | Thread network channel, with a value range of 11-26          |
  | otbr_cfg.pan_id                      | number  | Thread network PAN ID, value range: 0x0< PAN ID<0xFFFF       |
  | otbr_cfg.nwk_key                     | string  | Thread network key, with a length of 32 bytes UTF-8 encoded characters |
  | otbr_cfg.ext_pan_id                  | string  | Thread network Extended PAN ID, Its length is limited to 16 bytes of UTF-8 encoded characters |
  | otbr_cfg.nwk_name                    | string  | Thread network name, with a length limit of 1-16 characters  |
  | wifi_cfg                             | object  | WIFI configuconration                                        |
  | wifi_cfg.wifi_on_off                 | number  | Whether enable wifi connect                                  |
  | wifi_cfg.ssid                        | string  | wifi ssid                                                    |
  | wifi_cfg.password                    | string  | wifi password                                                |
  | wifi_cfg.lock_bssid                  | boolean | whether lock the bssid                                       |
  | wifi_cfg.bssid                       | string  | wifi bssid                                                   |
  | wifi_cfg.authmode                    | number  | wifi authentication mode<br />0: open <br />1: WEP <br />2: WPA_PSK <br />3: WPA2_PSK  <br />4: WPA_WPA2_PSK <br />5: WPA2_ENTERPRISE (Not support)<br />6: WPA3_PSK <br />7: WPA2_WPA3_PSK <br />8: WAPI_PSK <br />9: OWE |
  | eth_failover_cfg                     | object  | ETH failover configuconration                                |
  | eth_failover_cfg.check               | boolean | Whether enable ETH failover                                  |
  | eth_failover_cfg.priority            | number  | eth priority, the smaller the number, the higher the priority |
  | eth_failover_cfg.check_interval      | number  | eth check interval, unit is minutes                          |
  | eth_failover_cfg.check_success_time  | number  | eth change to Available Condition: Accumulated Success Times of IP Ping Set |
  | eth_failover_cfg.check_fail_time     | number  | eth change to fault condition: The cumulative number of ping failures for each set IP |
  | eth_failover_cfg.check_ipv4          | array   | eth IPv4 test address list, up to 3                          |
  | eth_failover_cfg.check_ipv4[x]       | string  | eth IPv4 test address                                        |
  | eth_failover_cfg.check_ipv6          | array   | eth IPv6 test address list, up to 3                          |
  | eth_failover_cfg.check_ipv6[x]       | string  | eth IPv6 test address                                        |
  | wifi_failover_cfg                    | object  | WIFI failover configuconration                               |
  | wifi_failover_cfg.check              | boolean | Whether enable WIFI failover                                 |
  | wifi_failover_cfg.priority           | number  | wifi priority, the smaller the number, the higher the priority |
  | wifi_failover_cfg.check_interval     | number  | wifi check interval, unit is minutes                         |
  | wifi_failover_cfg.check_success_time | number  | wifi change to Available Condition: Accumulated Success Times of IP Ping Set |
  | wifi_failover_cfg.check_fail_time    | number  | wifi change to fault condition: The cumulative number of ping failures for each set IP |
  | wifi_failover_cfg.check_ipv4         | array   | wifi IPv4 test address list, up to 3                         |
  | wifi_failover_cfg.check_ipv4[x]      | string  | wifi IPv4 test address                                       |
  | wifi_failover_cfg.check_ipv6         | array   | wifi IPv6 test address list, up to 3                         |
  | wifi_failover_cfg.check_ipv6[x]      | string  | wifi IPv6 test address                                       |
  | eth_dhcp_cfg                         | object  | ETH dhcp configuconration                                    |
  | eth_dhcp_cfg.enable                  | boolean | Whether enable ETH dhcp                                      |
  | eth_dhcp_cfg.static_ipv4             | object  | ETH ipv4 setting, effective when static                      |
  | eth_dhcp_cfg.static_ipv4.ip          | string  | Static IPv4 address                                          |
  | eth_dhcp_cfg.static_ipv4.netmask     | string  | Static ipv4 network mask                                     |
  | eth_dhcp_cfg.static_ipv4.gateway     | string  | Static ipv4 gateway                                          |
  | wifi_dhcp_cfg                        | object  | WIFI  dhcp configuconration                                  |
  | wifi_dhcp_cfg.enable                 | boolean | Whether enable WIFI dhcp                                     |
  | wifi_dhcp_cfg.static_ipv4            | object  | WIFI ipv4 setting, effective when dhcp disable               |
  | wifi_dhcp_cfg.static_ipv4.ip         | string  | Static IPv4 address                                          |
  | wifi_dhcp_cfg.static_ipv4.netmask    | string  | Static ipv4 network mask                                     |
  | wifi_dhcp_cfg.static_ipv4.gateway    | string  | Static ipv4 gateway                                          |
  | wifi_saved                           | object  | WIFI saved configuconration                                  |
  | wifi_saved.list                      | array   | WIFI saved list                                              |
  | wifi_saved.list[x].ssid              | string  | WIFI ssid                                                    |
  | wifi_saved.list[x].lock_bssid        | boolean | Whether lock the bssid                                       |
  | wifi_saved.list[x].bssid             | string  | WIFI bssid                                                   |
  | wifi_saved.list[x].auth_mode         | number  | wifi authentication mode<br />0: open <br />1: WEP <br />2: WPA_PSK <br />3: WPA2_PSK  <br />4: WPA_WPA2_PSK <br />5: WPA2_ENTERPRISE (Not support)<br />6: WPA3_PSK <br />7: WPA2_WPA3_PSK <br />8: WAPI_PSK <br />9: OWE |
  | wifi_saved.list[x].pwd               | string  | WIFI password                                                |
  | wifi_saved.list[x].dhcp              | boolean | Whether enable WIFI dhcp                                     |
  | wifi_saved.list[x].ipv4              | object  | WIFI ipv4 setting, effective when dhcp disable               |
  | wifi_saved.list[x].ipv4.ip           | string  | Static IPv4 address                                          |
  | wifi_saved.list[x].ipv4.netmask      | string  | Static ipv4 network mask                                     |
  | wifi_saved.list[x].ipv4.gateway      | string  | Static ipv4 gateway                                          |
  | code                                 | number  | 0 means success                                              |
  | err_msg                              | string  | Only exists on error                                         |

  

### <span id="/sys/import_sys_config">/sys/import_sys_config</span>

**Import system configuration**

* Request Method: **POST**

* Request parameters：

  | Field                                | Type    | Description                                                  |
  | ------------------------------------ | ------- | ------------------------------------------------------------ |
  | cfg_ver                              | number  | System configuconration version                              |
  | ui_cfg                               | object  | UI configuconration                                          |
  | ui_cfg.language                      | string  | The language of web; support: "zh-cn" "en"                   |
  | sntp_cfg                             | object  | SNTP configuconration                                        |
  | sntp_cfg.sntp_srv                    | string  | SNTP server address                                          |
  | sntp_cfg.time_zone                   | string  | Timezone<br />"UTC-12"<br />"UTC-11"<br />"UTC-10"<br />"UTC-9"<br />"UTC-8"<br />"UTC-7"<br />"UTC-6"<br />"UTC-5"<br />"UTC-4"<br />"UTC-3"<br />"UTC-2"<br />"UTC-1"<br />"UTC+0"<br />"UTC+1"<br />"UTC+2"<br />"UTC+3"<br />"UTC+4"<br />"UTC+5"<br />"UTC+6"<br />"UTC+7"<br />"UTC+8"<br />"UTC+9"<br />"UTC+10"<br />"UTC+11"<br />"UTC+12"<br />"UTC+13"<br />"UTC+14" |
  | otbr_cfg                             | object  | OTBR configuconration                                        |
  | otbr_cfg.nwk_on_off                  | number  | Whether enable thread network                                |
  | otbr_cfg.txpower                     | number  | The transmission power of thread network, range is -24 <= TXPower <= 20 |
  | otbr_cfg.passphrase                  | string  | Thread network Passphrase, User defined string, it can be used for Commissioner Credential and also used to generate PSKc, with a length limit of 6-255 bytes UTF-8 encoded characters |
  | otbr_cfg.bbr_on_off                  | number  | Whether enable thread bbr                                    |
  | otbr_cfg.channel                     | number  | Thread network channel, with a value range of 11-26          |
  | otbr_cfg.pan_id                      | number  | Thread network PAN ID, value range: 0x0< PAN ID<0xFFFF       |
  | otbr_cfg.nwk_key                     | string  | Thread network key, with a length of 32 bytes UTF-8 encoded characters |
  | otbr_cfg.ext_pan_id                  | string  | Thread network Extended PAN ID, Its length is limited to 16 bytes of UTF-8 encoded characters |
  | otbr_cfg.nwk_name                    | string  | Thread network name, with a length limit of 1-16 characters  |
  | wifi_cfg                             | object  | WIFI configuconration                                        |
  | wifi_cfg.wifi_on_off                 | number  | Whether enable wifi connect                                  |
  | wifi_cfg.ssid                        | string  | wifi ssid                                                    |
  | wifi_cfg.password                    | string  | wifi password                                                |
  | wifi_cfg.lock_bssid                  | boolean | whether lock the bssid                                       |
  | wifi_cfg.bssid                       | string  | wifi bssid                                                   |
  | wifi_cfg.authmode                    | number  | wifi authentication mode<br />0: open <br />1: WEP <br />2: WPA_PSK <br />3: WPA2_PSK  <br />4: WPA_WPA2_PSK <br />5: WPA2_ENTERPRISE (Not support)<br />6: WPA3_PSK <br />7: WPA2_WPA3_PSK <br />8: WAPI_PSK <br />9: OWE |
  | eth_failover_cfg                     | object  | ETH failover configuconration                                |
  | eth_failover_cfg.check               | boolean | Whether enable ETH failover                                  |
  | eth_failover_cfg.priority            | number  | eth priority, the smaller the number, the higher the priority |
  | eth_failover_cfg.check_interval      | number  | eth check interval, unit is minutes                          |
  | eth_failover_cfg.check_success_time  | number  | eth change to Available Condition: Accumulated Success Times of IP Ping Set |
  | eth_failover_cfg.check_fail_time     | number  | eth change to fault condition: The cumulative number of ping failures for each set IP |
  | eth_failover_cfg.check_ipv4          | array   | eth IPv4 test address list, up to 3                          |
  | eth_failover_cfg.check_ipv4[x]       | string  | eth IPv4 test address                                        |
  | eth_failover_cfg.check_ipv6          | array   | eth IPv6 test address list, up to 3                          |
  | eth_failover_cfg.check_ipv6[x]       | string  | eth IPv6 test address                                        |
  | wifi_failover_cfg                    | object  | WIFI failover configuconration                               |
  | wifi_failover_cfg.check              | boolean | Whether enable WIFI failover                                 |
  | wifi_failover_cfg.priority           | number  | wifi priority, the smaller the number, the higher the priority |
  | wifi_failover_cfg.check_interval     | number  | wifi check interval, unit is minutes                         |
  | wifi_failover_cfg.check_success_time | number  | wifi change to Available Condition: Accumulated Success Times of IP Ping Set |
  | wifi_failover_cfg.check_fail_time    | number  | wifi change to fault condition: The cumulative number of ping failures for each set IP |
  | wifi_failover_cfg.check_ipv4         | array   | wifi IPv4 test address list, up to 3                         |
  | wifi_failover_cfg.check_ipv4[x]      | string  | wifi IPv4 test address                                       |
  | wifi_failover_cfg.check_ipv6         | array   | wifi IPv6 test address list, up to 3                         |
  | wifi_failover_cfg.check_ipv6[x]      | string  | wifi IPv6 test address                                       |
  | eth_dhcp_cfg                         | object  | ETH dhcp configuconration                                    |
  | eth_dhcp_cfg.enable                  | boolean | Whether enable ETH dhcp                                      |
  | eth_dhcp_cfg.static_ipv4             | object  | ETH ipv4 setting, effective when static                      |
  | eth_dhcp_cfg.static_ipv4.ip          | string  | Static IPv4 address                                          |
  | eth_dhcp_cfg.static_ipv4.netmask     | string  | Static ipv4 network mask                                     |
  | eth_dhcp_cfg.static_ipv4.gateway     | string  | Static ipv4 gateway                                          |
  | wifi_dhcp_cfg                        | object  | WIFI  dhcp configuconration                                  |
  | wifi_dhcp_cfg.enable                 | boolean | Whether enable WIFI dhcp                                     |
  | wifi_dhcp_cfg.static_ipv4            | object  | WIFI ipv4 setting, effective when dhcp disable               |
  | wifi_dhcp_cfg.static_ipv4.ip         | string  | Static IPv4 address                                          |
  | wifi_dhcp_cfg.static_ipv4.netmask    | string  | Static ipv4 network mask                                     |
  | wifi_dhcp_cfg.static_ipv4.gateway    | string  | Static ipv4 gateway                                          |
  | wifi_saved                           | object  | WIFI saved configuconration                                  |
  | wifi_saved.list                      | array   | WIFI saved list                                              |
  | wifi_saved.list[x].ssid              | string  | WIFI ssid                                                    |
  | wifi_saved.list[x].lock_bssid        | boolean | Whether lock the bssid                                       |
  | wifi_saved.list[x].bssid             | string  | WIFI bssid                                                   |
  | wifi_saved.list[x].auth_mode         | number  | wifi authentication mode<br />0: open <br />1: WEP <br />2: WPA_PSK <br />3: WPA2_PSK  <br />4: WPA_WPA2_PSK <br />5: WPA2_ENTERPRISE (Not support)<br />6: WPA3_PSK <br />7: WPA2_WPA3_PSK <br />8: WAPI_PSK <br />9: OWE |
  | wifi_saved.list[x].pwd               | string  | WIFI password                                                |
  | wifi_saved.list[x].dhcp              | boolean | Whether enable WIFI dhcp                                     |
  | wifi_saved.list[x].ipv4              | object  | WIFI ipv4 setting, effective when dhcp disable               |
  | wifi_saved.list[x].ipv4.ip           | string  | Static IPv4 address                                          |
  | wifi_saved.list[x].ipv4.netmask      | string  | Static ipv4 network mask                                     |
  | wifi_saved.list[x].ipv4.gateway      | string  | Static ipv4 gateway                                          |
  | code                                 | number  | 0 means success                                              |
  | err_msg                              | string  | Only exists on error                                         |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |

  

### <span id="/sys/set_admin_pwd">/sys/set_admin_pwd</span>

**Change administrator password**

* Request Method: **POST**

* Request parameters：

  | Field    | Type   | Description               |
  | -------- | ------ | ------------------------- |
  | username | string | User name, must be 'root' |
  | old_pwd  | string | Old password              |
  | new_pwd  | string | New password              |

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |

  

### <span id="/sys/reset">/sys/reset</span>

**Restore factory settings**

* Request Method: **POST**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |

  

### <span id="/sys/restart">/sys/restart</span>

**Device restart**

* Request Method: **POST**

* Request parameters：

  None

* Response parameters：

  | Field   | Type   | Description          |
  | ------- | ------ | -------------------- |
  | code    | number | 0 means success      |
  | err_msg | string | Only exists on error |