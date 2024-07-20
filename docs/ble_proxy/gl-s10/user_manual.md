# GL-S10 User Manual 

|Version|Date|Commit|
|:----:|:----:|:----:|
|V2.0.3|2021-12-17|-|

## General Product Introduction
### Product introduction

The GL-S10 is an IoT gateway device that supports BLE and Wi-Fi, providing a cost-effective solution for transmitting BLE broadcast data to the cloud. BLE supports GAP and GATT certification and can be used as either Master or Slave to connect and communicate with other BLE devices. GL-S10 can use Wi-Fi as a Station to connect to a parent route or can connect to the Internet through a WAN port. It has a built-in standard MQTT Client that can connect to any standard MQTT Servers to forward incoming BLE messages to the cloud server. 

The GL-S10 is ideally deployed in warehouses, shopping malls, airports, exhibition halls, tourist attractions and other scenarios for personnel management, asset management, environmental monitoring, indoor navigation, etc. 

### Product feature

- Runs on Dual-core Xtensa® 32-bit LX6 microprocessor, supports BLE, Wi-Fi, and Ethernet 

- BLE supports BLE 4.2 Certification 

- BLE communication distance is measured up to 80m (in an open and non-interference environment) 

- Supports multiple encryption methods 

- Supports upgrading firmware via OTA and local serial port 

- Supports MQTT and integrating to multiple server platforms 

- Includes application for configuration with customized connection to Wi-Fi and MQTT servers 

- Supports 802.3at/af standard POE input power 

### Technical specification

|  Project   | Description  |
|  ----  | ----  |
|  CPU   | ESP32-DOWD <br> Dual-core Xtensa ® 32-bit LX6 microprocessor  |
|  Nor-Flash   | 4MB |
|  RAM    | SRAM 520KB + PSRAM 8MB  |
|  BLE    | Supports BLE 4.2 Certification <br> Coverage of 80m (in an open and non-interference environment) <br> Receiving sensitivity - 97dBm   |
|  WiFi    | 802.11b/g/n <br> Coverage of 80m (in an open and non-interference environment). <br> Transmitting power 11n: 13dBm; 11b: 18.5dBm <br> Speed 150Mbps   |
|  WAN    | 1 Megabit Ethernet port   |
|  Button   | 1 Reset button <br> Configuration mode, Resetting and OTA upgrading can be accessed by pressing the button   |
|  LED    | 3 LED lights: <br> Power, BLE and Network Indicator Lights   |
|  Power Supply    | Supports 1x Micro USB, 5V/1A input <br> Supports 802.3at/af standard POE input power <br> **Note:** Charging with both methods simultaneously may cause damage to the device.   |
|  Power Consumption    | Normal operations: < 0.5W <br> Operating at full capacity: < 1.5W   |
|  Shell Size    | 57 * 57 * 25mm(L * M * H)   |
|  Shell Material    | ABS   |
|  Antenna Type    | External antenna   |
|  Working Temperature    | 0~40°C   |
|  Storage Temperature    | -20~70°C   |
|  Working humidity    | 5% ~ 90%, no condensation   |
|  Storage humidity    | 5% ~ 95%, no condensation   |

### Package list 

|  Project   | Quantity   |
|  ----  | ----  |
|  GL-S10 Gateway    | 1   |
|  BLE Beacon (optional accessory)     | 1  |
|  External Antenna     | 1  |
|  USB Power Cord     | 1  |
|  User Manual    | 1   |

## Device and APP Installation 
### Device installation

Take out the product from its package and attach the external antenna as shown below. 
<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic1.png"></center>
<center>Figure 1</center>

**Note:** 

- Avoid plugging in the PoE power supply and 5V power supply simultaneously, it may cause damage to the device.  

- Do not connect to any power supply (including PoE & 5V) before installing the antenna. 


### Button function list

|  Pairing mode    | Reset to factory setting    | OTA upgrade  |
|  ----  | ----  | ----  |
| When it is not connected to any power supply, press, and hold the "Reset" button while plugging in the power cord.   | While pressing the "Reset" button, turn on the power, press and hold the "Reset" button for 5 seconds and release.    | While pressing the "Reset" button, turn on the power, press and hold the "Reset" button for 10 seconds and release. |

### LED description 

|  LED Light    |  Status    |  Reset to factory setting    |  Enter OTA mode    | OTA upgrade process    |
|  ----  | ----  | ----  | ----  | ----  |
|  Power <br> (Green light)   | Light on: Device is on <br> Light off: Device is off  | Blinks slowly  | Blinks fast   | Blinks alternatively  |
|  BLE <br> (Green light)   | Light blinks: Paring Mode(Disconnected) <br> Light on: Paring Mode(Connected) <br> Light off: Scanning Mode  | Blinks slowly  | Blinks fast   | Blinks alternatively  |
|  Network <br> (White light)   | Light blinks: Wi-Fi connected <br> Light on: Ethernet connected <br> Light off: Not connected   | Blinks slowly  | Blinks fast   | Blinks alternatively  |

### BLE beacon

BLE Beacon is an optional accessory. User can purchase gateway kit with beacon for a quick Demo. The beacon can also be used for indoor positioning, asset management and other scenarios. The rotating base makes the device easy to disassemble; and the base has 3M adhesive which makes it easy to fix in place. 

After turning on the BLE switch at the bottom of the beacon, the beacon will broadcast BLE signals at an interval of 300ms. Select the filter function of GL-S10 and identify the devices by the BLE MAC address printed at the bottom of the beacon. 

<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic2.png"></center>
<center>Figure 2</center>

### APP installation

Download and install GL-S10 Tool App on your phone, turn on the Bluetooth function of your phone (For Android phone users, please turn on Bluetooth and GPS), and follow the instructions in this user manual to configure your GL-S10.

<figure>
  <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic3.png", width = 300>
  <figcaption>Figure 3</figcaption>
</figure>


## App Configuration 
### Set configuration mode 

