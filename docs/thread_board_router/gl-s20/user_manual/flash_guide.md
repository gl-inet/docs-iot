# GL-S20 Flash Guide

## Tools Required

GL-S20 Device

Windows PC

Flash Download Tool, and GL-S20 firmware file

## Connect devices

Connect the GL-S20 to your computer via USB Type-C.

![s20_flash_guide_wiring](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_wiring.png)

Open the device manager and check the serial number of CH340 device.

![s20_flash_guide_serial](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_serial.png)

## Download flash tool

You can download the latest [esp32_flash_tool](https://www.espressif.com/en/support/download/other-tools) from the official website.

![s20_flash_guide_flash_download_tools](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_flash_download_tools.png)

## Flash firmware

### 1.Extract flash_download_tool, and execute flash_download_tool.exe.

![s20_flash_guide_program](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_program.png)

### 2.Select ESP32-S3,then click OK.

![s20_flash_guide_chip](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_chip.png)

### 3.Flash bin file

First, select serial port then erase the firmware.

​						![s20_flash_guide_erase](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_erase.png)

There are two kinds of flash situations：

- A. Multi-bin flash

There are generally 6 types of bins here, and each bin is assigned a properly flashed start address.

**Note: If it is the BLE gateway version of the device, the web application firmware cannot be set up.**

| Type                       | Bin file             | Flash address |
| -------------------------- | -------------------- | ------------- |
| Bootstrap program          | bootloader.bin       | 0x0           |
| Partition table            | partition-table.bin  | 0x8000        |
| Application upgrade by ota | ota_data_initial.bin | 0x109000      |
| S3 Application firmware    | app.bin              | 0x110000      |
| H2 Application firmware    | rcp_fw.bin           | 0xb10000      |
| Web Application firmware   | web_storage.bin      | 0x710000      |

otbr:

![s20_flash_guide_otbr_multi_bin](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_otbr_multi_bin.png)

ble:

​	         ![s20_flash_guide_ble_multi_bin](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_ble_multi_bin.png)

- B. Combine bin flash.

Combine bin flash address is 0x0, flash as follow:

otbr:

![s20_flash_guide_otbr_combine_bin](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_otbr_combine_bin.png)

ble:

![s20_flash_guide_ble_combine_bin](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_ble_combine_bin.png)

After completing the flash configuration, click start to flash:

![s20_flash_guide_flash_start](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_flash_start.png)

After successful flashing, it will display:

![s20_flash_guide_done](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/s20_flash_image/s20_flash_guide_done.png)

The GL-S20 will work normally after reboot the device.