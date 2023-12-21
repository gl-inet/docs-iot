# GL-S20 BLE Network Configuration API

The GL-S20 includes two GATT services.

The first one is to receive **instructions and messages**, and the UUID of the service is `000000FF-0000-1000-8000-00805F9B34FB`, and it contains a characteristic, the UUID of the characteristic is `0000FF01-0000-1000-8000-00805F9B34FB`. This characteristic permission is only writable.

The second one is for sending notifications like **reply the instruction operation**, and the UUID of the service is `000000EE-0000-1000-8000-00805F9B34FB`. It only has one characteristic, and the UUID of the characteristic is `0000EE01-0000-1000-8000-00805F9B34FB`. The permission for this characteristic is readable and notifiable.

## Package format

Whether the device receives instructions from the client or responds to the execution results, it needs to follow the following format.

It consists of seven parts: header, version number, package length, scrolling count, CRC checksum, command ID, and data segment.

<table>
	<tr>
	    <th>Header</th>
	    <th>Version</th>
	    <th>Length</th>  
        <th>Count</th>  
        <th>CRC-16</th>  
        <th>CmdID</th>  
        <th>Data</th>  
	</tr>
    <tr>
	    <td>1 byte</td>
	    <td>1 byte</td>
        <td>2 byte</td>
        <td>1 byte</td>
        <td>2 byte</td>
        <td>1 byte</td>
        <td>N byte</td>
	</tr>
	<tr>
	    <td colspan="5">not encrypted</td>
        <td colspan="2">encrypted by AES-128</td>
	</tr>
</table>


- Header

  The header defaults to 0xFE.

- Version

  Version number defaults to 0x01.

- Length

  The length of the entire package.

- Count

  The valid range is 0-255, with a rolling count. The count is reset to zero on the initial connection, and the count value of the subsequent packet is larger than the previous one. (Package index to prevent package stuffing)

  **Note: **When the first packet is sent, the count field should be filled with 0x01. After that just rolling count.

- CRC-16

  After completing the packaging of header, version number, package length, scrolling count, command ID, data segments, CRC calculation can be performed.

  **Note:** Fill the CRC-16 field with 0x0000 before CRC-16 calculate. Then fill the calculated result back into the CRC-16 field.

- CmdID

  Identify which command the package is.

- Data

  Data segment. If not parameter exist, this field can be NULL.

**Note:** The field of CmdID and Data should be encrypted by AES-128.

## CRC-16 verify

The detailed configuration is as follows:

<table>
	<tr>
        <td colspan="2"><strong>CRC-16 cpnfiguration parameter</td>
	</tr>
    <tr>
	    <td>Name</td>
        <td>"XMODEM", also known as "ZMODEM", "CRC-16/ACORN"</td>
	</tr>
    <tr>
	    <td>Width</td>
        <td>16 bit</td>
	</tr>
    <tr>
	    <td>Poly</td>
        <td>1021 (That is actually x^16 + x^12 + x^5 + 1)</td>
	</tr>
    <tr>
	    <td>Initialization</td>
        <td>0000</td>
	</tr>
    <tr>
	    <td>Reflect Input byte</td>
        <td>False</td>
	</tr>
    <tr>
	    <td>Reflect Output CRC</td>
        <td>False</td>
	</tr>
    <tr>
	    <td>Xor constant to output CRC</td>
        <td>0000</td>
	</tr>
</table>



## AES-128 encryption

AES128 symmetric encryption uses the **CBC method**, which first divides the plaintext into several small segments, and then performs XOR operations on each segment with the initial block or the previous ciphertext segment before encrypting it with the key.

<table>
	<tr>
        <td colspan="2"><strong>AES-128 encryption parameter</td>
	</tr>
    <tr>
	    <td>model</td>
        <td>CBC</td>
	</tr>
    <tr>
	    <td>Width</td>
        <td>128 bit</td>
	</tr>
    <tr>
	    <td>IV</td>
        <td>"0000000000000000"</td>
	</tr>
    <tr>
	    <td>Fill the way</td>
        <td>PKCS7Padding</td>
	</tr>
    <tr>
	    <td>Key</td>
        <td>"goodlife--00XXXX"<br /><strong>Note:</strong><br / >BLE MAC in uppercase of devices without the ':' symbol calculate by CRC-16, and then the result transform to in uppercase HEX string is  [XXXX].</td>
	</tr>