Before using the app for configuration, set GL-S10 into its paring mode by pressing the Reset button of GL-S10 when the power is off, then turn on the power. Release the button when you see the BLE indicator in the middle flashes, and your GL-S10 will enter its pairing mode. 

### App language

Start the app and select the app language, you can choose between English and Simplified Chinese.

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic4.png", width = 300>
      <figcaption>Figure 4</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic5.png", width = 300>
      <figcaption>Figure 5</figcaption>
    </figure>
  </div>
</div>

### Connecting your GL-S10 

Click the "scan" button in the upper right corner. The scanning result automatically filters out non-GL-S10 devices. If more than one GL-S10 are scanned, select the devices you want to connect according to the BLE MAC address on the label at the bottom of your GL-S10 shell (as shown below). 

**Note:** WAN MAC address is BLE MAC address minus 1, WiFi MAC address is BLE MAC address minus 2

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic6.png", width = 300>
      <figcaption>Figure 6</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic7.png", width = 300>
      <figcaption>Figure 7</figcaption>
    </figure>
  </div>
</div>

### Home page

Select a GL-S10 device and enter the "Manage Device" interface as shown below 
<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic8.png", width = 300></center>
<center>Figure 8</center>

### Device Info

You can click to view the details of the device as shown below

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic9.png", width = 300>
      <figcaption>Figure 9</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic10.png", width = 300>
      <figcaption>Figure 10</figcaption>
    </figure>
  </div>
</div>

### Protocal configuration

To setup uplink connection using a Protocal on the WAN port, click "Manage Device" > "Protocal" > "Protocal". You can configure "DHCP" and "Static IP" mode, then click "Done" to save the settings as shown below.

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic11.png", width = 300>
      <figcaption>Figure 11</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic12.png", width = 300>
      <figcaption>Figure 12</figcaption>
    </figure>
  </div>
</div>

### Wi-Fi configuration 

To connect to a primary gateway, click "Manage Device" > "WiFi" > "Connect WiFi" > "Scan WiFi", and select your WiFi SSID. You can also select "None", "WPA2" or "WPA2 Enterprise" mode. Click "Done" on the upper right corner to confirm the setting as shown below. If you want to upgrade your WPA2 ENTERPRISE certificate, click “Upgrade certificate”. 
<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic13.png", width = 300>
      <figcaption>Figure 13</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic14.png", width = 300>
      <figcaption>Figure 14</figcaption>
    </figure>
  </div>
</div>

<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic15.png", width = 300></center>
<center>Figure 15</center>

### MQTT Configuration

To configure MQTT, click "Manage Device" > "MQTT Server". Enter the address of your MQTT broker in the "Host" field, fill in the port number, username, and password. The "TLS" selection switches between TSL/SSL link and the TCP link. Enter a SUBSCRIBE message in the "Command" field and a SUBACK acknowledgement message in the "Respond Topic" field. You can also click "Update Certificate" below to update the MQTT encryption certificate. Click "Done" on the upper right corner to save the settings.

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic16.png", width = 300>
      <figcaption>Figure 16</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic17.png", width = 300>
      <figcaption>Figure 17</figcaption>
    </figure>
  </div>
</div>

### Report Configuration

Click "Report Configuration" in the interface of "Manage Device" to enter the interface of "Report Configuration". 

Click "Report interval", "Topic", "Bluetooth RSSI threshold filtering" to enter the relevant information configuration interface, fill in the configuration information and click the upper left corner to return to the previous page to save your settings.  

Click “BLE MAC Filter”, “Complete Local Name Filter”, or “Manufacturer Specific Data Filter” at the bottom and enter the relevant information to activate the filter. 

**Note:** Filter Rules Instructions

- MAC Filter: The value range is 0~f, the characters are lowercase, and colons must be included; the string should be full match.

- Complete Local Name Filter: the characters are case-sensitive,the string should be full match; for any unsure information, please download the nFR Connect software to check.

- Manufacture Specific Data Filter: The value range is 0~f/F, the characters are case-sensitive and should be matched according to regular expressions.

If you purchased a gateway kit with the BLE Beacon, you also have the option to set BLE MAC filtering rules for the beacon in the app by entering the BLE MAC address information printed on the bottom of the beacon. 

Click "Add New Rule" or "Remove" to edit the filter settings and click "Done" on the upper right corner to save the settings. 

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic18.png", width = 300>
      <figcaption>Figure 18</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic19.png", width = 300>
      <figcaption>Figure 19</figcaption>
    </figure>
  </div>
</div>

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic20.png", width = 300>
      <figcaption>Figure 20</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic21.png", width = 300>
      <figcaption>Figure 21</figcaption>
    </figure>
  </div>
</div>

### Data & Time configuration

Click "Manage Device" > "Date & Time". Select your time zone, fill in the SNTP service address and click the upper left corner to return to the previous page to save your settings, as shown below. 

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic22.png", width = 300>
      <figcaption>Figure 22</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic23.png", width = 300>
      <figcaption>Figure 23</figcaption>
    </figure>
  </div>
</div>

### Auto Reboot configuration

Click "Manage Device" > "Auto Reboot". You can schedule a time to reboot GL-S10 on a daily-basis. Click the upper left corner to return to the previous page to save your settings, as shown below. 

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic24.png", width = 300>
      <figcaption>Figure 24</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic25.png", width = 300>
      <figcaption>Figure 25</figcaption>
    </figure>
  </div>
</div>

### OTA upgrade

Click "Manage Device" > "Upgrade OTA". Under "OTA URL", enter the http server address and click "Save" on the upper right corner. Click "Upgrade OTA" to save the URL path and initiate the upgrade. Click "Update Certificate" to update the OTA encryption certificate as shown below. 

