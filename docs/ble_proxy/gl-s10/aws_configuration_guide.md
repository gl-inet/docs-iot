# AWS Configuration Guide

## Introduction

In order to better fit the actual use habits of our users, we have added a new access to AWS IoT on the basis of the standard version of the firmware, Sub-firmware firmware of the platform function. Compared with the standard shipping firmware, the firmware only changes the reporting cloud platform, and other functions are unchanged.

## Prepare

### 1. Determine the firmware type

According to the device information bar of the home page of the mobile APP configuration software supporting GL-S10, the device marked with the word AWS is AWS IoT sub-firmware.

![firmware_type](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/firmware_type.png){class="glboxshadow"}

### 2. Device networking configuration

When the GL-S10 is configured with WIFI and a network cable inserted at the same time, the priority network cable is used by default. If you need to connect the network in wireless mode, remove the network cable first.

*Ethernet networking*

Connect the device directly to the WAN port of the GL-S10 through a network cable. Wait until the network indicator is on, indicating that the device is connected to the network.

![network_led_status](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/network_led_status.png){class="gl-50-desktop"}

*Wifi networking*

Open the GL-S10 APP home page, find the WIFI option box, and click

![wifi_setting_entrance](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/wifi_setting_entrance.png){class="glboxshadow"}

Go to the Connect WIFI page and select the WIFI you want to connect from the list. If there is no WIFI in the list, click ScanWIFI and search the surrounding wifi again

![wifi_setting](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/wifi_setting.png){class="gl-50-desktop"}

After the configuration is complete, restart the GL-S10. If the network indicator blinks, the device is connected to the network.

### 3. OTA to AWS IoT sub-firmware

If you find that your device is not AWS IoT firmware, then you need to upgrade the firmware to an AWS feature version (Note: Before starting OTA, please make sure the device is connected to the network, if not, please follow the device networking configuration section to connect the device to the network).

If it's online, we can get started. Similarly, we still open the GL-S10 APP, go to the main page, find the Upgrade OTA option, and click

![ota_setting_entrance](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/ota_setting_entrance.png){class="gl-90-desktop"}

To go to the Upgrade OTA page, click on aws and then Upgrade OTA

![ota_setting](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/ota_setting.png){class="gl-90-desktop"}

After pressing Upgrade OTA, the APP will enter the waiting state and exit the page after the device upgrade is completed. At the same time, the indicator light of GL-S10 will start to blink successively like a flow light during OTA until the OTA is completed

![upgrade_loading](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/upgrade_loading.png){class="gl-60-desktop"}

### 4. AWS IoT Core cloud platform configuration

Before configuring, make sure your account has **aws iot core** services, see AWS [Official document](https://docs.aws.amazon.com/iot/latest/developerguide/setting-up.html)

***Create an item***

#### 4.1 Log into the AWS administrative console and search for IoT Core

![iot_core_entrance](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/iot_core_entrance.png){class="glboxshadow"}

#### 4.2 Manage->Things, click Create things

![create_things](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/create_things.png){class="glboxshadow"}

#### 4.3 Select Create Individual Item and click Next

![create_single_things](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/create_single_things.png){class="glboxshadow"}

#### 4.4 Fill in an item name and click Next

![thing_name_setting](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/thing_name_setting.png){class="glboxshadow"}

#### 4.5 Select Automatically generate a new certificate (you can use *my certificate* if you already have one) and click Next

![device_certificate](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/device_certificate.png){class="glboxshadow"}

#### 4.6 Click Create policy

![create_policy](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/create_policy.png){class="glboxshadow"}

#### 4.7 Enter a policy name, Click JSON

![policy_name](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/policy_name.png){class="glboxshadow"}

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

![policy_create_apply](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/policy_create_apply.png){class="glboxshadow"}

#### 4.10 Go back to the Attach policy to certificates page, check the policy you just created, and click Create thing

![attach_policy_to_certificate](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/attach_policy_to_certificate.png){class="glboxshadow"}

#### 4.11 In the window that pops up, click Download Device Certificate, download public key file, download private key file, and download Root CA Certificate (RSA2048).

![download_certificate](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/download_certificate.png){class="glboxshadow"}

The relevant certificates must be properly stored and used by terminals when connecting to AWS.

#### 4.12 You can see the information about the item you just created on the item page

![ting_info_show](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/ting_info_show.png){class="glboxshadow"}

## Update the security certificate to GL-S10

(Note: Before starting, please ensure that the device is connected to the network. If it is not connected, please connect the device to the network according to the section on Device networking configuration.) 

Open the GL-S10 APP homepage to find the MQTT Server option box and click

![s10_mqtt_setting](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/s10_mqtt_setting.png){class="glboxshadow"}

Go to the MQTT Configuration page and click Update Certificare

![s10_mqtt_cetificate_setting](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/s10_mqtt_cetificate_setting.png){class="glboxshadow"}

To Update the MQTT Configuration page, fill in the Url: http://134.175.4.252/s10/cert/mqtt_aws/, when the Url to determine good click Done after began to Update the certificate.
(Note: This is the matching certificate of our demo demonstration, if you have your own certificate, please name the three files of the certificate: **ca.crt** **client.crt** **client.key**. They are root certificate, client certificate, client key, after rename, please use a folder to put on your http service, here I used a folder named mqtt_aws)

The update will return to the MQTT Configuration page.

## Set MQTT Configuration for GL-S10 

First get your mqtt server address, like this

![aws_connect_url](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/aws_connect_url.png){class="glboxshadow"}

Set host and port, then click done.

![s10_aws_connect_url_setting](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/s10_aws_connect_url_setting.png){class="glboxshadow"}

## View data reported by GL-S10 on the AWS IoT Core platform

First we use APP check about the theme of the report data, please remember this equipment is now reported theme **GL-IoT/dataTopic/E8DB841E2B0E**

![s10_report_topic_setting](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/s10_report_topic_setting.png){class="glboxshadow"}

In the AWS IoT page click test -> MQTT test client -> subscribe topics -> subscribe to **GL-IoT/dataTopic/E8DB841E2B0E** this topic

![aws_subscribe_topic_setting](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/aws_subscribe_topic_setting.png){class="glboxshadow"}

After the subscription is completed, select the subject of the subscription, and then you can see the data reported by GL-S10.

![aws_subscript_topic_data_show](https://d2jbioc4ahy17s.cloudfront.net/docs/iot/en/ble_proxy/gl-s10/S10_AWS_Configuration_Pic/aws_subscript_topic_data_show.png){class="glboxshadow"}

---

Still have questions? Visit our [Community Forum](https://forum.gl-inet.com){target="_blank"}.