</table>



## BLE API

The data of the BLE API needs to be filled in the **CmdID and Data** segments of the package format. The BLE API input parameter and output parameter  adopts **JSON** format.

- For command

  - Input parameter does not exist
  
    <table>
    	<tr>
            <td></th>
            <td><strong>CmdID</th>
            <td><strong>Data</th>
    	</tr>
        <tr>
            <td><strong>description</th>
    	    <td>CmdID</td>
            <td>NULL</td>
    	</tr>
        <tr>
            <td><strong>example</th>
            <td>0x01</td>
            <td>NULL</td>
    	</tr>
    </table>
  
  - Input parameter exist
  
    <table>
    	<tr>
            <td></th>
            <td><strong>CmdID</th>
            <td colspan="2"><strong>Data</th>
    	</tr>
        <tr>
            <td><strong>description</th>
    	    <td>CmdID</td>
            <td>Input paramete</td>
            <td>\n</td>
    	</tr>
        <tr>
            <td><strong>example</th>
            <td>0x08</td>
            <td>(Json format transform to hex)</td>
            <td>0x0a</td>
    	</tr>
    </table>
  
    

- For respond

  <table>
  	<tr>
          <td></th>
          <td><strong>CmdID</th>
          <td colspan="2"><strong>Data</th>
  	</tr>
      <tr>
          <td><strong>description</td>
  	    <td>CmdID</td>
          <td>\n</td>
          <td>Output paramete</td>
  	</tr>
      <tr>
          <td><strong>example</td>
  	    <td>0x01</td>
          <td>0x0a</td>
          <td>(Json format transform to hex)</td>
  	</tr>
  </table>



### CmdID list