Please keep your GL-S10 connected to the internet and do NOT turn off the power during the OTA upgrade. After the OTA upgrade is completed, your GL-S10 will automatically enter Scanning mode, and your app will not be able to search for GL-S10.  

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic26.png", width = 300>
      <figcaption>Figure 26</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic27.png", width = 300>
      <figcaption>Figure 27</figcaption>
    </figure>
  </div>
</div>

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic28.png", width = 300>
      <figcaption>Figure 28</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic29.png", width = 300>
      <figcaption>Figure 29</figcaption>
    </figure>
  </div>
</div>

### Reboot device

Click "Manage Device" > "Reboot", and a pop-up window will ask for a reboot confirmation. The device will reboot after clicking "Sure". After rebooting, the device will automatically enter Scanning mode, and your app will not be able to search for GL-S10.

<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic30.png", width = 300></center>
<center>Figure 30</center>

### Reset device 

Click "Manage Device" > "Reset". A pop-up window will ask for a reset confirmation. When you click "Sure", all device configurations will be restored to the factory default settings. After resetting the device, it will automatically enter Scanning mode, and your app will be able to search for GL-S10.

<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic31.png", width = 300></center>
<center>Figure 31</center>

## MQTT Configuration

When the GL-S10 is connected to the MQTT server, you can also use the MQTT API to configure the GL-S10. 

You can configure MQTT using a third-party tool - MQTT X, downloadable from https://mqttx.app/. 

The default MQTT setting is configured to connect with the beta cloud platform. Enter the configuration for GL-S10 and MQTT X client to activate the connection. The beta cloud platform is for testing only and not for other usage. 

### Network Configuration

GL-S10 supports wired transmission and Wi-Fi for connecting to the router or gateway. The setting procedure can be found in section 3.6 Cable configuration and 3.7 Wi-Fi configuration. 

### MQTT X client configuration

Before doing the MQTT X client configuration, we need to configure the configuration of the MQTT server on S10 first. Find MQTT Server session in the S10 Tool APP.

Here we are using the test MQTT server: iot-s10-test.gl-inet.cn. And the Port is: 1884, so we need to set the Host in the following figure: iot-s10-test.gl-inet.cn. And set Port: 1884.

<div class="flex-container s10-user-manual">
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic32.png", width = 300>
      <figcaption>Figure 32</figcaption>
    </figure>
  </div>
  <div>
    <figure>
      <img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic33.png", width = 300>
      <figcaption>Figure 33</figcaption>
    </figure>
  </div>
</div>

On the windows version of the MQTT X client, start the MQTT X software and add a new connection. To configure the beta cloud platform, enter the URL address iot-s10-test.gl-inet.cn and port 1884. Click the upper right corner of the page to connect. A successful connection is shown below in Figure 33. 

<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic34.png", width = 800></center>
<center>Figure 34</center>
<br>
<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic35.png", width = 800></center>
<center>Figure 35</center>

### MQTT Message Editing and Communicating with S10

The default command topic for this firmware is GL-IoT/comTopic/{dev_MAC}, and the command reply topic is GL-IoT/rspTopic/{dev_MAC}. 

The BLE MAC address of the GL-S10 device we use in this example is: E8DB841E2B1E (The BLE MAC address is printed on the bottom of the device or in the app). 

In our testing, MQTT X sends data via GL-IoT/comTopic/E8DB841E2B1E and receives data from GL-S10 by subscribing to GL-IoT/rspTopic/E8DB841E2B1E. 

Below is a demo of how to set data (SET_DEV_MESSAGE) and obtain data from GL-S10 (GET_DEV_MESSAGE):

**Step 1:**
Subscribe to the GL-IoT/rspTopic/E8DB841E2B1E topic using MQTT X.   
<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic36.png", width = 800></center>
<center>Figure 36</center>

**Step 2:**
SET_WIFI_CONFIG

API Function: Configure SSID and PWD of WIFI or SSID, user name, user password of WIFI WPA2, and try to connect to the corresponding route. 

{

"jsonrpc": "2.0",

"method": "SET_WIFI_CONFIG",

"params": {

"type":0,

"ssid": "Test",

"pwd": "123456"

},

"id": 1

}

Here we use "Test" for the SSID  and "123456" for the user passward.

- When type is equal to 0, SSID, PASSWORD can be set.
- When type is equal to 1, SSID, USERNAME, USERPASSWORD can be set.
- SSID: route name, length 0 - 32 characters.
- PWD: route password, length 0 - 64 characters.
- USERNAME: User name, length 0 - 32 characters.
- USERPWD: User password, length 0 - 64 characters.

<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic37.png", width = 800></center>
<center>Figure 37</center>

Set data successfully:

<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic38.png", width = 800></center>
<center>Figure 38</center>

**Step 3:**
GET_WIFI_CONFIG

API Function: Get the SSID and PWD of WIFI or SSID, user name, user password of WIFI WPA2\

{

"jsonrpc" :   "2.0" ,

"method" :   "GET_WIFI_CONFIG" ,

"params" :   {

"type" : 0

},

"id" :   2

}

- When type is equal to 0, get SSID, PASSWORD.
- When type is equal to 1, get SSID, USERNAME, USERPASSWORD 

<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic39.png", width = 800></center>
<center>Figure 39</center>

Get data successfully:
<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic40.png", width = 800></center>
<center>Figure 40</center>

## BLE Data Uploading

After successfully establishing connection, GL-S10 automatically enters Scanning mode and scans for BLE signal during startup. If the MQTT server is connected, the BLE scan data will be packaged and uploaded to "GL-IoT/dataTopic/{dev_MAC}" topic in JSON format. ({dev_MAC} is the local BLE MAC address, in this example, the BLE MAC address of the GL-S10 device used is: E8DB841E2B1E). 

As shown above, the JSON fields have the following definitions

- MAC : Broadcast source address 
- rssi : Broadcast source signal strength 
- n : Broadcast source device name (this field will not appear if the broadcast source does not have a name) 
- ad : Broadcast data advData 
- ts : receive timestamp

