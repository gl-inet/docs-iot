# AWS Configuration Guide

## Introduction

In addition to our standard firmware, we have released a dedicated firmware for AWS IoT to meet the needs of our users. The AWS IoT firmware is built upon the standard firmware and only differs in the cloud platform used for reporting data, all other functions remain unchanged.

## Preparation

### Determining the Firmware Type

To identify if your GL-S10 is running the AWS IoT firmware, navigate to the Manage Device page of the [GL-S10 Tool App](https://www.gl-inet.com/app/#download-app-s10). If the model has **AWS** at the end, it indicates that the device is using the AWS IoT firmware.

![gl-s10 firmware type](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/firmware_type.png){class="glboxshadow"}

### Device Network Configuration

When the GL-S10 is configured with both Wi-Fi and an Ethernet cable, it will prioritize the wired connection by default. If you need to connect wirelessly, remove the Ethernet cable first.

* Ethernet Networking

    Connect the device directly to the WAN port of the GL-S10 using an Ethernet cable. Wait until the network indicator light is on, indicating that the device is connected to the network.

    ![network led status](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/network_led_status.png){class="glboxshadow gl-50-desktop"}

* WiFi Networking

    Open the GL-S10 Tool App, locate the WiFi option, and click on it.

    ![WiFi setting entrance](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/wifi_setting_entrance.png){class="glboxshadow"}

    On the Connect Wi-Fi page, select the desired Wi-Fi network from the list. If no networks are listed, click "Scan Wi-Fi" to search for nearby networks again.

    ![WiFi setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/wifi_setting.png){class="glboxshadow gl-50-desktop"}

After configuring the network, restart the GL-S10. If the network indicator blinks, the device is successfully connected to the network.

## OTA Upgrade to AWS IoT Dedicated Firmware

If your device is not running the AWS IoT dedicated firmware, you will need to upgrade to the AWS IoT dedicated version.

!!! Note

    Before starting the OTA upgrade, ensure that the device is connected to the network. If not, please follow the device network configuration section to connect the device.

Once the device is online, open the GL-S10 app, navigate to the main page, locate the "Upgrade OTA" option, and click on it.

![ota setting entrance](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/ota_setting_entrance.png){class="glboxshadow gl-50-desktop"}

On the Upgrade OTA page, click "aws" and then "Upgrade OTA".

![ota setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/ota_setting.png){class="glboxshadow gl-50-desktop"}

After pressing "Upgrade OTA", the app will enter a waiting state and exit the page once the upgrade is complete. During the OTA process, the GL-S10's indicator light will blink sequentially like a flow light until the upgrade finishes.

![upgrade loading](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/upgrade_loading.png){class="glboxshadow gl-50-desktop"}

## AWS IoT Core Cloud Platform Configuration

Before configuring, ensure that your account has access to AWS IoT Core services. Refer to the [AWS Official Documentation](https://docs.aws.amazon.com/iot/latest/developerguide/setting-up.html){target="_blank"} for more information.

***Create an item***

1. Log into the AWS Management Console and search for IoT Core

    ![iot core entrance](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/iot_core_entrance.png){class="glboxshadow"}

2. Manage -> All devices -> Things, and click "Create things"

    ![create things](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/create_things.png){class="glboxshadow"}

3. Select "Create single thing" and click "Next" button.

    ![create single things](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/create_single_things.png){class="glboxshadow"}

4. Enter a name for the thing and click "Next"

    ![thing name setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/thing_name_setting.png){class="glboxshadow"}

5. Select "Auto-generate a new certificate" (or use "Use my certificate" if you already have one) and click "Next"!

    ![device certificate](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/device_certificate.png){class="glboxshadow"}

6. Click "Create policy"

    ![create policy](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/create_policy.png){class="glboxshadow"}

7. Enter a policy name and click "JSON"

    ![policy name](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/policy_name.png){class="glboxshadow"}

8. Add the following fields to the Policy document

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

        In the resource ARN `"arn:aws:iot:ap-southeast-1:123456789012:client/E8DB841E2B0E"`, the field after `client/` is the client ID of the end device. Only MQTT clients configured with this client ID can connect. Replace `"123456789012"` with your AWS account ID.

9. Click "Create"

    ![policy create apply](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/policy_create_apply.png){class="glboxshadow"}

10. Return to the "Attach policies to certificate" page, select the policy you just created, and click "Create thing"

    ![attach policy to certificate](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/attach_policy_to_certificate.png){class="glboxshadow"}

11. In the pop-up window, click to download the device certificate, public key file, private key file, and root CA certificate (RSA 2048)

    ![download certificate](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/download_certificate.png){class="glboxshadow"}

    The relevant certificates must be securely stored and used by end devices when connecting to AWS.

12. You can view the information about the newly created thing on the Things page

    ![thing info show](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/thing_info_show.png){class="glboxshadow"}

## Updating Security Certificates on the GL-S10

!!! Note

    Before starting, ensure that the device is connected to the network. If not, please connect the device according to the "Device Network Configuration" section.

Open the GL-S10 Tool App, locate the "MQTT Server" option, and click on it.

![gl-s10 mqtt setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/gl-s10_mqtt_setting.png){class="glboxshadow gl-50-desktop"}

On the MQTT Configuration page, click "Update Certificate".

![gl-s10 mqtt cetificate setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/gl-s10_mqtt_cetificate_setting.png){class="glboxshadow gl-50-desktop"}

On the Update MQTT Configuration page, enter the URL `http://134.175.4.252/s10/cert/mqtt_aws/` and click "Done" to begin updating the certificate.

!!! Note

    This URL points to the matching certificate for our demo. If you have your own certificates, please name the three files as follows: **ca.crt** (root certificate), **client.crt** (client certificate), and **client.key** (client private key). After renaming, place these files in a folder on your HTTP server. In this example, I used a folder named **mqtt_aws**.

The app will return to the MQTT Configuration page after the update.

## Configuring MQTT Settings on the GL-S10

First, obtain your MQTT server address as shown below:

![aws connect url](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/aws_connect_url.png){class="glboxshadow"}

Set the host and port, then click "Done".

![gl-s10 aws connect url setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/gl-s10_aws_connect_url_setting.png){class="glboxshadow gl-50-desktop"}

## Viewing Data Reported by the GL-S10 on the AWS IoT Core Platform

First, use the app to check the topic for reporting data. Remember that the device is currently reporting to the topic `GL-IoT/dataTopic/E8DB841E2B0E`.

![gl-s10 report topic setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/gl-s10_report_topic_setting.png){class="glboxshadow gl-50-desktop"}

On the AWS IoT page, click Test -> MQTT test client -> Subscribe to a topic -> Enter `GL-IoT/dataTopic/E8DB841E2B0E` and click "Subscribe".

![aws subscribe topic setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/aws_subscribe_topic_setting.png){class="glboxshadow"}

After subscribing, select the subscribed topic, and you will see the data reported by the GL-S10.

![aws subscript topic data show](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/aws_configuration_guide/aws_subscript_topic_data_show.png){class="glboxshadow"}

---

Still have questions? Visit our [Community Forum](https://forum.gl-inet.com){target="_blank"}.
