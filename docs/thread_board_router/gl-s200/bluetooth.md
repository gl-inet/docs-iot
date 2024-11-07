# Bluetooth

## Bluetooth Devices

On the Bluetooth devices page you can turn the current Bluetooth function on/off and modify the Bluetooth scanning settings.

### Scan Settings

![ble-scan-settings](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/ble-scan-settings.png)

- **Scan type**: switching between **active** or **passive** scanning.
- **Scan Interval Time**: the interval between the start times of two consecutive scan windows.
- **Scan Window Time**: the width of time to perform a scan.
- **PHY**: If coded phy is selected, traditional broadcast packets cannot be scanned.

Click on **Apply** to complete the setup of Bluetooth scanning.

## Bluetooth Scanning Mode

The S200 offers three scanning modes: Legacy Mode, Extended Mode and Synchronize Mode. In Legacy Mode and Extended Mode, you can custom configure filters to filter the scanned Bluetooth data. If you change one of these configurations, click on this button to make the current configuration take effect.

![ble-scan-mode](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/ble-scan-mode.png)

RSSI Threshold：If you set the threshold, the gateway will only report data from devices whose signal strength is greater than the value.

MAC Filters：Click on the settings icon.If the switch is on, the configuration in the MAC filter will take effect. If the switch is off, the configuration in the filter will be disabled.MAC filter input rules are as follows.

- Case insensitive;
- Several MAC addresses distinguished by line feeds;
- Single MAC addresses support splitting by the character ':' and the character '-' ;
- Example of mac to be matched:112233445566
    - Prefix matching(needs to start with ^,followed by 1~12 hexadecimal characters)
     e.g.^112233
    - Suffix matching(needs to end with \$,followed by 1~12 hexadecimal characters)
     e.g.445566$
    - Any position matching(limited to 1~12 hexadecimal characters)
     e.g.334455
    - Full match(Support for regular writing formats)
    e.g.112233445566/11:22:33:44:55:66/11-22-33-44-55-66

![mac-filter-set](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/mac-filter-set.png)

Raw Data Filters :If you click on the settings icon, the configuration of the raw data filter will take effect if the switch is on, and if the switch is off, the configuration in the filter will be disabled.
- The raw data filter supports all regular expressions and requires you to enter the data to be matched in hexadecimal format.
- If you need an exact match for the field you are entering, add "^" and "$" before and after the field, e.g. \^616263\$.

![raw-filter-set](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/raw-filter-set.png)

Synchronize up to 4 cycles of broadcasts simultaneously in Synchronize Mode

![Synchronize-mode-set](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/Synchronize-mode-set.png)

- Skip ：Maximum number of periodic advertising packets that can be skipped after successful reception.
- Sync Timeout：The maximum time allowed for successful reception, if this time is exceeded the sync will be lost.

Click on **Add Configuration** for local configuration.
![synchronize-setting](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/synchronize-setting.png)

- Address Type: Address type of the device to be synchronized
- Address:Address of the device to be synchronized
- SID：Advertising set identifiers

### Broadcast Packets

After setting the Bluetooth scan settings correctly,click on the Apply button and you will see a list of scanned Bluetooth radio data appear below. You can refresh the list at any time by clicking the Refresh button.

![broadcast-packets2](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/broadcast-packets2.png)

- **RSSI**: the wireless signal strength of this broadcast packet.
- **Device Name**: the data segment of this broadcast packet with an AD Type of 0x09, or Unknow if it does not exist.
- **MAC**: the MAC address of the source of this broadcast.
- **Type**: Types of Bluetooth packets as defined by the Bluetooth SIG。
- **Raw Data**: the original data of this broadcast packet.
- **TX Power**:Transmitting power.

If you need to see the details of a broadcast packet, please click on it. We provide two ways of presenting the data.

- **Structured data presentation**: parsing the broadcast packet data according to the AD structure defined by the Bluetooth Alliance, splitting and parsing the data of the individual AD segments.

    ![bp-structured-data-presentation2](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/bp-structured-data-presentation2.png)