If you purchased a gateway kit with a BLE Beacon and adds filtering rules for the beacon BLE MAC address according to section 3.9, the JSON information viewed here is the BLE information broadcast by the beacon. The beacons are placed at different distances from the GL-S10 gateway (distance up to the decimeter level), and the value of rssi (broadcast source signal strength) may fluctuate based on distance. 
<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic41.png", width = 800></center>
<center>Figure 41</center>

<center><img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/Pic42.png", width = 800></center>
<center>Figure 42</center>

## GL-S10 Config API

This chapter define the commands to configure the GL-S10 device using the MQTT method. Based on JSON_RPC 2.0 standard development, please follow the format. 
Command summary sheet

### Command summary sheet
| Command Code    | Command    |  Whether parameters are required    | Description   |
|  ----  | ----  | ----  | ----  |
|  0x01     | SET_WIFI_CONFIG | Y   | Set up Wi-Fi configuration   |
|  0x02     | GET_WIFI_CONFIG | N   | Get Wi-Fi configuration   |
|  0x03     | SET_NETWORK_CONFIG | Y   | Set static IP or dynamic IP    |
|  0x04     | GET_NETWORK_CONFIG | N   | Get static IP or dynamic IP    |
|  0x05     | GET_NETWORK_STATE | N   | Get the current network status    |
|  0x07     | SET_MQTT_PARAMS | Y   | Set MQTT URL    |
|  0x08    | GET_MQTT_PARAMS | N   | Get MQTT URL     |
|  0x0A     | SET_MQTT_TOPIC      | Y   | Set MQTT topic name     |
|  0x0B     | GET_MQTT_TOPIC      | N   | Get MQTT topic name     |
|  0x0C     | SET_MQTT_TI      | Y   | Set the MQTT data reporting time interval     |
|  0x0D     | GET_MQTT_TI      | N   | Get the MQTT data reporting time interval     |
|  0x0E     | SET_SNTP_TZ     | Y   | Set the SNTP server time zone     |
|  0x0F     | GET_SNTP_TZ     | N   | Get the SNTP server time zone     |
|  0x10     | SET_SNTP_SERVER      | Y    | Set the SNTP server     |
|  0x11     | GET_SNTP_SERVER      | N   | Get the SNTP server    |
|  0x12     | SET_AUTO_REBOOT      | Y   | Set auto reboot time    |
|  0x13     | GET_AUTO_REBOO     | N   | Get auto reboot time    |
|  0x14     | SET_MAC_FILTER     | Y   | Add and remove MAC filter table entries     |
|  0x15     | GET_MAC_FILTER      | Y   | Get MAC filter table entries    |
|  0x16     | SET_CLN_FILTER      | Y   | Add and remove BLE Complete Local Name filter table entries    |
|  0x17     | GET_CLN_FILTER     | N   | Get BLE Complete Local Name filter table entries     |
|  0x18     | SET_MSD_FILTER      | Y   | Add and remove Manufacturer Specific Data filter table entries       |
|  0x19     | GET_MSD_FILTER     | N  | Get Manufacturer Specific Data filter table entries     |
|  0x1A     | UPDATE_MQTT_CERT     | Y   | Update MQTT encryption certificates    |
|  0x1B     | UPDATE_WPA2_CERT      | Y   | Update Wi-Fi WPA2 encryption certificate     |
|  0x1C     | UPDATE_HTTPS_CERT     | Y   | Update HTTPS OTA encryption certificate    |
|  0x1D     | SET_OTA_URL      | Y   | Set the URL of the OTA server     |
|  0x1E     | GET_OTA_URL    | N   | Get the URL of the OTA server    |
|  0x1F     | OTA_STATUS      | N   | OTA upgrade status notification    |
|  0x20     | GET_DEV_STATUS     | N   | Get device status   |
|  0x21     | GET_DEV_MESSAGE    | N   | Get device message     |
|  0x22     | RESTART_DEV     | N   | Reboot device     |
|  0x23     | RESET_DEV     | N   | Reset device     |
|  0x24     | SET_BLE_RSSI_FILTER      | Y   | Set RSSI filter thresholds     |
|  0x25     | GET_BLE_RSSI_FILTER    | N   | Get RSSI filter thresholds    |
|  0x26     | GET_WiFi_AP_LIST      | N   | Get a list of surrounding Wi-Fi AP information   |
| 0x27 | SET_MQTT_CLIENT_ID | Y | Set mqtt client id |
| 0x28 | GET_MQTT_CLIENT_ID | N | Get mqtt client id |
| 0x29 | SET_BLE_SCAN_PARAMS | Y | Set ble scan param |
| 0x2A | GET_BLE_SCAN_PARAMS | N | Get ble scan param |

### Command detail
#### SET_WIFI_CONFIG

API function: 
Configure the WiFi’s SSID and password, or WiFi WPA2’s SSID, username and password, then connect to the router. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "SET_WIFI_CONFIG",
    "params": {
        "type": x,
        ......
    },
    "id": 1
}
```

<table style="width:100%">
  <tr>
    <th>ID</th>
    <th colspan="2">params</th>
  </tr>
  <tr>
    <td rowspan="3">0x01</td>
  </tr>
  <tr>
    <td>"params":{"type":0,"ssid":"x","pwd":"x"}</td>
  </tr>
  <tr>
    <td>"params":{"type":1,"ssid":"x","username":"x","userpwd":"x"}</td>
  </tr>
</table>

**Note:** 

- When "type" filed is equal to 0x00, "ssid" and "pwd" fileds are configurable. 
- When "type" filed is equal to 0x01, "ssid", "username", "userpwd" fileds are configurable. 
- ssid: router’s name, maximum length of 1-32 characters. 
- pwd: router’s password, maximum length of 8-64 characters. 
- username: username, maximum length of 1-32 characters. 
- userpwd: user password, maximum length 1-64 characters.



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 1
}

// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 1
}
```

**Note:** 

- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_WiFi_CONFIG

