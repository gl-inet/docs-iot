# Bluetooth Development Guide

## Introduction

This document is intended to guide S200 users in configuring and using the Bluetooth function within the [glbuilder](https://github.com/gl-inet/glbuilder) project.


## Bluetooth Configuration

Before configuring the Bluetooth function, first inquire about the storage path of the configuration file and understand the functions of each configuration option:

Path to Bluetooth configuration file: `/etc/config/gl_ble_d`

<img src="https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s200/bluetooth/s200_ble_config_1.png">

### basic_scan_param

```shell
config scan 'basic_scan_param'
        option scan_type 'passive'
        option scan_interval_time '16'
        option scan_window_time '16'
        option scan_phy '1'
        option enable '0'
```

- **scan_type**: switching between **active** or **passive** scanning.
- **scan_interval_time**: the interval between the start times of two consecutive scan windows.
- **scan_window_time**: the width of time to perform a scan.
- **scan_phy**: If coded phy is selected, traditional broadcast packets cannot be scanned.
- **enable**: The switch to enable basic_scan, set to '1' if turned on, and set to '0' if turned off.

### legacy_scan_param & extended_scan_param

```shell
config scan 'legacy_scan_param'
        option enable '0'
        option rssi_threshold '-100'
        option mac_filter_enable '0'
        option raw_data_filter_enable '0'
        option mac_filter_path '/etc/ble_list/legacy_ble_filter_list/mac_list.json'
        option raw_data_filter_path '/etc/ble_list/legacy_ble_filter_list/raw_data_list.json'
        
config scan 'extended_scan_param'
        option enable '0'
        option rssi_threshold '-100'
        option mac_filter_enable '0'
        option raw_data_filter_enable '0'
        option mac_filter_path '/etc/ble_list/extended_ble_filter_list/mac_list.json'
        option raw_data_filter_path '/etc/ble_list/extended_ble_filter_list/raw_data_list.json'
```

- **enable**: The enabling switch is set to 1 when turned on and set to 0 when turned off.
- **rssi_threshold**: If you set the threshold, the gateway will only report data from devices whose signal strength is greater than the value.
- **mac_filter_enable**: If the switch is on, the configuration in the MAC filter will take effect. If the switch is off, the configuration in the filter will be disabled.
- **raw_data_filter_enable**: If the switch is on, the configuration in the raw data filter will take effect. If the switch is off, the configuration in the filter will be disabled.
- **mac_filter_path**: The path to store MAC filter configurations.
- **raw_data_filter_path**: The path to store raw data filter configurations.

### sync_param

```shell
config scan 'sync_param'
        option enable '0'
        option skip '0'
        option timeout '1000'
        option sync_list_path '/etc/ble_list/sync_list/sync_list.json'     
```

- **enable**: The enabling switch is set to 1 when turned on and set to 0 when turned off.
- **skip**: Maximum number of periodic advertising packets that can be skipped after successful reception.
- **timeout**: The maximum time allowed for successful reception, if this time is exceeded the sync will be lost.
- **sync_list_path**: The path to store sync lists.



## Change Bluetooth Default Configuration

### Method 1

Refer to the '[Add your own files](https://github.com/gl-inet/glbuilder/tree/main?tab=readme-ov-file#add-your-own-files)' method provided in the README of the glbuilder project, for example

1. Please get the **/etc/config/gl_ble_d** file in the S200 device file system via winscp tools.

2. You can modify gl_ded_d to set the Bluetooth scanning mode you want. For example, if you want to turn on Bluetooth scanning on your device and enable legacy mode, you need to make the following changes in the gl_ded_d file:
   ```shell
   config service 'ble'
           option enable '1'
           
   config scan 'basic_scan_param'
           option scan_type 'passive'
           option scan_interval_time '16'
           option scan_window_time '16'
           option scan_phy '1'
           option enable '0'
           
   config scan 'legacy_scan_param'
           option enable '1'
           option rssi_threshold '-100'
           option mac_filter_enable '0'
           option raw_data_filter_enable '0'
           option mac_filter_path '/etc/ble_list/legacy_ble_filter_list/mac_list.json'
           option raw_data_filter_path '/etc/ble_list/legacy_ble_filter_list/raw_data_list.json'
   ```

3. Create a files directory in the glbuilder project root directory and put your own files.
   ```shell
   mkdir -p files/etc/config
   ```

4. cp **gl_ble_d** file to **files/etc/config**.

5. Change the **gl_ble_d** file permission.
   ```shell
   chmod 775 files/etc/config/gl_ble_d
   ```

6. Compile the firmware again.
   ```shell
   make
   ```

The firmware compiled in this way can see the **gl_ble_d** file in the **/etc/config/** directory in the file system. Please ensure that the configuration parameters are correct and complete, otherwise it will cause the Bluetooth function to fail to work properly!

#### Method 2

To log in to your device via SSH, use the `uci` command to configure Bluetooth functionality, for example:

This command will set the enable option in the basic_scan_param configuration section of the gl_ble_d configuration file to 1.

```shell
uci set gl_ble_d.basic_scan_param.enable=1
```

This command will save all changes made to the gl_ble_d configuration file onto the disk.

```shell
uci commit gl_ble_d
```

Additionally, please be cautious when directly editing configuration files or using the `uci` command to avoid accidentally overwriting or deleting important configurations. It is advisable to back up the original configuration file before making any changes.
