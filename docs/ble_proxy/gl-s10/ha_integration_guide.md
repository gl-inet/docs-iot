# How to integrate GL-S10 into Home Assistant

## 1.Introduction

GL-S10(ESPhome) is a firmware version compiled with [ESPHome](https://esphome.io/guides/getting_started_hassio). 

GL-S10 can be used as a Bluetooth proxy to automatically discover surrounding Bluetooth devices and you can use S10 to easily integrate into your homeassistant.

## 2.Connecting your GL-S10

First, plug in the power cord and the power indicator will light up. Then watch for the network indicator light to start flashing, indicating that GL-S10-esphome is starting up normally.

Second, plug in the Ethernet cable and you're ready to configure the GL-S10 on the Home Assistant.

## 3.Install Home Assistant Operating System

The Home Assistant has given detailed [installation documentation](https://www.home-assistant.io/installation/) for various conditions.

## 4.Onboarding Home Assistant and integrate GL-S10

Make sure your GL-S10 and Home Assistant are connected to the same Internet band.

After successfully installing and booting the Home Assistant operating system, you can access Home Assistant by going to [homeassistant.local:8123](http://homeassistant.local:8123/). If you are using an older version of Windows or have a more restrictive network setup, you may need to access it at [homeassistant:8123](http://homeassistant:8123/) or `http://X.X.X.X:8123` (replace X.X.X.X with your ’s IP address).

For detailed onboarding instructions, [click here](https://www.home-assistant.io/getting-started/onboarding/).

When you reach the step shown in the image, you will see the gl-s10-bt-proxy option and can proceed to configure it.

The GL-S10 has been successfully added to your Home Assistant when you see the network indicator turn off.

![s10_discoverd](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/ha_integration_guide/s10_discoverd.png)

You can see it on the dashboard by Settings. 

![dashboard_setting](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/ha_integration_guide/dashboard_setting.png)

![dashboard_configuration](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/ha_integration_guide/dashboard_configuration.png)