| CmdID | Cmd Name                                                  | Require input parameter | description                                                  |
| ----- | --------------------------------------------------------- | ----------------------- | ------------------------------------------------------------ |
| 0x01  | [gl_check_initialized](#gl_check_initialized)             | N                       | Get the device initialization status                         |
| 0x02  | [gl_set_init_admin_password](#gl_set_init_admin_password) | Y                       | Initialize web login password                                |
| 0x03  | [gl_eth_get_status](#gl_eth_get_status)                   | N                       | Get the current status of Ethernet                           |
| 0x04  | [gl_eth_get_config](#gl_eth_get_config)                   | N                       | Get Ethernet configuration                                   |
| 0x05  | [gl_eth_set_config](#gl_eth_set_config)                   | Y                       | Set Ethernet configuration                                   |
| 0x06  | [gl_wifi_get_status](#gl_wifi_get_status)                 | N                       | Get the current status of WiFi                               |
| 0x07  | [gl_wifi_stop](#gl_wifi_stop)                             | N                       | Close the WiFi                                               |
| 0x08  | [gl_wifi_start](#gl_wifi_start)                           | Y                       | Start connect to specified WiFi                              |
| 0x09  | [gl_wifi_get_save_wifi](#gl_wifi_get_save_wifi)           | N                       | Obtain a list of configured WiFi, with a maximum of 3 saved  |
| 0x0a  | [gl_wifi_delete_save_wifi](#gl_wifi_delete_save_wifi)     | Y                       | Delete WiFi configuration in saved wifi list                 |
| 0x0b  | [gl_wifi_scan](#gl_wifi_scan)                             | N                       | Scan the current WiFi environment, obtain a list of WiFi information |
| 0x0c  | [gl_wan_failover_get_config](#gl_wan_failover_get_config) | N                       | Obtain the current WAN failover configuration                |
| 0x0d  | [gl_wan_failover_set_config](#gl_wan_failover_set_config) | Y                       | Set the current WAN failover configuration                   |
| 0x0e  | [gl_set_admin_pwd](#gl_set_admin_pwd)                     | Y                       | Change web login password                                    |
| 0x0f  | [gl_sys_reset](#gl_sys_reset)                             | N                       | Reset the device to factory                                  |
| 0x10  | [gl_sys_restart](#gl_sys_restart)                         | N                       | Restart the device                                           |



### INIT

#### <span id="gl_check_initialized">gl_check_initialized</span>

- CmdID: 0x01

- Function description: Get the device initialization status

- Input parameter

  None

- Output parameter

  | field parameters  | required  | parameter type | description         |
  | ----------------- | --------- | -------------- | ------------------- |
  | firmware_category | mandatory | string         | Firmware type: "2c" |
  | firmware_version  | mandatory | string         | Firmware version    |
  | hostname          | mandatory | string         | Device Host Name    |
  | build_time        | mandatory | string         | Firmware build time |
  | initialized       | mandatory | boolean        | Whether initialized |
  | mac               | mandatory | string         | device basic mac    |
  | model             | mandatory | string         | device model        |
  | code              | mandatory | number         | Error code：        |
  | err_msg           | optional  | string         | Error message       |

#### <span id="gl_set_init_admin_password">gl_set_init_admin_password</span>

- CmdID: 0x02

- Function description: Initialize web login password

- Input parameter

  | field parameters | required  | parameter type | description                           |
  | ---------------- | --------- | -------------- | ------------------------------------- |
  | password         | mandatory | string         | password for web login, range [10,32] |

- Output parameter

  | field parameters | required  | parameter type | description   |
  | ---------------- | --------- | -------------- | ------------- |
  | code             | mandatory | number         | Error code    |
  | err_msg          | optional  | string         | Error message |

### Ethernet

#### <span id="gl_eth_get_status">gl_eth_get_status</span>

- CmdID: 0x03

- Function description: Get the current status of Ethernet

- Input parameter

  None

- Output parameter

  | field parameters | required  | parameter type | description                                                  |
  | ---------------- | --------- | -------------- | ------------------------------------------------------------ |
  | status           | mandatory | number         | Connection status<br />0: Not connected <br />1: Successfully connected <br />2: Connecting <br />3: Physical device not connected |
  | protocol         | mandatory | string         | Networking methods<br />“dhcp” or “static”                   |
  | ipv4             | optional  | object         | IPv4 related status, only available after connection         |
  | ipv4.ip          | mandatory | string         | ipv4 address                                                 |
  | ipv4.gateway     | mandatory | string         | ipv4 gateway                                                 |
  | ipv6             | optional  | object         | IPv6 related status, only available after connection         |
  | ipv6.ip          | mandatory | string         | ipv6 address                                                 |
  | code             | mandatory | number         | Error code：                                                 |
  | err_msg          | optional  | string         | Error message                                                |

#### <span id="gl_eth_get_config">gl_eth_get_config</span>

- CmdID: 0x04

- Function description: Obtain Ethernet configuration

- Input parameter

  None

- Output parameter

  | field parameters | required  | parameter type | description                                |
  | ---------------- | --------- | -------------- | ------------------------------------------ |
  | protocol         | mandatory | string         | Networking methods<br />“dhcp” or “static” |
  | ipv4             | optional  | object         | ipv4 setting, effective when static        |
  | ipv4.ip          | mandatory | string         | Static IPv4 address                        |
  | ipv4.netmask     | mandatory | string         | Static ipv4 network mask                   |
  | ipv4.gateway     | mandatory | string         | Static ipv4 gateway                        |
  | code             | mandatory | number         | Error code：                               |
  | err_msg          | optional  | string         | Error message                              |

#### <span id="gl_eth_set_config">gl_eth_set_config</span>

- CmdID: 0x05

- Function description: Set Ethernet configuration

- Input parameter

  | field parameters | required  | parameter type | description                                |
  | ---------------- | --------- | -------------- | ------------------------------------------ |
  | protocol         | mandatory | string         | Networking methods<br />“dhcp” or “static” |
  | ipv4             | optional  | object         | ipv4 setting, effective when static        |
  | ipv4.ip          | optional  | string         | Static IPv4 address                        |
  | ipv4.netmask     | optional  | string         | Static ipv4 network mask                   |
  | ipv4.gateway     | optional  | string         | Static ipv4 gateway                        |

- Output parameter

  | field parameters | required  | parameter type | description   |
  | ---------------- | --------- | -------------- | ------------- |
  | code             | mandatory | number         | Error code    |
  | err_msg          | optional  | string         | Error message |

### Wifi

#### <span id="gl_wifi_get_status">gl_wifi_get_status</span>

- CmdID: 0x06

- Function description: Get the current status of WiFi

- Input parameter

  None

- Output parameter

  | field parameters | required  | parameter type | description                                                  |
  | ---------------- | --------- | -------------- | ------------------------------------------------------------ |
  | status           | mandatory | number         | Connection status<br />0: Idle; <br />1: Connecting; <br />2: Connected, <br />3: Connection failed |
  | fail_msg         | optional  | string         | Connection failure information                               |
  | ssid             | optional  | string         | Connected or currently connected WiFi ssid                   |
  | bssid            | optional  | string         | Connected wifi bssid                                         |
  | ipv4             | optional  | object         | IPv4 related status, only available after connection         |
  | ipv4.ip          | mandatory | string         | ipv4 address                                                 |
  | ipv4.gateway     | mandatory | string         | ipv4 gateway                                                 |
  | ipv6             | optional  | object         | IPv6 related status, only available after connection         |
  | ipv6.ip          | mandatory | string         | ipv6 address                                                 |
  | code             | mandatory | number         | Error code                                                   |
  | err_msg          | optional  | string         | Error message                                                |

#### <span id="gl_wifi_stop">gl_wifi_stop</span>

- CmdID: 0x07

- Function description: Close the WiFi

- Input parameter

  None

- Output parameter

  | field parameters | required  | parameter type | description   |
  | ---------------- | --------- | -------------- | ------------- |
  | code             | mandatory | number         | Error code    |
  | err_msg          | optional  | string         | Error message |

#### <span id="gl_wifi_start">gl_wifi_start</span>

- CmdID: 0x08

- Function description: Start connect to specified WiFi

- Input parameter

  | field parameters | required  | parameter type | description                                                  |
  | ---------------- | --------- | -------------- | ------------------------------------------------------------ |
  | enable_wifi_save | mandatory | boolean        | Whether save this configuration when connecting to WiFi      |
  | protocol         | mandatory | string         | Networking methods<br />“dhcp” or “static”                   |
  | ipv4             | optional  | object         | ipv4 setting, effective when static                          |
  | ipv4.ip          | optional  | string         | Static IPv4 address                                          |
  | ipv4.netmask     | optional  | string         | Static ipv4 network mask                                     |
  | ipv4.gateway     | optional  | string         | Static ipv4 gateway                                          |
  | ssid             | mandatory | string         | wifi ssid                                                    |
  | pwd              | mandatory | string         | wifi password                                                |
  | lock_bssid       | mandatory | boolean        | Whether specify an AP to connect to the specified bssid      |
  | bssid            | optional  | string         | wifi bssid                                                   |
  | auth_mode        | mandatory | number         | wifi authentication mode<br />0: open <br />1: WEP <br />2: WPA_PSK <br />3: WPA2_PSK  <br />4: WPA_WPA2_PSK <br />5: WPA2_ENTERPRISE (Not support)<br />6: WPA3_PSK <br />7: WPA2_WPA3_PSK <br />8: WAPI_PSK <br />9: OWE <br /> |

- Output parameter

  | field parameters | required  | parameter type | description   |
  | ---------------- | --------- | -------------- | ------------- |
  | code             | mandatory | number         | Error code    |
  | err_msg          | optional  | string         | Error message |

#### <span id="gl_wifi_get_save_wifi">gl_wifi_get_save_wifi</span>

- CmdID: 0x09

- Function description: Obtain a list of configured WiFi, with a maximum of 3 saved

- Input parameter

  None

- Output parameter

  | field parameters     | required  | parameter type | description                                |
  | -------------------- | --------- | -------------- | ------------------------------------------ |
  | list                 | mandatory | array          | wifi list                                  |
  | list[x].ssid         | optional  | string         | wifi ssid                                  |
  | list[x].bssid        | optional  | string         | wifi bssid                                 |
  | list[x].lock_bssid   | optional  | boolean        | whether lock the bssid                     |
  | list[x].auth_mode    | optional  | number         | wifi authentication mode                   |
  | list[x].pwd          | optional  | string         | wifi password                              |
  | list[x].protocol     | optional  | string         | Networking methods<br />“dhcp” or “static” |
  | list[x].ipv4         | optional  | object         | Static IPv4 configuration                  |
  | list[x].ipv4.ip      | optional  | string         | Static IPv4 address                        |
  | list[x].ipv4.netmask | optional  | string         | Static  ipv4 network mask                  |
  | list[x].ipv4.gateway | optional  | string         | Static   ipv4 gateway                      |
  | code                 | mandatory | number         | Error code：                               |
  | err_msg              | optional  | string         | Error message                              |

#### <span id="gl_wifi_delete_save_wifi">gl_wifi_delete_save_wifi</span>

- CmdID: 0x0a

- Function description: Delete WiFi configuration in saved wifi list

- Input parameter

  | field parameters | required  | parameter type | description                                                  |
  | ---------------- | --------- | -------------- | ------------------------------------------------------------ |
  | ssid             | mandatory | string         | which wifi ssid need to delete                               |
  | auth_mode        | mandatory | number         | need to delete wifi authentication mode<br />0: open <br />1: WEP <br />2: WPA_PSK <br />3: WPA2_PSK  <br />4: WPA_WPA2_PSK <br />5: WPA2_ENTERPRISE (Not support)<br />6: WPA3_PSK <br />7: WPA2_WPA3_PSK <br />8: WAPI_PSK <br />9: OWE <br /> |

- Output parameter

  | field parameters | required  | parameter type | description   |
  | ---------------- | --------- | -------------- | ------------- |
  | code             | mandatory | number         | Error code    |
  | err_msg          | optional  | string         | Error message |

#### <span id="gl_wifi_scan">gl_wifi_scan</span>

- CmdID: 0x0b

- Function description: Scan the current WiFi environment, obtain a list of WiFi information

- Input parameter

  None

- Output parameter

  | field parameters  | required  | parameter type | description                                                  |
  | ----------------- | --------- | -------------- | ------------------------------------------------------------ |
  | list              | mandatory | array          | wifi list                                                    |
  | list[x].ssid      | optional  | string         | wifi ssid                                                    |
  | list[x].bssid     | optional  | string         | wifi bssid                                                   |
  | list[x].auth_mode | optional  | number         | wifi authentication mode<br />0: open <br />1: WEP <br />2: WPA_PSK <br />3: WPA2_PSK  <br />4: WPA_WPA2_PSK <br />5: WPA2_ENTERPRISE (Not support)<br />6: WPA3_PSK <br />7: WPA2_WPA3_PSK <br />8: WAPI_PSK <br />9: OWE <br /> |
  | list[x].rssi      | optional  | number         | signal intensity RSSI                                        |
  | code              | mandatory | number         | Error code：                                                 |
  | err_msg           | optional  | string         | Error message                                                |

### Wan_failover

#### <span id="gl_wan_failover_get_config">gl_wan_failover_get_config</span>

- CmdID: 0x0c

- Function description: Obtain the current WAN failover configuration

- Input parameter

  None

- Output parameter

  | field parameters        | required  | parameter type | description                                                  |
  | ----------------------- | --------- | -------------- | ------------------------------------------------------------ |
  | eth                     | mandatory | object         | Ethernet failover configuration                              |
  | eth.enable              | mandatory | boolean        | Whether enable Ethernet check                                |
  | eth.check_interval      | mandatory | number         | eth check interval, unit is minutes                          |
  | eth.check_success_time  | mandatory | number         | eth change to Available Condition: Accumulated Success Times of IP Ping Set |
  | eth.check_fail_time     | mandatory | number         | eth change to fault condition: The cumulative number of ping failures for each set IP |
  | eth.check_ipv4          | mandatory | array          | eth IPv4 test address list, up to 3                          |
  | eth.check_ipv4[x]       | mandatory | string         | eth IPv4 test address                                        |
  | eth.check_ipv6          | mandatory | array          | eth IPv6 test address list, up to 3                          |
  | eth.check_ipv6[x]       | mandatory | string         | eth IPv6 test address                                        |
  | wifi                    | mandatory | object         | wifi Ethernet failover configuration                         |
  | wifi.enable             | mandatory | boolean        | Whether enable wifi check                                    |
  | wifi.check_interval     | mandatory | number         | wifi check interval, unit is minutes                         |
  | wifi.check_success_time | mandatory | number         | wifi change to Available Condition: Accumulated Success Times of IP Ping Set |
  | wifi.check_fail_time    | mandatory | number         | wifi change to fault condition: The cumulative number of ping failures for each set IP |
  | wifi.check_ipv4         | mandatory | array          | wifi IPv4 test address list, up to 3                         |
  | wifi.check_ipv4[x]      | mandatory | string         | wifi IPv4 test address                                       |
  | wifi.check_ipv6         | mandatory | array          | wifi IPv6 test address list, up to 3                         |
  | wifi.check_ipv6[x]      | mandatory | string         | wifi IPv6 test address                                       |
  | priority                | mandatory | object         | Priority configuration                                       |
  | priority.eth            | mandatory | number         | eth priority, the smaller the number, the higher the priority |
  | priority.wifi           | mandatory | number         | wifi priority, the smaller the number, the higher the priority |
  | code                    | mandatory | number         | Error code：                                                 |
  | err_msg                 | optional  | string         | Error message                                                |

#### <span id="gl_wan_failover_set_config">gl_wan_failover_set_config</span>

- CmdID: 0x0d

- Function description: Set the current WAN failover configuration

- Input parameter

  | field parameters   | required  | parameter type | description                          |
  | ------------------ | --------- | -------------- | ------------------------------------ |
  | eth                | mandatory | object         | Ethernet failover configuration      |
  | eth.enable         | mandatory | boolean        | Whether enable Ethernet check        |
  | eth.check_ipv4     | mandatory | array          | eth IPv4 test address list, up to 3  |
  | eth.check_ipv4[x]  | mandatory | string         | eth IPv4 test address                |
  | eth.check_ipv6     | mandatory | array          | eth IPv6 test address list, up to 3  |
  | eth.check_ipv6[x]  | mandatory | string         | eth IPv6 test address                |
  | wifi               | mandatory | object         | wifi Ethernet failover configuration |
  | wifi.enable        | mandatory | boolean        | Whether enable wifi check            |
  | wifi.check_ipv4    | mandatory | array          | wifi IPv4 test address list, up to 3 |
  | wifi.check_ipv4[x] | mandatory | string         | wifi IPv4 test address               |
  | wifi.check_ipv6    | mandatory | array          | wifi IPv6 test address list, up to 3 |
  | wifi.check_ipv6[x] | mandatory | string         | wifi IPv6 test address               |

- Output parameter

  | field parameters | required  | parameter type | description   |
  | ---------------- | --------- | -------------- | ------------- |
  | code             | mandatory | number         | Error code    |
  | err_msg          | optional  | string         | Error message |

### System

#### <span id="gl_set_admin_pwd">gl_set_admin_pwd</span>

- CmdID: 0x0e

- Function description: Change web login password

- Input parameter

  | field parameters | required  | parameter type | description               |
  | ---------------- | --------- | -------------- | ------------------------- |
  | username         | mandatory | string         | User name, must be 'root' |
  | old_pwd          | mandatory | string         | Old password              |
  | new_pwd          | mandatory | string         | New password              |

- Output parameter

  | field parameters | required  | parameter type | description   |
  | ---------------- | --------- | -------------- | ------------- |
  | code             | mandatory | number         | Error code    |
  | err_msg          | optional  | string         | Error message |

#### <span id="gl_sys_reset">gl_sys_reset</span>

- CmdID: 0x0f

- Function description: Reset the device to factory

- Input parameter

  None

- Output parameter

  | field parameters | required  | parameter type | description   |
  | ---------------- | --------- | -------------- | ------------- |
  | code             | mandatory | number         | Error code    |
  | err_msg          | optional  | string         | Error message |

#### <span id="gl_sys_restart">gl_sys_restart</span>

- CmdID: 0x10

- Function description: Restart the device

- Input parameter

  None

- Output parameter

  | field parameters | required  | parameter type | description   |
  | ---------------- | --------- | -------------- | ------------- |
  | code             | mandatory | number         | Error code    |
  | err_msg          | optional  | string         | Error message |















