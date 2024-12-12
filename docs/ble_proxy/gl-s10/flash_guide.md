# GL-S10 Flash Guide

## Download the flash tool

You can download the latest [flash tool](https://www.espressif.com/en/support/download/other-tools) from the official website.

![s10_flash_guide_flash_download_tools](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/s10_flash_image/s10_flash_guide_flash_download_tools.png)

## Connecting device

1. Prepare a USB-TTL tool, here we take ai-thinker USB-T1(CP2102) as example. [CP2102 driver link(**windows**)](https://docs.ai-thinker.com/_media/tools/serial_driver_windos.7z)

![s10_flash_guide_usb](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/s10_flash_image/s10_flash_guide_usb.png)

2. The distribution of flashing pins on the GL-S10 PCB is as follows.<img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/s10_flash_image/s10_flash_guide_pcb_1.png" alt="011" style="zoom: 80%;" />
3. Connect GL-S10 to computer via USB-TTL.

![s10_flash_guide_usb_ttl](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/s10_flash_image/s10_flash_guide_usb_ttl.png)

There are two kinds of s10 flashing way of connection :

- Complete connection

Use usb-ttl to connect all the pins shown above, then directly using the flash_download_tool.

- Simple connection

Use sub-ttl to connect *TX, Rx, GND*,  and holding the download button to start the download mode, then using the flash_download_tool.

Specific steps as shown below :

<img src="https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/s10_flash_image/s10_flash_guide_pcb_2.png" alt="011" style="zoom: 80%;" />

## Flash firmware

1. Extract flash_download_tool and execute flash_download_tool.exe.

![s10_flash_guide_program](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/s10_flash_image/s10_flash_guide_program.png)

2. Select ESP32 and click OK.

![s10_flash_guide_chip](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/s10_flash_image/s10_flash_guide_chip.png)

3. Flash bin files

- A. Multiple bin files flash

There are typically 5 types of bin, and each one has an appropriate flash start address.

| Type                       | Bin file                  | Flash address |
| -------------------------- | ------------------------- | ------------- |
| Bootstrap program          | bootloader/bootloader.bin | 0x00          |
| Dividing partition table   | partition-table.bin       | 0xa000        |
| Application upgrade by ota | ota_data_initial.bin      | 0xb000        |
| Application firmware       | gl-s10-v3_0_3.bin         | 0x40000       |

![s10_flash_guide_multi_bin](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/s10_flash_image/s10_flash_guide_multi_bin.png)

- B. Merge bin files flash

The address is 0x0000, as the folowing picture:

![s10_flash_guide_combine_bin](https://static.gl-inet.com/docs/iot/en/ble_proxy/gl-s10/user_manual/s10_flash_image/s10_flash_guide_combine_bin.png)

Finally, re-plug the power to make it work.