API Function: 

Get Wi-Fi SSID and PWD, or Wi-Fi WPA2 SSID, user name, user password 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "GET_WIFI_CONFIG",
    "params": {
        "type": x
    },
    "id": 2
}
```

**Note:**


- When "type" filed is equal to 0x00, get SSID, PASSWORD. 
- When "type" filed is equal to 0x01, get SSID, USERNAME, USERPASSWORD.



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "type": x,
        ......
    },
    "id": 2
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 2
}
```

<table style="width:100%">
  <tr>
    <th>ID</th>
    <th colspan="2">result</th>
  </tr>
  <tr>
    <td rowspan="3">0x02</td>
  </tr>
  <tr>
    <td>"result":{"type":0,"ssid":"x","pwd":"x"}</td>
  </tr>
  <tr>
    <td>"result":{"type":1,"ssid":"x","username":"x","userpwd":"x"}</td>
  </tr>
</table>

**Note:**

- When "type" filed is equal to 0x00, get SSID, PASSWORD. 
- When "type" filed is equal to 0x01, get SSID, USERNAME, USERPASSWORD. 
- ssid: router’s name, maximum length of 1-32 characters. 
- pwd: router’s password, maximum length of 8-64 characters. 
- username: username, length 1-32 characters. 
- userpwd: user password, length 1-64 characters.
- error: It is an object that will contain error codes and messages.



#### SET_NETWORK_CONFIG

API function: 

Set static IP or dynamic IP. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "SET_NETWORK_CONFIG",
    "params": {
        "isdhcp": "x",
        ......
    },
    "id": 3
}
```

<table style="width:100%">
  <tr>
    <th>ID</th>
    <th colspan="2">params</th>
  </tr>
  <tr>
    <td rowspan="3">0x03</td>
  </tr>
  <tr>
    <td>"params":{"isdhcp":1}</td>
  </tr>
  <tr>
    <td>"params":{"isdhcp":0,"ip":"x","netmask":"x","gw":"x"}</td>
  </tr>
</table>

**Note:**


- When "isdhcp" filed is equal to 0x00, the device is set to DHCP auto-get IP mode.  
- When "isdhcp" filed is equal to 0x01, the device is set to static IP mode, and IP, Netmask, Gw can be set. 
- ip: fixed length, xxx is a number between 0-255, format XXX.XXX.XXX.XXX. 
- netmask: fixed length, xxx is a number between 0-255, format XXX.XXX.XXX.XXX. 
- gw: fixed length, xxx is a number between 0-255, format XXX.XXX.XXX.XXX. 



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 3
}

// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 3
}
```

**Note:** 

- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_NETWORK_CONFIG

API Function: 

Get the network configuration of static IP or dynamic IP. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "GET_NETWORK_CONFIG",
    "id": 4
}
```



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "isdhcp": x,
        "ip": "x",
        "netmask": "x",
        "gw": "x"
    },
    "id": 4
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 4
}
```

**Note:**


- When "isdhcp" filed is equal to 0x00, it indicates that the device is in DHCP auto-assignment state, and the data behind is empty. 
- When "isdhcp" filed is equal to 0x01, it indicates that the device is in static IP allocation state, and available to receive IP, Netmask, and Gw. 
- ip: fixed length, xxx is a number from 0-255, format XXX.XXX.XXX. 
- netmask: fixed length, xxx is a number from 0-255, format XXX.XXX.XXX.XXX. 
- gw: fixed length, xxx is a number from 0-255, format XXX.XXX.XXX.XXX. 
- error: It is an object that will contain error codes and messages.



#### GET_NETWORK_STATE

API Function: 

Get the current network state: State, Mode, isDhcp , IP, SSID. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "GET_NETWORK_STATE",
    "id": 5
}
```



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "state": x,
        "mode": "x",
        "isdhcp": "x",
        "ip": "x",
        "ssid": "x"
    },
    "id": 5
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 5
}
```

**Note:**


- state: indicates the status of the connection (MQTT server connection), 0 means connected, 1 means disconnected, occupies one byte. 
- mode: indicates the connection mode, character '0' indicates connection via Wi-Fi, character '1' indicates connection via Ethernet cable, occupies one byte. 
- isdhcp: character '0' means it is automatically assigned, character '1' means it is not automatically assigned, occupies one byte. 
- ip: local IP address, xxx is a number between 0-255, format XXX.XXX.XXX.XXX. 
- ssid: SSID of the connected router, length 1-32 characters. 
- error: It is an object that will contain error codes and messages.



#### SET_MQTT_PARAMS

API function: 

Set MQTT Safety、Host、Port、Username、Password.

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "SET_MQTT_PARAMS",
    "params": {
        "safety": x,
        "host": "x",
        "port": x,
        "username": "x",
        "password": "x"
    },
    "id": 7
}
```

**Note:**

- safety: Indicates whether mqtt is connected through TSL/SSL, 0 means no, 1 means yes.

- host : Host name, length 7-128 characters

- port ：Host port, range 0-65535

- username : Username, length 0-32 characters

- password : User password, length 0-64 characters

  

Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 7
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 7
}
```

**Note:** 

- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_MQTT_PARAMS

API Function: 

Get MQTT Safety、Host、Port、Username、Password.

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "GET_MQTT_PARAMS",
    "id": 8
}
```



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "safety": x,
        "host": "x",
        "port": x,
        "username": "x",
        "password": "x"
    },
    "id": 8
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 8
}
```

**Note:**

- safety: Indicates whether mqtt is connected through TSL/SSL, 0 means no, 1 means yes.
- host : Host name, length 7-128 characters
- port ：Host port, range 0-65535
- username : Username, length 0-32 characters
- password : User password, length 0-64 characters
- error: It is an object that will contain error codes and messages.



#### SET_MQTT_TOPIC

API function: 

Configure comTopic, dataTopic and rspTopic topics. 

Data segment on reception. 

