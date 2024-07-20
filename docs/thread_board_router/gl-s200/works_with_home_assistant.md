# Works with Home Assistant

## Requirement

- [GL.iNet GL-S200](https://www.gl-inet.com/products/gl-s200/) 
- [homeassistant-2024.5.2](https://github.com/home-assistant/core/releases/tag/2024.5.2) 
- [python-matter-server-5.10.0](https://github.com/home-assistant-libs/python-matter-server/releases/tag/5.10.0) 
- The test phone is Android 13
  - Search Google Play services and CLEAR ALL DATA
  - Uninstall Google Home and Re-install Google Home.


## Create Thread network

Login to the GL-S200 and open THREAD MESH page, Click `Enable` button to start a default Thread Network.

![image-20240507120243944](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/works_with_home_assistant/image-20240507120243944.png){class="glboxshadow"}

This test uses [Scenario 2](https://docs.gl-inet.com/iot/en/thread_board_router/gl-s200/openthread_border_router_codelabs/#scenario-2-indirect-connection), so we set the Backbone Router Interface to `eth0`.

![image-20240507120528255](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/works_with_home_assistant/image-20240507120528255.png){class="glboxshadow"}

And open the port `8081` in **SYSTEM**->**Security**. Now, we can use GL-S200 as the OpenThread Border Router for Home Assistant.

![image-20240507120846125](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/works_with_home_assistant/image-20240507120846125.png){class="glboxshadow"}

## Add OpenThread Border Router INTEGRATION

Search openthread on Home Assistant and add integration.

![image-20240507122340920](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/works_with_home_assistant/image-20240507122340920.png){class="glboxshadow"}

And enter the management address of the GL-S200.

![image-20240507122651493](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/works_with_home_assistant/image-20240507122651493.png){class="glboxshadow"}

![image-20240507122605659](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/works_with_home_assistant/image-20240507122605659.png){class="glboxshadow"}

Open Thread integration and CONFIGURE GL-S200 as Preferred network.

![image-20240507122926995](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/works_with_home_assistant/image-20240507122926995.png){class="glboxshadow"}

![image-20240507123041496](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/works_with_home_assistant/image-20240507123041496.png){class="glboxshadow"}

## Sync Thread credentials

For Android Companion APP, Settings->Companion app->Troubleshooting->Sync Thread credentials.

![image-20240507142157386](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/works_with_home_assistant/image-20240507142157386.png){class="glboxshadow"}

## ADD Matter device

For Android Companion APP, ADD INTEGRATION->Add Matter device->Scan Matter QR code.

Wait for a while and the device is successfully connected.

![connected](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/works_with_home_assistant/connected.jpg){class="glboxshadow gl-60-desktop"}

---

Still have questions? Visit our [Community Forum](https://forum.gl-inet.com){target="_blank"}.
