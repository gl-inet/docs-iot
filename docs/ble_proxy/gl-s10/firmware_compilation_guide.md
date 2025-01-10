# GL-S10 Firmware Compilation Guide

This doc is intended to help users set the software building environment and build your own applications for GL-S10.
 As an example, we build a simple demo. It  aims to recieve iBeacons from around and then send it to specified MQTT  broker through WiFi. Note that WiFi and MQTT setting is written in the  source code.

## Set Develop Environment

GL-S10 application is base on Espressif esp-idf(v4.2). You can get  the detailed steps of building the compile environment by following the  link. https://docs.espressif.com/projects/esp-idf/en/release-v4.2/esp32/get-started/index.html *(Attention: Please check the version of IDF before you download it.)* After configuring the develop environment, decompress and get into the source code folder `ble_ibeacon/`. Most code is in the file `ibeacon_demo.c`.

## Modify source code

**1. Modify BLE setting**

Find contents as below in the `examples/bluetooth/bluedroid/ble/ble_ibeacon/main/ibeacon_demo.c` and modify the BLE setting to what you want.

Set your scanning parameters:

```c
#if (IBEACON_MODE == IBEACON_RECEIVER)
static esp_ble_scan_params_t ble_scan_params = {
    .scan_type              = BLE_SCAN_TYPE_ACTIVE,
    .own_addr_type          = BLE_ADDR_TYPE_PUBLIC,
    .scan_filter_policy     = BLE_SCAN_FILTER_ALLOW_ALL,
    .scan_interval          = 0x50,
    .scan_window            = 0x30,
    .scan_duplicate         = BLE_SCAN_DUPLICATE_DISABLE
};
```

Get your scan results:

```c
case ESP_GAP_BLE_SCAN_RESULT_EVT: {
        esp_ble_gap_cb_param_t *scan_result = (esp_ble_gap_cb_param_t *)param;
        switch (scan_result->scan_rst.search_evt) {
        case ESP_GAP_SEARCH_INQ_RES_EVT:
            /* Search for BLE iBeacon Packet */
            if (esp_ble_is_ibeacon_packet(scan_result->scan_rst.ble_adv, scan_result->scan_rst.adv_data_len)){
                esp_ble_ibeacon_t *ibeacon_data = (esp_ble_ibeacon_t*)(scan_result->scan_rst.ble_adv);
                ESP_LOGI(DEMO_TAG, "----------iBeacon Found----------");
                esp_log_buffer_hex("IBEACON_DEMO: Device address:", scan_result->scan_rst.bda, ESP_BD_ADDR_LEN );
                esp_log_buffer_hex("IBEACON_DEMO: Proximity UUID:", ibeacon_data->ibeacon_vendor.proximity_uuid, ESP_UUID_LEN_128);

                uint16_t major = ENDIAN_CHANGE_U16(ibeacon_data->ibeacon_vendor.major);
                uint16_t minor = ENDIAN_CHANGE_U16(ibeacon_data->ibeacon_vendor.minor);
                ESP_LOGI(DEMO_TAG, "Major: 0x%04x (%d)", major, major);
                ESP_LOGI(DEMO_TAG, "Minor: 0x%04x (%d)", minor, minor);
                ESP_LOGI(DEMO_TAG, "Measured power (RSSI at a 1m distance):%d dbm", ibeacon_data->ibeacon_vendor.measured_power);
                ESP_LOGI(DEMO_TAG, "RSSI of packet:%d dbm", scan_result->scan_rst.rssi);
            }
            break;
```

**2. Modify WiFi setting**

If you want to enable wifi sta mode, transplant code from `examples/wifi/fast_scan/main/fast_scan.c` and modify the WiFi setting to what you want.

```c
wifi_config_t wifi_config = {
    .sta = {
        .ssid = "WIFI SSID", //
        .password = "WIFI password",
    },
};
```

**3. Modify MQTT setting**

Similar with WiFi setting. Transplant code from `examples/protocols/mqtt/tcp/main/app_main.c` and modify the struct `esp_mqtt_client_config_t` to what you want.

```c
esp_mqtt_client_config_t mqtt_cfg = {
    .uri = "mqtt://192.168.100.174:61613",//IP:port
    .usernaem = "MQTT username",
    .password = "MQTT password",
    .event_handle = mqtt_event_handler,
};
```

*(If you want to connect to MQTT broker except tcp, change the url prefix.)*

```
tcp ---> mqtt://
tcp-ssl ---> mqtts://
web socket ---> ws://
web socket secure ---> wss://
```

Here to publish your data:

```c
esp_mqtt_client_publish(client, "/topic/qos0", "data", data_length, qos, retain);
```

## Compile and Flash

**1. Configuration**

Before compile the application, get into your project folder *(here is `ble_ibeacon/`)*, using command `idf.py menuconfig` to configure some basic setting like serial port.
 In the configuration inteface, you just need to change three point as follow.
 Firstly, click `Serial flasher config`.

![espressif iot development framework configuration](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/firmware_compilation_guide/serial_flasher_config.png){class="glboxshadow"}

Then modify the three point marked by red line.

![espressif iot development framework configuration serial flasher config](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/firmware_compilation_guide/serial_flasher_mode.png){class="glboxshadow"}

Set `Default serial port` to the port name show in your PC, typically is `/dev/ttyUSB0`.
Set `Serial flasher config --->Flash SPI speed` to `80MHz`.
Set `Serial flasher config --->Flash size` to `4MB`.

**2. Build**

In your project folder, using command `idf.py build`. It will compile and build the firmware. When finished sucessfully, it will show information like this.

![compile and build firmware](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/firmware_compilation_guide/build.png){class="glboxshadow"}

**3. Flash**

GL-S10 using UART to flash the firmware, and also using this UART to output the system log. Connect the UART in S10 to the PC by a USB-TTL converter. The PC will find a new usb device like `/dev/ttyUSB0`. 

![gl-s10 pcb](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/hardware/gl-s10-pinout.jpg){class="glboxshadow"}

After connect S10 UART to the PC, using command `make flash` or `make flash monitor` to flash the firmware. When shows like that, it means the PC is waiting S10 to get into "download mode".

![wait flash](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/firmware_compilation_guide/flash.png){class="glboxshadow"}

How to get into "download mode", do in this way. Unplug the S10 power, press the flash button(GPIO0 Mode Button do not release) and then plug in the power. When it shows like that,

![flash](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/firmware_compilation_guide/flash_result.png){class="glboxshadow"}

means flash starts sucessfully, then you can release the flash button and wait for the flash finished.
When flash has been finished, restart the GL-S10.

## Result

If you have connect the S10 UART to the PC, using command `idf.py monitor -p /dev/ttyUSB0`, it will print all the system log like that. *(here shows the iBeacon data it recieved)*

![system log result](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/firmware_compilation_guide/system_log_result.png){class="glboxshadow"}

In the MQTT broker, You can get the messages published by S10 like that.

![messages published result](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/firmware_compilation_guide/messages_published_result.png){class="glboxshadow"}

---

Still have questions? Visit our [Community Forum](https://forum.gl-inet.com){target="_blank"}.