```json
{
    "jsonrpc": "2.0",
    "method": "SET_MQTT_TOPIC",
    "params": {
        "comtopic": "x",
        "datatopic": "x",
        "rsptopic": "x"
    },
    "id": 10
}
```

**Note:**


- comtopic: command for subscribing a topic, does not support Chinese, length 1-128 characters. 
- datatopic: publishing a topic, does not support Chinese, maximum length of 1-128 characters. 
- rsptopic: Unsuback a topic, does not support Chinese, maximum length of 1-128 characters. 



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 8
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 8
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_MQTT_TOPIC

API Function: 

Get comTopic, dataTopic and rspTopic topics. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "GET_MQTT_TOPIC",
    "id": 11
}
```



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "comtopic": "x",
        "datatopic": "x",
        "rsptopic": "x"
    },
    "id": 11
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 11
}
```

**Note:**


- comtopic: command for subscribing a topic, does not support Chinese, length 1-128 characters 
- datatopic: publishing a topic, does not support Chinese, maximum length of 1-128 characters 
- rsptopic: Unsuback a topic, does not support Chinese, maximum length of 1-128 characters
- error: It is an object that will contain error codes and messages.



#### SET_MQTT_TI

API Function: 

Set the MQTT data upload time interval. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "SET_MQTT_TI",
    "params": {
        "intervaltime": x
    },
    "id": 12
}
```

**Note:**


- intervaltime: MQTT data reporting time interval, 1s - 2147483647s.



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 12
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 12
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_MQTT_TI

API Function: 

Get the MQTT data upload interval. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "GET_MQTT_TI",
    "id": 13
}
```



Data segment at response: 
```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "intervaltime": "x"
    },
    "id": 13
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 13
}
```

**Note:**


- intervaltime: MQTT data reporting time interval, 1s –2147483647s.
- error: It is an object that will contain error codes and messages.



#### SET_SNTP_TZ

API function: 

Set the device time zone. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "SET_SNTP_TZ",
    "params": {
        "timezone": "x"
    },
    "id": 14
}
```

**Note:**


- timezone: Time zone format, UTC+X or UTC-X (X range 0-12), default Timezone = UTC+8. 



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 14
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 14
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_SNTP_TZ

API Function: 

Get the device time zone. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "GET_SNTP_TZ",
    "id": 15
}
```



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "timezone": "x"
    },
    "id": 15
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 15
}
```

**Note:**


- timezone: Time zone format, UTC+X or UTC-X (X range 0-12), default Timezone = UTC-8.
- error: It is an object that will contain error codes and messages.



#### SET_SNTP_SERVER

API function: 

Set the SNTP server address. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "SET_SNTP_SERVER",
    "params": {
        "serverurl": "x"
    },
    "id": 16
}
```

**Note:**


- serverurl: SNTP server URL setting, maximum length of 1-128 characters. 



Data segment at response:

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 16
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 16
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_SNTP_SERVER

API Function: 

Get the SNTP server address. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "GET_SNTP_SERVER",
    "id": 17
}
```



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "serverurl": "x"
    },
    "id": 17
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 17
}
```

**Note:**


- serverurl: SNTP server URL setting, maximum length of 1-128 characters.
- error: It is an object that will contain error codes and messages.



#### SET_AUTO_REBOOT

API Function: 

Set the auto restart time and switch status. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "SET_AUTO_REBOOT",
    "params": {
        "rststate": x,
        "rsttime": "x"
    },
    "id": 18
}
```

**Note:**


- rststate: indicates whether to turn on the daily restart, 0 means turn on, 1 means turn off, occupies one byte. 
- rsttime: daily restart time, format XX:XX 24 hours, range 00:00 - 23:59, occupies five bytes. 



Data segment at response:

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 18
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 18
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_AUTO_REBOOT

API Function: 

Get the auto restart time and switch status. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "GET_AUTO_REBOOT",
    "id": 19
}
```

**Note:**


- Data is equal to null. 



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "rststate": x,
        "rsttime": "x"
    },
    "id": 19
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 19
}
```

**Note:**


- rststate: indicates whether to turn on the daily restart, 0 means turn on, 1 means not turn on, takes up one byte. 
- rsttime: daily restart time, format XX:XX 24 hours, range 00:00 - 23:59, occupies five bytes.
- error: It is an object that will contain error codes and messages.



####  SET_MAC_FILTER

API Function: 

Add or remove MAC filter table entries. 

Data segment on reception.

```json
{
    "jsonrpc": "2.0",
    "method": "SET_MAC_FILTER",
    "params": {
        "mode": x,
        "mac": "x"
    },
    "id": 20
}
```

**Note:**


- mode: 0x00 is Add mode, which adds the MAC field to the MAC table of the device; 0x01 is Delete mode, which removes the MAC field from the MAC table. 
- mac: Format XX:XX:XX:XX:XX:XX, XX range [0-9a-fA-F].



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 20
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 20
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_MAC_FILTER

API Function: 

Get MAC filter table entries. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "GET_MAC_FILTER",
    "id": 21
}
```

**Note:**


- Data is equal to null. 



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": [
        "x",
        "x",
        ......
    ],
    "id": 21
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 21
}
```

**Note:**


- result:  It is a array, it will get all the mac in the MAC filter table, single format XX:XX:XX:XX:XX:XX, XX range [0-9a-fA-F].
- error: It is an object that will contain error codes and messages.



#### SET_CLN_FILTER

API Function: 

Adds or removes a BLE device name filter table entry. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "SET_CLN_FILTER",
    "params": {
        "mode": x,
        "cln": "x"
    },
    "id": 22
}
```

**Note:**


- mode: 0x00 is Add mode, which adds the AddCLN field to the device's BLE device name table; 0x01 is Delete mode, which removes the AddCLN field from the BLE device name table. 
- cln: Single device name, length 1-32 characters. 



