# **GL-S20 User Manual**

## **General Product Introduction**

### **Product introduction**

GL-S20 is a cost-effective IoT gateway designed to provide an essential & streamlined connectivity solution for IoT devices. It boasts high energy efficiency, high-availability, and reliable IoT connectivity in a compact design.

As the next-gen IoT gateway of the GL-S10, GL-S20 can provides Ethernet and Wi-Fi connectivity for BLE devices .It can also be utilized as a Thread Border Router/Thread Router.

GL-S20 supports customization in hardware and software, which can significantly expedite the development of your IoT system.

### **Product feature**

FreeRTOS, Thread 1.3 / BLE 5.3, PoE Powered, Wi-Fi / ETH failover

### **Technical specification**

| Spec                         |                                      |
| ---------------------------- | ------------------------------------ |
| Main MCU Module              | ESP32-S3-WROOM-1                     |
| CPU                          | Dual-core Xtensa® LX7 @ 240MHz       |
| SRAM                         | 512KB                                |
| PSRAM                        | 8MB                                  |
| Flash                        | 16MB                                 |
| ETH                          | 10 Base-T / 100 Base-TX              |
| Wi-Fi                        | 802.11b/g/n (2.4GHz), 1x1            |
| Thread/BLE Module            | ESP32-H2-MINI-1                      |
| LED Indicators               | Power, IoT, Network                  |
| Buttons                      | Reset, IoT                           |
| Power Input                  | DC 5V1A (USB-C), IEEE 802.3 af (PoE) |
| Power Consumption            | <3w (DC), <7w (PoE)                  |
| Firmware burning             | USB-UART via USB-C                   |
| Dimension                    | 76 x 76 x 25 mm                      |
| Net Weight (Without package) | 63g                                  |

### **Package list**

