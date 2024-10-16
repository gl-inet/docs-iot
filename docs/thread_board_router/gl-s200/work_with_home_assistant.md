# Enable Matter over Thread for Home Assistant

## Overview

This user guide will guide you through the journey covering the most step you need to enable Matter over Thread feature for Home Assistant.

## Requirements

### Hardware Requirements

Android Phone

GL-S200 Thread Border Router

Matter over Thread Smart Home Device

Home Assistant Host that running ++Home Assistant OS++

It is recommended to run the Matter add-on on Home Assistant OS. If you run Home Assistant in a container, you can run a Docker image of the [Matter server](https://github.com/home-assistant-libs/python-matter-server). The requirements and instructions for your host setup are described on that GitHub page.

### Software Requirements  

GL Router firmware 4.5 or later

Home Assistant 2023.2 or later

Phone with Google Play Services running Android 8.1 or higher

## Setting Up

### Setting up GL-S200 Thread Border Router

Thread Mesh Network is disable by default on GL-S200, you need to enable it by following steps.

Open **GL-S200 Web Admin Panel > THREAD MESH > Thread Network**, and click **Enable**.

If you want to modify Thread Network configuration, you can follow [this instruction](https://docs.gl-inet.com/iot/en/thread_board_router/gl-s20/user_manual/#manual-setup).

Then, based on your network topology, select the corresponding Backbone Router Interface at **GL-S200 Web Admin Panel > THREAD MESH > Advanced > Backbone Router > Backbone Interface**.

*   If your Home Assistant Host is on GL-S200's **LAN** side(no matter wired or wireless), select "**br-lan**", click apply to take effect.
    

![home_assistant_host_on_gl-s200_lan.png](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/enable_matter_over_thread_for_home_assistant/home_assistant_host_on_gl-s200_lan.png)

*   If your Home Assistant Host is on GL-S200's **WAN** side, select "**eth0**"(using wired WAN) or "**wlan-sta0**"(using repeater mode), click apply to take effect.
    

![home_assistant_host_on_gl-s200_wan_wired.png](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/enable_matter_over_thread_for_home_assistant/home_assistant_host_on_gl-s200_wan_wired.png)![home_assistant_host_on_gl-s200_wan_wireless.png](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/enable_matter_over_thread_for_home_assistant/home_assistant_host_on_gl-s200_wan_wireless.png)

If your Home Assistant Host is on the **WAN** side of GL-S200,  to enable Home Assistant access GL-S200. Navigate to **SYSTEM** > **Security** > **Open Ports On Router**, add port 8081, protocol TCP/UDP.

### Installing the Open Thread Border Router and Thread Intergration

The Open Thread Border Router integration allows Home Assistant to acess Open Thread Border Router.

To install this integration, navigate to **Home Assistant > Settings > Devices & Services > Add Intergration** and search for **Open Thread Border Router**, submit the url like below.

:::
http://**YOUR\_GL-S200\_IP\_ADDRESS**:8081

(replace "**YOUR\_GL-S200\_IP\_ADDRESS**" with GL-S200's IP address)s
:::

Then click **Add Intergration** again, search for **Thread**, select it and click **FINISH**, enter **Thread** Intergrations, click **CONFIGURE** and make sure you have S200‘s Thread network under **Preferred network** line, and it contains an icon with **key+phone**. If not, do the following:

Click **three dots** on the right to OpenThread Border Router, choose **Add to preferred network**.

Under the **preferred network** now, click again **three dots** on the right to OpenThread Border Router, and choose **Use router for Android + iOS credentials**.

### Installing the Matter Server Add-On and Matter Intergration

To set up Home Assistant to manage Matter devices, we need the **Matter Server** add-on.

For this, navigate to **Home Assistant > Settings > Add-Ons > Add-On Store** and search for **Matter server**, select it and follow the instructions to comple.

After the Matter server is correctly installed, navigate to **Home Assistant >** **Settings > Devices & Services > Add Integration** and search for **Matter(BETA)**.

A prompt will show up asking for a connection method. If you are working with custom containers running the Matter server, uncheck the box.

In our case, we leave it checked as the Matter server is running in Home Assistant. You will receive a **Success** message if everything is installed.

**Sync Thread Credentials**

Update Thread network credentials from Home Assistant to your phone provide to matter commissioning process.

Open Android **Companion APP > Settings > Companion app > Troubleshooting > Sync Thread credentials**.

If you get a "Added network from Home Assistant to this device", then you are good to go.

Otherwise, you will need to clear all the data of Google Play Services then try again.

### Commission End Devices

Before you start commission end devices in Home Assistant app, you need to install Google Home app in Play Store, it is recommended by Home Assistant developers and you'll not able to pair Matter over Thread devices without installed Google Home app.

To commission your device, open the Home Assistant app on your smartphone, go to **Home Assistant > Settings > Devices & Services**, in the lower tabs bar, go to **Devices** and tap on **Add Device**, tap on **Add Matter device**.

After you turn the End Devices in Commission mode, scan the Matter QR code on the End Devices. 

### Reference

[https://www.home-assistant.io/integrations/otbr/](https://www.home-assistant.io/integrations/otbr/)

[https://www.home-assistant.io/integrations/thread/](https://www.home-assistant.io/integrations/thread/)

[https://www.home-assistant.io/integrations/matter/](https://www.home-assistant.io/integrations/matter/)