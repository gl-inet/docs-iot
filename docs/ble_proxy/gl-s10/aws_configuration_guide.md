# AWS Configuration Guide

## Introduction

In order to better fit the actual use habits of our users, we have added a new access to AWS IoT on the basis of the standard version of the firmware, Sub-firmware firmware of the platform function. Compared with the standard shipping firmware, the firmware only changes the reporting cloud platform, and other functions are unchanged.

## Prepare

### 1. Determine the firmware type

According to the device information bar of the home page of the mobile APP configuration software supporting GL-S10, the device marked with the word AWS is AWS IoT sub-firmware.

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/1.png){class="glboxshadow"}

### 2. Device networking configuration

When the GL-S10 is configured with WIFI and a network cable inserted at the same time, the priority network cable is used by default. If you need to connect the network in wireless mode, remove the network cable first.

*Ethernet networking*

Connect the device directly to the WAN port of the GL-S10 through a network cable. Wait until the network indicator is on, indicating that the device is connected to the network.

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/2.png){class="glboxshadow"}

*Wifi networking*

Open the GL-S10 APP home page, find the WIFI option box, and click

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/3.png){class="glboxshadow"}

Go to the Connect WIFI page and select the WIFI you want to connect from the list. If there is no WIFI in the list, click ScanWIFI and search the surrounding wifi again

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/4.png){class="glboxshadow"}

After the configuration is complete, restart the GL-S10. If the network indicator blinks, the device is connected to the network.

### 3. OTA to AWS IoT sub-firmware

If you find that your device is not AWS IoT firmware, then you need to upgrade the firmware to an AWS feature version (Note: Before starting OTA, please make sure the device is connected to the network, if not, please follow the device networking configuration section to connect the device to the network).

If it's online, we can get started. Similarly, we still open the GL-S10 APP, go to the main page, find the Upgrade OTA option, and click

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/5.png){class="glboxshadow"}

To go to the Upgrade OTA page, click on aws and then Upgrade OTA

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/6.png){class="glboxshadow"}

After pressing Upgrade OTA, the APP will enter the waiting state and exit the page after the device upgrade is completed. At the same time, the indicator light of GL-S10 will start to blink successively like a flow light during OTA until the OTA is completed

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/7.png){class="glboxshadow"}

### 4. AWS IoT Core cloud platform configuration

Before configuring, make sure your account has **aws iot core** services, see AWS [Official document](https://docs.aws.amazon.com/iot/latest/developerguide/setting-up.html)

***Create an item***

#### 4.1 Log into the AWS administrative console and search for IoT Core

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708113939205.png){class="glboxshadow"}

#### 4.2 Manage->Things, click Create things

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708095937397.png){class="glboxshadow"}

#### 4.3 Select Create Individual Item and click Next

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708100159600.png){class="glboxshadow"}

#### 4.4 Fill in an item name and click Next

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708100423760.png){class="glboxshadow"}

#### 4.5 Select Automatically generate a new certificate (you can use *my certificate* if you already have one) and click Next

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708100549310.png){class="glboxshadow"}

#### 4.6 Click Create policy

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708104404008.png){class="glboxshadow"}

#### 4.7 Enter a policy name, Click JSON

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708104647496.png){class="glboxshadow"}

#### 4.8 Add the following fields to the Policy document

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iot:Publish",
        "iot:Receive",
        "iot:RetainPublish"
      ],
      "Resource": [
        "arn:aws:iot:ap-southeast-1:123456789012:topic/GL-IoT/dataTopic/E8DB841E2B0E"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "iot:Subscribe",
      "Resource": [
        "arn:aws:iot:ap-southeast-1:123456789012:topicfilter/GL-IoT/dataTopic/E8DB841E2B0E"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "iot:Connect",
      "Resource": [
        "arn:aws:iot:ap-southeast-1:123456789012:client/E8DB841E2B0E"
      ]
    }
  ]
}
```

***\*NOTE\****：**"arn:aws:iot:ap-southeast-1:886651388694:client/E8DB841E2B0E"**,after the **client/** client id field is the terminal equipment, Only mqtt clients configured with this client id can connect. **”123456789012“** replace with your aws client ID.

#### 4.9 Click Create

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240709175352460.png){class="glboxshadow"}

#### 4.10 Go back to the Attach policy to certificates page, check the policy you just created, and click Create thing

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708114253557.png){class="glboxshadow"}

#### 4.11 In the window that pops up, click Download Device Certificate, download public key file, download private key file, and download Root CA Certificate (RSA2048).

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708114443771.png){class="glboxshadow"}

The relevant certificates must be properly stored and used by terminals when connecting to AWS.

#### 4.12 You can see the information about the item you just created on the item page

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708114828888.png){class="glboxshadow"}

## Update the security certificate to GL-S10

(Note: Before starting, please ensure that the device is connected to the network. If it is not connected, please connect the device to the network according to the section on Device networking configuration.) 

Open the GL-S10 APP homepage to find the MQTT Server option box and click

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/8.png){class="glboxshadow"}

Go to the MQTT Configuration page and click Update Certificare

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/9.png){class="glboxshadow"}

To Update the MQTT Configuration page, fill in the Url: http://134.175.4.252/s10/cert/mqtt_aws/, when the Url to determine good click Done after began to Update the certificate.
(Note: This is the matching certificate of our demo demonstration, if you have your own certificate, please name the three files of the certificate: **ca.crt** **client.crt** **client.key**. They are root certificate, client certificate, client key, after rename, please use a folder to put on your http service, here I used a folder named mqtt_aws)

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708120915001.png){class="glboxshadow"}

The update will return to the MQTT Configuration page.

## Set MQTT Configuration for GL-S10 

First get your mqtt server address, like this

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708161947688.png){class="glboxshadow"}

Set host and port, then click done.

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/11.png){class="glboxshadow"}

## View data reported by GL-S10 on the AWS IoT Core platform

First we use APP check about the theme of the report data, please remember this equipment is now reported theme **GL-IoT/dataTopic/E8DB841E2B0E**

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/10.png){class="glboxshadow"}

In the AWS IoT page click test -> MQTT test client -> subscribe topics -> subscribe to **GL-IoT/dataTopic/E8DB841E2B0E** this topic

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708160828294.png){class="glboxshadow"}

After the subscription is completed, select the subject of the subscription, and then you can see the data reported by GL-S10.

![](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/image-20240708161137741.png){class="glboxshadow"}

---

Still have questions? Visit our [Community Forum](https://forum.gl-inet.com){target="_blank"}.