![s20doc](https://static.gl-inet.com/docs/iot/en/web/s20-doc.jpg){class="glboxshadow"}

| Object                                 | Quantity |
| -------------------------------------- | -------- |
| User Manual & Warranty Card            | 1        |
| GL-S20 Thread Border Router            | 1        |
| Wall bracket                           | 1        |
| Wall bracket screw package             | 1        |
| Ethernet cable                         | 1        |
| Power adapters (US, EU, UK & AU plugs) | 1        |

### **Function of buttons**

GL-S20 has two buttons, IoT and Reset.

![s20btn](https://static.gl-inet.com/docs/iot/en/web/S20BTN.jpg){class="glboxshadow"}

### **IoT Button**

The IoT button allows you to perform these actions:

| Function               | Instruction                                                  |
| ---------------------- | ------------------------------------------------------------ |
| Join Thread network    | When the device is not connected to a Thread network, press and hold the IoT button for 2 seconds. Release the button when the IoT LED starts flashing green slowly. |
| Create Thread network  | When the device is not connected to a Thread network, press and hold the IoT button for 8 seconds. Release the button when the IoT LED starts flashing green slowly. |
| Start Commissioning    | When your device is connected to a Thread Network, press and hold the IoT button for 2 seconds. Release it when the IoT LED starts flashing yellow slowly. |
| Disable Thread network | When your device is connected to a Thread Network, press and hold the IoT button for 8 seconds. Release it when the IoT LED starts flashing yellow slowly. |

### **Reset Button**

| Reset button function                     | Instruction                                                  |
| ----------------------------------------- | ------------------------------------------------------------ |
| Reset Thread/Wi-Fi/Ethernet configuration | Press and hold the Reset button for 2 seconds. Release it when all 3 LEDs start flashing slowly. |
| Restore factory settings                  | Press and hold the Reset button for 8 seconds. Release it when all 3 LEDs start flashing rapidly. |

### **LED description**

![S20led](https://static.gl-inet.com/docs/iot/en/web/S20LED.jpg){class="glboxshadow"}

| Device Status              | Power LED            | IoT LED              | Network LED          |
| -------------------------- | -------------------- | -------------------- | -------------------- |
| System starting            | Green flashing       | -                    | -                    |
| Device not initialized     | Solid Yellow         | -                    | -                    |
| Firmware upgrading         | Fast Green flashing  | Fast Green flashing  | Fast Green flashing  |
| Restoring factory settings | Fast Yellow flashing | Fast Yellow flashing | Fast Yellow flashing |
| Repairing firmware         | Red flashing         | -                    | -                    |
| Device abnormality         | Solid Red            | Solid Red            | Solid Red            |


| Network Status                                     | Network LED  |
| -------------------------------------------------- | ------------ |
| Network connected                                  | Solid Green  |
| Network disconnected                               | Solid Red    |
| Network is connected but connectivity check failed | Solid Yellow |


| Thread Network Status                       | IoT LED         |
| ------------------------------------------- | --------------- |
| Thread Uninitialized                        | OFF             |
| Thread working normally                     | Solid Green     |
| Joining Thread network (Thread Router)      | Flashing Green  |
| Thread network disconnected (Thread Router) | Flashing Red    |
| Thread Commissioning enabled                | Flashing Yellow |

## Access Web Admin Panel

Once you have finished setting up the Ethernet or Wi-Fi, you can access the GL-S20 Web Admin Panel by opening your web browser and navigating to either "http://gl-s20-otbr/" or the IP address assigned by the upper-layer device, as long as you are on the same network.

## INTERNET

### Internet

Read the below instruction to learn how to connect the GL-S20 to the Internet. 

You can configure  and manage GL-S20's networking settings by clicking INTERNET on the left side of the Web Admin Panel.

It supports 2 ways to connect to the Internet as listed below:

#### Method 1: **Connect to the Internet via an Ethernet cable**

##### **Ethernet**

To establish an Ethernet connection, use an Ethernet cable to connect the WAN portoftheGL-S20 to the LAN port of an up stream  device.

On the left side of the Web Admin Panel  →  INTERNET → Internet → Ethernet card.

![leftlist](https://static.gl-inet.com/docs/iot/en/web/leftinternet.png){class="glboxshadow"}

##### **Protocol**

There are 2 types of protocols: DHCP (Dynamic Host Configuration Protocol) and Static IP. Click Modify to change the settings.

- DHCP: DHCP is the default and most common protocol. It is a network management protocol used on Internet Protocol (IP) networks for automatically assigning IP addresses and other communication parameters to devices connected to the network using a client-server architecture.
- Static: Static is required if your need a fixed IP address to connect or you want to configure the network information such as IP address, Gateway, Netmask manually.

#### Method 2: **Connect to the Internet via an existing Wi-Fi**

Using Wi-Fi means connecting the device to another existing wireless network.

You can change Wi-Fi settings on the left side of Web Admin Panel →  INTERNET → Internet→ Wi-Fi card.

##### **Basic steps**

1. Click **Connect**.

    ![repeater](https://static.gl-inet.com/docs/iot/en/web/wifilist.png){class="glboxshadow"}

2. Select a Network you want to connect from the pop-up window. (If the desired network is not listed, click [Join Other Network ](#join-other-network)at the top.)

    ![repeater join wlan](https://static.gl-inet.com/docs/iot/en/web/wifi.png){class="glboxshadow"}

3. Enter the network passwords.

    ![repeater join network](https://static.gl-inet.com/docs/router/en/4/tutorials/internet_repeater/repeater_join_network.png){class="glboxshadow"}

4. Click the **Apply** button.

5. Wait for a moment, if you have successfully connected to the network, you will see the screen below:

    ![repeater](https://static.gl-inet.com/docs/iot/en/web/repeater_connected.png){class="glboxshadow"}

##### **Wi-Fi Advanced Settings**

On the Wi-Fi Join Card, there are 2 additional settings you can use.

![repeater join network advanced setting](https://static.gl-inet.com/docs/router/en/4/tutorials/internet_repeater/repeater_join_network_advanced_setting.png){class="glboxshadow"}

- **Lock BSSID**: If this option is enabled, the device will only connect to the Access Point (AP) corresponding to the BSSID you selected when switching to a network using this SSID.
- **Manually set static IP**: If this option is enabled, you can configure the network information such as IP address, Gateway, Netmask manually.

##### **Manage Known Networks**

To manage known networks, click **Switch Network**.

![repeater connected](https://static.gl-inet.com/docs/iot/en/web/repeater_connected.png){class="glboxshadow"}

Or click **Connect**.

![repeater](https://static.gl-inet.com/docs/iot/en/web/wifilist.png){class="glboxshadow"}

On the **Known Network** section

\-     To delete a known network: Click the trash icon.

\-     To configure the network: Click the settings icon. 

![repeater known network](https://static.gl-inet.com/docs/iot/en/web/repeater_known_networks.png){class="glboxshadow"}

##### **Join Other Network**

If the SSID is not in the Available Networks list, or the network you want to connect is hidden, you can click **Join Other Network**.

![join other network](https://static.gl-inet.com/docs/iot/en/web/join_other_network.png){class="glboxshadow gl-60-desktop"}

- SSID: Enter the network's SSID.
- Security: Select one of these options.
- None: Select it if the network doesn't require a password.
- WPA/WPA2/WPA3: Select it if the network requires a password. Enter the password below.

![join other network](https://static.gl-inet.com/docs/router/en/4/tutorials/internet_repeater/repeater_join_other_network.png){class="glboxshadow"}

Finally, Click **Apply**.

##### **Reconnection**

In the following cases, the device will try to connect to Wi-Fi every once in a while. You can turn off the reconnection manually, and for SSID/password errors, please [delete it in Known Network](#Manage-known-networks). 

![Reconnetction](https://static.gl-inet.com/docs/iot/en/web/Reconnection.png){class="glboxshadow"}

1. The wrong SSID/password was entered during the process of Wi-Fi, after the first failed connection.
2. After connecting to the Wi-Fi of the Primary router, the device moves out of the signal range of the Primary router.
3. After connecting to the Wi-Fi of the Primary router, the upstream router changed the SSID/password, or restricted the connection.

### Failover

On the left side of the, Web Admin Panel → INTERNET → Failover

![Reconnetction](https://static.gl-inet.com/docs/iot/en/web/Failover.png){class="glboxshadow"}

The GL-S20 can be connected to the Internet in multiple ways, such as  Ethernet and Wi-Fi.

When one type of Internet access is not available, it can automatically switch to another type of Internet access in specified time. (Ethernet is the highest priority )

The GL-S20 will use ping to track the connection to destination IP to a determine if the interface is available.

#### **The setting of Interface Status Tracking Method**

- **Enable Interface Status Track**: You can disable the interface status tracking, and the router will use the physical status of the interface (such as whether the network cable is plugged in or not).
- Track Interval: Check every five minutes.
- Change to Failure Condition: The fault is detected after five consecutive failures.
- Change to Available Condition: It is judged to be a successful state after two unsuccessful attempts.
- IPV4 Track IP: Configure the IPV4 address you want to detect.
- IPV6 Track IP: Configure the IPV6 address you want to detect

![Reconnetction](https://static.gl-inet.com/docs/iot/en/web/FailoverSet.png){class="glboxshadow"}

## **Thread Mesh**

### **Thread Network**

On the left side of the Web Admin Panel → THREAD MESH → Thread Network

You can configure and manage Thread Network settings in **Thread Network** page.

![Thread-Network](https://static.gl-inet.com/docs/iot/en/thread_web_guide/S20Thread.png){class="glboxshadow"}

### Parameter meaning

- **EUI-64**: Unique device identifier, hexadecimal number of 8 bytes in length.
- **Ext Mac**: The device extension address, a unique identifier in the Thread network, is a hexadecimal number of 8 bytes in length. The extended address is randomly generated and will be re-randomized when the system is restored to factory settings.
- **Thread Version**: Current thread protocol version.
- **Tx Power**: Transmit power, -24~20 dBm, default is 6 dBm.
- **Network Name**: Thread network name, 1 to 16 characters long, used to generate PSKc (Pre-Shared Key for the Commissioner), default format <GL-model> - <3 characters after MAC address>.
- **PAN ID**: IEEE 802.15.4 MAC layer unique identifier, default value is 2 bytes after the MAC address in hexadecimal format.
- **Extended PAN ID**: Thread network extension PAN ID for PSKc generation.
- **Network Key**: Thread network key, a hexadecimal number of 16 bytes in length.
- **Channel**: Thread network channel, 11~26, default value is 26.

Network Name is generated based on the MAC address of the device, PAN ID/ Extended PAN ID/ Network Key is generated randomly.

### **Create a new Thread network**

You can create a new network directly by using the default configuration and clicking **Enable**. After a new network is created, the status of the GL-S20 will be changed from **Detached** to **Leader**.

![create-new-network](https://static.gl-inet.com/docs/iot/en/thread_web_guide/S20Thread-enable.png){class="glboxshadow"}

**Note**: If your Thread network has the same configuration as other Thread networks,  the GL-S20 will automatically join that network.

### Manual Setup

If you want to set some parameters manually, you can configure them by clicking on the **Manual** Setup.You can modify the contents in the popup window.

![Manual-Setup](https://static.gl-inet.com/docs/iot/en/thread_web_guide/S20NetworkSetting.png){class="glboxshadow"}

### How to join a Thread Network

There are two methods for connecting the GL-S20 to an existing network.

#### Method 1:  **Join the network by using Network Key**

Click **Join Network**. The GL-S20 will start scanning the available Thread networks nearby.

![using-Network-Key](https://static.gl-inet.com/docs/iot/en/thread_web_guide/using-network-key.png){class="glboxshadow"}

In the pop-up window, select the Thread network you want to join. Enter its Network Key and click **Apply**.

![using-Network-Key2](https://static.gl-inet.com/docs/iot/en/thread_web_guide/using-network-key2.png){class="glboxshadow"}

#### Method 2:  **Join the network by using the Commissioner**

1. Use another GL-S20 as the Commissioner (please refer to the **Thread Commissioning** page guide), enter the Joiner EUI64 and Joiner Credential of the GL-S20 to be connected to the network.
2. Click on the "**Join Network**" on the GL-S20 to be connected to the network, select "**Join With Commissioner**" in the pop-up window, enter the Joiner Credential and apply it.

### **Thread Commissioning**

On this screen, you can add new devices to the network. GL-S20 supports adding a large number of devices.

![thread commissioning](https://static.gl-inet.com/docs/iot/en/thread_web_guide/S20Commissioning.png){class="glboxshadow"}

- The **Joiners** card: The list shows Joiners that are ready to be added to the network.

- The Commission Records card: Shows entry history of joiners' network.

  - For Joined/Timeout devices, click the three-dot icon **→ Rejoin**. The selected device will be added back to the Joiners list, waiting for next Commissioning.

    ![rejion](https://static.gl-inet.com/docs/iot/en/thread_web_guide/rejoin.png){class="glboxshadow"}

  - For all the devices with the Join Fail status, you can click **Rejoin All** to move then back to Joiners list altogether.

    ![rejoin all](https://static.gl-inet.com/docs/iot/en/thread_web_guide/rejoin-all.png){class="glboxshadow"}

#### **Add a single device**

Click the **Add** button and a pop-up window will appear to add.

![add a single device](https://static.gl-inet.com/docs/iot/en/thread_web_guide/Addseparately.png){class="glboxshadow"}

- **Joiner EUI-64**: Joiner's EUI-64 or type *****  to match all Joiners.
- **Joiner Credential**: The device credentials to be added must be a string containing all uppercase letters and numbers and must not contain the letters I, O, Q and Z, between 6 and 32 characters in length.
- **Joiner Timeout**: Joiner access timeout, during which a Joiner can access the network using valid credentials.

#### **Add devices in batches**

If your device's service provider has set different Joiner credentials for each Thread device, you will need this feature when deploying. Clicking **Export** to download the template or export the saved Joiner list, fill in or add the Joiner EUI64 and Joiner Credential, then click **Add → Batch Add** to import.

Please note that the number of joiners added cannot exceed 50

![add devices in batches](https://static.gl-inet.com/docs/iot/en/thread_web_guide/BatchAdd.png){class="glboxshadow"}

### **Advanced Thread network settings**

You can use different advanced configurations related to Thread networking.

#### **Backbone Routers**

The Backbone Router (BBR) function is primarily used to receive multicast inbound/outbound requests. Refer to  [(Thread Boder Router-THread 1.2 Multicast) ](https://openthread.google.cn/codelabs/openthread-border-router-ipv6-multicast?hl=zh-cn#4)for experimentation.

![Backbone Routers](https://static.gl-inet.com/docs/iot/en/thread_web_guide/BackboneRouters.png){class="glboxshadow"}

------

## **System**

### Overview

On the left side of the Web Admin Panel → SYSTEM → Overview

This page shows you the system memory usage, device Bluetooth MAC, Wi-Fi MAC, WAN MAC, Model and Serial Number.

![Overview](https://static.gl-inet.com/docs/iot/en/web/Overview.png){class="glboxshadow"}

### **Time Zone**

On the left side of Web Admin Panel → SYSTEM → Time Zone

#### **NTP Server**

![NTPServer](https://static.gl-inet.com/docs/iot/en/web/NTPServer.png){class="glboxshadow"}

In NTP Server card, you can customise the NTP server configuration.

- The device has two built-in NTP servers. If the user-defined server is not accessible, the built-in NTP server will be used automatically.

#### **Device Time**

In this card, you can change the timezone of the device.

![DeviceTime](https://static.gl-inet.com/docs/iot/en/web/DeviceTime.png){class="glboxshadow"}

### **Upgrade**

On the left side of the Web Admin Panel → SYSTEM → Upgrade

We offer three ways to upgrade the firmware.

#### **Online Upgrade**

You can check the current firmware version here. If your device is connected to the Internet, it will check for the newer firmware version available for download.

**Warning: During the upgrade, DO NOT turn off your device or refresh the page.**

![local upgrade](https://static.gl-inet.com/docs/iot/en/web/OnlineUpgrade.png){class="glboxshadow"}

#### **Local Upgrade**

From this page, you can upgrade the device's firmware.

You can download the firmware from our [download site](https://dl.gl-inet.com/).

![local upgrade](https://static.gl-inet.com/docs/iot/en/web/Localupgrade.png){class="glboxshadow"}

Device use a Radio Co-Processor (RCP) design, and RCP firmware is designed to be upgraded separately. Please select or drag and drop the firmware file to the appropriate location.

-  with the app firmware running on the main  processor and the rcp firmware running on the co-processor, and the web firmware is used to load web  page resources.
-  **Click Apply Button to upgrade. Please note that keeping the configuration while using custom firmware may cause unexpected errors, so please proceed with caution.**


- **We won’t verify the firmware due to maintaining flexibility in system upgrades, MAKE SURE you are uploading the correct file to the appropriate location. If you upload the incorrect firmware, it may cause a system error.**
- **Warning: During the upgrade, DO NOT turn off your device or refresh the page.**

If you trunon Keep Settings, current settings will be retained.

#### **Custom URL upgrade**

You can use the URL update the firmware. You must deploy the file by following the page prompts.

![URL upgrade](https://static.gl-inet.com/docs/iot/en/web/URLUpgrade.png){class="glboxshadow"}

- **We won’t verify the firmware due to maintaining flexibility in system upgrades,Make sure you upload the correct file to the URL you entered. If you upload the wrong firmware, it may cause a system error.**
- **The URL you enter must point to a path that contains three files**.
- **Please install the firmware with the following name: app.bin; rcp.bin; web.bin.**
- **Warning: During the upgrade, DO NOT turn off your device or refresh the page.**

If you enter a link with an encryption method, you will need to attach a certificate.

Https certificates can be passed in two ways: urls and files

![CertificateUpgrade](https://static.gl-inet.com/docs/iot/en/web/CertificateUpdate.png){class="glboxshadow"}

**Keep Setting:**  Please note that saving the configuration while using custom firmware may cause unexpected errors in the system, so please proceed with caution.

### **Administrator password**

On the left side of the Web Admin Panel → SYSTEM → Admin Password

![admin password](https://static.gl-inet.com/docs/router/en/4/tutorials/admin_password/admin_password.png){class="glboxshadow"}

To change the password for loggining into the Web Admin Panel, you will need to enter your current password.

The rules for the new password are as follows:

- A minimum of 10 characters and a maximum of 31 characters.
- Only Letters (case sensitive), numbers and symbols `! @ # $ % ^ & * ( ) _ + - = , . > < | ? / \\ { } : ; " ' ` ~` are allowed.
- At least two of uppercase letters, lowercase letters, numbers, and symbols are required.

### **Reset Firmware**

On the left side of the Web Admin Panel → SYSTEM → Reset Firmware

In case of malfunction, you can reset the device.

**Warning:** All your current settings, applications and data will be lost. The process will take about 10 seconds. DO NOT power off the device during this process.

![reset firmware](https://static.gl-inet.com/docs/iot/en/web/ResetFirmware.png){class="glboxshadow"}

If you can't access the Web Admin Panel, you can use the reset button as well, please press and hold the Reset button for 8 seconds. Release it when all 3 LEDs start flashing rapidly.

Video guide: How to Reset GL.iNet S20 to Factory Default

<iframe width="560" height="315" src="https://www.youtube.com/embed/ON6PtGH_HJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Still have questions? Visit our [Community Forum](https://forum.gl-inet.com/) ,or get in touch with our technical support team at support@glinet.biz