Data segment at response:

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 22
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 22
}
```

**Note:**


- result: 0x00 represent execution success; 
- error: It is an object that will contain error codes and messages.



#### GET_CLN_FILTER

API Function: 

Get the BLE device name filter table entry. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "GET_CLN_FILTER",
    "id": 23
}
```

**Note:**


- Data is equal to null



Data segment at response:

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": [
        "x",
        "x",
        ......
    ],
    "id": 23
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 23
}
```

**Note:**


- result:  It is a array, it will get all the Complete Local Name in the CLN filter table.
- error: It is an object that will contain error codes and messages.



#### SET_MSD_FILTER

API Function: 

Add or remove BLE vendor custom data filter table entries. 

Data segment on reception.

```json
{
    "jsonrpc": "2.0",
    "method": "SET_MSD_FILTER",
    "params": {
        "mode": x,
        "msd": "x",
    },
    "id": 24
}
```

**Note:**


- mode: 0x00 is Add mode which adds the AddMSD field to the device's BLE vendor custom data table; 0x01 is Delete mode which removes the AddMSD field from the BLE vendor custom data table. 
- msd: single BLE vendor-defined data, length 2-64 characters, and length must be a multiple of 2, character range [0-9a-fA-F].



Data segment at response:

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 24
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 24
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_MSD_FILTER

API Function: 

Get BLE vendor custom data filter table entries. 

Data segment on reception.

```json
{
    "jsonrpc": "2.0",
    "method": "GET_MSD_FILTER",
    "id": 25
}
```

**Note:**


- Data is equal to null



Data segment at response:

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "addmsd0": "x",
        "addmsd1": "x",
   		......
    },
    "id": 25
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 25
}
```

**Note:**


- result: It is a object, and addmsd0, addmsd1 is single MSD, all data in the MSD filtering table will be packaged and sent together.
- error: It is an object that will contain error codes and messages.



#### UPDATE_MQTT_CERT

API functionality: 

Update MQTT encryption certificate. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "UPDATE_MQTT_CERT",
    "params": {
        "mode": x,
        "mqttcerturl": "x"
    },
    "id": 26
}
```

**Note:**


- mode: 0x00 updates certificate immediately, 0x01 only saves certificate URL, and does not update certificate immediately. 

- mqttcerturl: MQTT encrypted certificate URL address, length 1-512characters. 

**Note:** If the Data segment is null, the MqttCertURL will be restored to the default configuration, and the certificate will be updated. 



Data segment at response:

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 26
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 26
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### UPDATE_WPA2_CERT

API function: 

Update Wi-Fi WPA2 encryption certificate. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "UPDATE_WPA2_CERT",
    "params": {
       	"mode": x,
        "wpa2certurl": "x"
    },
    "id": 27
}
```

**Note:**


- mode: 0x00 updates certificate immediately, 0x01 only saves certificate URL, and does not update certificate immediately. Occupies 1 character. 

- wpa2certurl: WPA2 encryption certificate URL address, length 1-512characters. 

**Note:** If the Data segment is null, the Wpa2CertURL will be restored to the default configuration, and the certificate will be updated. 



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 27
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 27
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### UPDATE_HTTPS_CERT

API functions: 

Update HTTPS encryption certificate. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "UPDATE_HTTPS_CERT",
    "params": {
        "mode": x,
        "httpscerturl": "x"
    },
    "id": 28
}
```

**Note:**


- mode: 0x00 updates certificate immediately, 0x01 only saves certificate URL, and does not update certificate immediately. Occupies 1 character. 

- httpscerturl: HTTPS encrypted certificate URL address, length 1-512 characters. 

**Note:** If the Data segment is null, the HttpsCertURL will be restored to the default configuration, and the certificate will be updated.



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 28
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 28
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### SET_OTA_URL

API function: 

Set the OTA URL. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "SET_OTA_URL",
    "params": {
        "updatenow": x,
        "otaurl": "x"
    },
    "id": 29
}
```

**Note:**


- updatenow: whether to upgrade OTA immediately, occupies 1 byte, 0 will save the URL and upgrade immediately, 1 will only save the url without upgrading. 
- otaurl: the server link for OTA upgrade, length 1-512 characters. 
- If the Data segment is null, OtaURL will be restored to the default configuration, but will not trigger OTA. 



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 29
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 29
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_OTA_URL

API Function: 

Get the OTA URL. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "GET_OTA_URL",
    "id": 30
}
```



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "otaurl": "x"
    },
    "id": 30
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 30
}
```

**Note:**


- otaurl: the server link of OTA upgrade, length 1-512 characters.
- error: It is an object that will contain error codes and messages.



#### OTA_STATUS

API function: 

Reply result after OTA completion, initiated by the device after OTA completion. 

Data segment at response: 

```json
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 31
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.



#### GET_DEV_STATUS

API Function: 

Get device Wi-Fi RSSI, networking status, server connection status. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "GET_DEV_STATUS",
    "id": 32
}
```



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "wifirssi": x,
        "isconnectnetwork": x,
        "isconnectserver": x,
        "wifimode": x
    },
    "id": 32
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 32
}
```

**Note:**


- wifirssi: RSSI of the connected router, range -96 ~ 0.
- isconnectnetwork: network connection status 0x00 means not connected; 0x01 means connected. 
- isconnectserver: MQTT server connection status 0x00 means not connected; 0x01 means connected. 
- wifimode: Wi-Fi connection mode [0x00 -> no password] [0x01 -> wpa2 personal encryption] [0x02 -> wpa2 enterprise encryption]
- error: It is an object that will contain error codes and messages.



#### GET_DEV_MESSAGE 

API Function: 

Get device Wi-Fi MAC, BLE MAC, SN, Device ID, firmware version number. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "GET_DEV_MESSAGE ",
    "id": 33
}
```



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "wifimac": "x",
        "blemac": "x",
        "sn": "x",
        "deviceid": "x",
        "firmwareversion": "x",
        "firmwaretype": x
    },
    "id": 33
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 33
}
```

**Note:**


- wifimac: Format XX:XX:XX:XX:XX:XX, XX range [0-9a-fA-F]. 
- blemac: Format XX:XX:XX:XX:XX:XX:XX , XX range [0-9a-fA-F]. 
- sn: Device SN code, length 16 characters. 
- deviceid: device ID code, length 7 characters. 
- firmwareversion: firmware version number, length 0-32 characters.
- firmwaretype:  0 mean standard firmware，1 mean aws firmware.
- error: It is an object that will contain error codes and messages.



#### RESTART_DEV

API function: 

Reboot the device. 

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "RESTART_DEV",
    "id": 34
}
```

