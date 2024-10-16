# GL-S20-TBR Firmware Compilation Guide

This document introduces how to set develop environment and how to build a simple Thread Border Router(TBR) firmware for GL-S20 hardware.

## Set Develop Environment

The Thread Border Router(TBR) firmware for GL-S20 is based on **Espressif  ESP-IDF(v5.1.3)**. You can get the details about [how to set ESP-IDF develop environment](https://docs.espressif.com/projects/esp-idf/en/v5.1.3/esp32/get-started/index.html) on Espressif's official guide.

*Please check your ESP-IDF version is v5.1.3 excatly.*

## Build Thread Border Router Firmware

### Code Preparation

1. Clone esp-thread-br codes from github.

   ```bash
   $ git clone -b v1.0 https://github.com/espressif/esp-thread-br.git 
   ```

2. Modify some configurations to adapt to GL-S20 hardware.

   ```bash
   cd esp-thread-br/examples/basic_thread_border_router
   idf.py set-target esp32s3
   idf.py menuconfig
   ```

   - Component config  --->ESP System Settings  --->CPU frequency (160 MHz)  --->240 MHz

   - Component config  --->ESP System Settings  --->Channel for console output (USB Serial/JTAG Controller)  --->Default: UART0

   - Component config  ---> Wireless Coexistence  --->External Coexistence

   - Serial flasher config  --->Flash size (4MB)  --->16 MB

   - ESP Thread Border Router Example  --->Board Configuration

     ```
     (2) Pin to RCP reset
     (3) Pin to RCP boot
     (8) Pin to RCP TX
     (48) Pin to RCP RX
     ```
   
- ESP Thread Border Router Example  --->Enable the automatic start mode in Thread Border Router
  
- ESP Thread Border Router Example  --->Enable the web server in Thread Border Router
  
- ESP Thread Border Router Example  --->External coexist wire type and pin config
  
  ```
  (3) The wire_type of external coexist
  (40) The number of external coexist request pin
  (42) The number of external coexist grant pin
  (41) The number of external coexist priority pin
  (45) The number of external coexist tx_line pin
  ```
  
- Example Connection Configuration  --->
  
     - If you want to use Wi-Fi to connect to Internet, choose "*connect using WiFi interface*" and set wifi ssid and password.

     - If you want to use eth to connect to Internet, you are only allowed to choose *"connect using Ethernet interface"* and do these setting.

       ```
         [ ] connect using WiFi interface
         [*] connect using Ethernet interface
         (2048) emac_rx task stack size
         	   Ethernet Type (DM9051 Module)  --->
         (1)  SPI Host Number
         (12) SPI SCLK GPIO number
         (11) SPI MOSI GPIO number
         (13) SPI MISO GPIO number
         (10) SPI CS GPIO number
         (20) SPI clock speed (Mhz)
         (4)  Interrupt GPIO number
         (5)  PHY Reset GPIO number
         (1)  PHY Address
         [*] Obtain IPv6 address
         		Preferred IPv6 Type(Local Link Address)   --->
       ```

     
   
   - Component config  --->ESP PSRAM  --->Support for external, SPI-connected RAM
   
     - SPI RAM config  --->Mode (QUAD/OCT) of SPI RAM chip in use (Quad Mode PSRAM)  --->Octal Mode PSRAM
     - Set RAM clock speed (40Mhz clock speed)  --->80MHz clock speed
   
   - Component config  --->OpenThread 
   
     - (2)     The size of max commissioning joiner entries  --->  (50)     The size of max commissioning joiner entries 
     - [  ]  Allocate message pool buffer from PSRAM (NEW)  ---> [*] Allocate message pool buffer from PSRAM (NEW) 
     - (65) The number of openthread message buffers ---> (2048) The number of openthread message buffers
     - (10) The size of max MLE children entries ---> (32) The size of max MLE children entries
     - [  ] Enable link metrics feature ---> [*] Enable link metrics feature 
     - [  ] Enable Domain Unicast Address feature ---> [*] Enable Domain Unicast Address feature



### Compile Firmware

1. Firstly, in the terminal where you are going to use ESP-IDF, run:

   ```bash
   $ . esp-idf/export.sh
   ```

2. Then, compile ot_rcp firmware for Thread Border Router firmware.

   ```bash
   $ cd esp-idf   ## navigate to esp-idf folder
   $ cd examples/openthread/ot_rcp ## navigate to ot_rcp folder
   $ idf.py set-target esp32h2
   $ idf.py build
   ```

3. Finally, navigate to esp-thread-br folder and build Thread Border Router firmware.

   ```bash
   $ cd esp-thread-br
   $ cd examples/basic_thread_border_router
   $ idf.py build
   ```



## Burn Firmware into GL-S20

1. Connect GL-S20 to your PC via Type-C cable.

2. Find out the uart port of your GL-S20, it would be "*ttyUSB0*" generally.

3. Running the command to burn firmware.

   ```bash
   $ cd esp-thread-br/examples/basic_thread_border_router
   $ idf.py -p /dev/ttyUSB0 flash monitor
   ```

---

Still have questions? Visit our [Community Forum](https://forum.gl-inet.com){target="_blank"}.