- **Raw data presentation**: parsing of broadcast packet data according to the AD structure defined by the Bluetooth Alliance, splitting but not parsing out the raw data of individual AD segments.

## Bluetooth Remote Manage

On the Bluetooth Remote Management page you can choose to turn remote management on/off and modify the relevant remote server configuration.

![bluetooth-remote-manage](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/bluetooth-remote-manage.png)

We provide two methods of communication to the server: MQTT and HTTP.

### MQTT

![mqtt-settings](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/mqtt-settings.png)

- **Host**：server address, either a domain name or an IP address;
- **Port**：server port;
- **Enable TLS**：whether to enable TLS configuration;
- **Username**：the MQTT client username;
- **Password**：the MQTT client password;
- **Topic**
    - **Report**: the gateway will use this topic to push the scanned Bluetooth data to the MQTT Broker;
    - **Command**: the gateway will subscribe to the topic to receive control commands issued by the remote server;
    - **Response**: the gateway will use the topic to send the command's response or execution result in response to the remote server.

If you need to enable TLS configuration, please click on the **Enable TLS** button and proceed to configure your TLS parameters.

![mqtt-tls](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/mqtt-tls.png)

- **Encryption Mode**：Encryption mode with the server side, either one-way or two-way encryption；

    ![mqtt-tls-encryption](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/mqtt-tls-encryption.png)

- **CA Certificate**：a CA root certificate file must be uploaded when TLS encryption is enabled；
  
    - You can copy the contents of the relevant certificate directly into the input box or click the **Upload** button to upload a file from your device.
- **Client Cerificate**：a client certificate file must be uploaded when TLS bidirectional encryption is enabled；
  
    - You can copy the contents of the relevant certificate directly into the input box or click the **Upload** button to upload a file from your device.
- **Client Private Key**：a client key file must be uploaded when TLS bidirectional encryption is enabled；
  
    - You can copy the contents of the relevant certificate directly into the input box or click the **Upload** button to upload a file from your device.
- **Password of Key**：optional setting, password for encryption the client private key.

If you also need to set up more advanced MQTT options, you can click on **Advance Settings**.

![mqtt-advance](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/mqtt-advance.png)

- **Client ID**：the client ID used by the gateway to connect to the server；
- **QoS Level**：QoS level of all topics, default is 0；
- **Keep Alive Interval**：the heartbeat interval when the gateway connects to the server, default is 60 seconds.

### HTTP

![http-settings](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/http-settings.png)
- **Report Url**：link to data reporting;
- **Authentication Type**：set the authentication method for http, currently choose between None or Basic authentication.

    - If **Basic** is selected, the following configuration needs to be entered according to the server settings.

        ![http-basic](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/http-basic.png)

        - **Username**: the HTTP authentication username
        - **Password**: the HTTP authentication password

## Bluetooth Report

On the Bluetooth report page, you can set the relevant parameters in it.

### Base

![ble-report](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/ble-report.png)

- **Report Interval**：the interval in seconds for the gateway to report data to the server;
- **Data Format**：the data format reported by the gateway to the server, currently only Json format is supported;
- **Enable Broadcast Data Report**：If the option is enabled, each reported data will include complete broadcast packet data; otherwise, each reported data will only include the device MAC address and RSSI.

## Bluetooth Settings Backup/Restore

### Backup

You can export all Bluetooth-related settings on the page, including scan, connection, remote manage, report, data definition.

![backup](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/backup.png)

If you would like to export the SSL certificate associated with the server connection configured on the device, please tick the "**Include SSL certificate**" option.

### Restore

You can import a Bluetooth configuration that you have previously backed up or exported from another machine on the Bluetooth configuration restore page.

![restore](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/restore.png)

---

Still have questions? Visit our [Community Forum](https://forum.gl-inet.com){target="_blank"}.
