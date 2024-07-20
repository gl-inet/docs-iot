# AWS Configuration Guide

## Introduction

In addition to our standard firmware, we have released a dedicated firmware version for AWS IoT to meet the needs of our users. The AWS IoT firmware is built upon the standard firmware and only differs in the cloud platform used for reporting data; all other functions remain unchanged.

## Preparation

### Determining the Firmware Type

To identify if your GL-S10 is running the AWS IoT firmware, navigate to the Manage Device page of the [GL-S10 Tool App](https://www.gl-inet.com/app/#download-app-s10). If the model has **AWS** at the end, it indicates that the device is using the AWS IoT firmware.

![gl-s10 firmware type](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/firmware_type.png){class="glboxshadow"}

### Device Network Configuration

When the GL-S10 is configured with both Wi-Fi and an Ethernet cable, it will prioritize the wired connection by default. If you need to connect wirelessly, remove the Ethernet cable first.

* Ethernet Networking

    Connect the device directly to the WAN port of the GL-S10 using an Ethernet cable. Wait until the network indicator light is on, indicating that the device is connected to the network.

    ![network led status](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/network_led_status.png){class="glboxshadow gl-50-desktop"}

* WiFi Networking

    Open the GL-S10 Tool App, locate the WiFi option, and click on it.

    ![WiFi setting entrance](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/wifi_setting_entrance.png){class="glboxshadow"}

    On the Connect Wi-Fi page, select the desired Wi-Fi network from the list. If no networks are listed, click "Scan Wi-Fi" to search for nearby networks again.

    ![WiFi setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/wifi_setting.png){class="glboxshadow gl-50-desktop"}

After configuring the network, restart the GL-S10. If the network indicator blinks, the device is successfully connected to the network.

## OTA to AWS IoT sub-firmware

If you find that your device is not AWS IoT firmware, then you need to upgrade the firmware to an AWS feature version.

!!! Note

    Before starting OTA, please make sure the device is connected to the network, if not, please follow the device networking configuration section to connect the device to the network.

If it's online, we can get started. Similarly, we still open the GL-S10 APP, go to the main page, find the Upgrade OTA option, and click

![ota setting entrance](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/ota_setting_entrance.png){class="glboxshadow gl-90-desktop"}

To go to the Upgrade OTA page, click on aws and then Upgrade OTA

![ota setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/ota_setting.png){class="glboxshadow gl-90-desktop"}

After pressing Upgrade OTA, the APP will enter the waiting state and exit the page after the device upgrade is completed. At the same time, the indicator light of GL-S10 will start to blink successively like a flow light during OTA until the OTA is completed

![upgrade loading](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/upgrade_loading.png){class="glboxshadow gl-60-desktop"}

## AWS IoT Core cloud platform configuration

Before configuring, make sure your account has **aws iot core** services, see AWS [Official document](https://docs.aws.amazon.com/iot/latest/developerguide/setting-up.html){target="_blank"}

***Create an item***

### Log into the AWS administrative console and search for IoT Core

![iot core entrance](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/iot_core_entrance.png){class="glboxshadow"}

### Manage->Things, click Create things

![create things](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/create_things.png){class="glboxshadow"}

### Select Create Individual Item and click Next

![create single things](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/create_single_things.png){class="glboxshadow"}

### Fill in an item name and click Next

![thing name setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/thing_name_setting.png){class="glboxshadow"}

### Select Automatically generate a new certificate (you can use *my certificate* if you already have one) and click Next

![device certificate](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/device_certificate.png){class="glboxshadow"}

### Click Create policy

![create policy](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/create_policy.png){class="glboxshadow"}

### Enter a policy name, Click JSON

![policy name](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/policy_name.png){class="glboxshadow"}

### Add the following fields to the Policy document

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

!!! Note

    **"arn:aws:iot:ap-southeast-1:886651388694:client/E8DB841E2B0E"**, after the **client/** client ID field is the terminal equipment, only mqtt clients configured with this client ID can connect. **”123456789012“** replace with your aws client ID.

### Click Create

![policy create apply](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/policy_create_apply.png){class="glboxshadow"}

### Go back to the Attach policy to certificates page, check the policy you just created, and click Create thing

![attach policy to certificate](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/attach_policy_to_certificate.png){class="glboxshadow"}

### In the window that pops up, click Download Device Certificate, download public key file, download private key file, and download Root CA Certificate (RSA2048).

![download certificate](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/download_certificate.png){class="glboxshadow"}

The relevant certificates must be properly stored and used by terminals when connecting to AWS.

### You can see the information about the item you just created on the item page

![thing info show](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/thing_info_show.png){class="glboxshadow"}

## Update the security certificate to GL-S10

!!! Note

    Before starting, please ensure that the device is connected to the network. If it is not connected, please connect the device to the network according to the section on Device networking configuration.

Open the GL-S10 APP homepage to find the MQTT Server option box and click

![gl-s10 mqtt setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/gl-s10_mqtt_setting.png){class="glboxshadow"}

Go to the MQTT Configuration page and click Update Certificare

![gl-s10 mqtt cetificate setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/gl-s10_mqtt_cetificate_setting.png){class="glboxshadow"}

To Update the MQTT Configuration page, fill in the Url: `http://134.175.4.252/s10/cert/mqtt_aws/`, when the Url to determine good click Done after began to Update the certificate.

!!! Note

    This is the matching certificate of our demo demonstration, if you have your own certificate, please name the three files of the certificate: **ca.crt**, **client.crt** and **client.key**. They are root certificate, client certificate, client key, after rename, please use a folder to put on your http service, here I used a folder named **mqtt_aws**.

The update will return to the MQTT Configuration page.

## Set MQTT Configuration for GL-S10 

First get your mqtt server address, like this

![aws connect url](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/aws_connect_url.png){class="glboxshadow"}

Set host and port, then click done.

![gl-s10 aws connect url setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/gl-s10_aws_connect_url_setting.png){class="glboxshadow"}

## View data reported by GL-S10 on the AWS IoT Core platform

First we use APP check about the theme of the report data, please remember this equipment is now reported theme **GL-IoT/dataTopic/E8DB841E2B0E**

![gl-s10 report topic setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/gl-s10_report_topic_setting.png){class="glboxshadow"}

In the AWS IoT page click Test -> MQTT test client -> subscribe topics -> subscribe to **GL-IoT/dataTopic/E8DB841E2B0E** this topic

![aws subscribe topic setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/aws_subscribe_topic_setting.png){class="glboxshadow"}

After the subscription is completed, select the subject of the subscription, and then you can see the data reported by GL-S10.

![aws subscript topic data show](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/gl-s10_aws_configuration/aws_subscript_topic_data_show.png){class="glboxshadow"}

---

Still have questions? Visit our [Community Forum](https://forum.gl-inet.com){target="_blank"}.