**Note:**


- Data is equal to null



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 34
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 34
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### RESET_DEV

API function: 

Reset the device.

Data segment at reception: 

```json
{
    "jsonrpc": "2.0",
    "method": "RESET_DEV",
    "id": 35
}
```



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 35
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 35
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### SET_BLE_RSSI_FILTER

API function: 

Set the BLE_RSSI filter threshold. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "SET_BLE_RSSI_FILTER",
    "params": {
        "blerssifilter": x
    },
    "id": 36
}
```

**Note:**


- blerssifilter:  Range -100 ~ 0. Default value: -100 



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 36
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 36
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_BLE_RSSI_FILTER

API Function: 

Get the BLE_RSSI filter threshold. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "GET_BLE_RSSI_FILTER",
    "id": 37
}
```




Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "blerssifilter": x
    },
    "id": 37
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 37
}
```

**Note:**


- blerssifilter: Range -100 ~ 0.
- error: It is an object that will contain error codes and messages.



#### GET_WiFi_AP_LIST 

API Function: 

Get the list of surrounding Wi-Fi AP information. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "GET_WiFi_AP_LIST ",
    "id": 38
}
```



Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "WIFI_AP_LIST": [
            {"SSID":"XXXX","RSSI":XXX,"authMode":X},
            {"SSID":"XXXX","RSSI":XXX,"authMode":X},
            {"SSID":"XXXX","RSSI":XXX,"authMode":X},
            ......
        ]
    },
    "id": 38
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 38
}
```

**Note:**

- error: It is an object that will contain error codes and messages.

- SSID: router name, in string form, valid length 0-32 

- RSSI: Routing signal strength, numeric type, valid range -96 ~ 0. 

- authMode: Routing encryption method, numeric type, valid range 0 ~ 7. See the following table for the meaning.

| num  | authMode                            |
| ---- | ----------------------------------- |
| 0    | authenticate mode : open            |
| 1    | authenticate mode : WEP             |
| 2    | authenticate mode : WPA_PSK         |
| 3    | authenticate mode : WPA2_PSK        |
| 4    | authenticate mode : WPA_WPA2_PSK    |
| 5    | authenticate mode : WPA2_ENTERPRISE |
| 6    | authenticate mode : WPA3_PS         |
| 7    | authenticate mode : WPA2_WPA3_PSK   |
| -    | default                             |



#### SET_MQTT_CLIENT_ID

API Function: 

Get the BLE_RSSI filter threshold. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "SET_MQTT_CLIENT_ID",
    "params": {
        "mqttclientid": "x"
    }
    "id": 39
}
```

**Note:**

- mqttclientid: device mqtt client id, effective length is 1-128 bytes.




Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 39
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 39
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_MQTT_CLIENT_ID

API Function: 

Get the BLE_RSSI filter threshold. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "GET_MQTT_CLIENT_ID",
    "id": 40
}
```




Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
        "mqttclientid": "x"
    },
    "id": 40
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 40
}
```

**Note:**


- mqttclientid: device mqtt client id, effective length is 1-128 bytes.
- error: It is an object that will contain error codes and messages.



#### SET_BLE_SCAN_PARAMS

API Function: 

Get the BLE_RSSI filter threshold. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "SET_BLE_SCAN_PARAMS",
    "params": {
        "scantype": x,
        "scaninterval": x,
        "scanwindow": x
    }
    "id": 41
}
```

**Note:**

- scantype: 0 mean passive scan type, 1 mean active scan type.
- scaninterval: The scanning interval is defined as the time from when the controller starts the last LE scan until subsequent LE scans begin. Range: 4-16384, default value: 80 (50ms), time=N * 0.625 m, time range: 2.5 ms~10240ms.
- scanwindow: Scan window, duration of LE scan. LE_ Scan_ Window should be less than or equal to LE_ Scan_ Interval. Range: 4-16384, default value: 48 (30ms), time=N * 0.625 ms, time range: 2.5 ms~10240ms.




Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": 0,
    "id": 41
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 41
}
```

**Note:**


- result: 0x00 represent execution success; 0x01 represent execution fail.
- error: It is an object that will contain error codes and messages.



#### GET_BLE_SCAN_PARAMS

API Function: 

Get the BLE_RSSI filter threshold. 

Data segment at reception:

```json
{
    "jsonrpc": "2.0",
    "method": "GET_BLE_SCAN_PARAMS",
    "id": 42
}
```




Data segment at response: 

```json
// success reply
{
    "jsonrpc": "2.0",
    "result": {
       	"scantype": x,
        "scaninterval": x,
        "scanwindow": x
    },
    "id": 42
}
 
// fail reply
{
    "jsonrpc": "2.0",
    "error": {
        "code": x,
        "message": "x"
    },
    "id": 42
}
```

**Note:**


- scantype: 0 mean passive scan type, 1 mean active scan type.
- scaninterval: The scanning interval is defined as the time from when the controller starts the last LE scan until subsequent LE scans begin. Range: 4-16384, default value: 80 (50ms), time=N * 0.625 m, time range: 2.5 ms~10240ms.
- scanwindow: Scan window, duration of LE scan. LE_ Scan_ Window should be less than or equal to LE_ Scan_ Interval. Range: 4-16384, default value: 48 (30ms), time=N * 0.625 ms, time range: 2.5 ms~10240ms.
- error: It is an object that will contain error codes and messages.