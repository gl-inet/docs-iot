# How to use GL.iNet Thread Development Boards with GL-S20

To use GL.iNet Thread Development Boards with GL-S20, you will need these devices: 

- A GL-S20 Thread Border Router
- At least two GL.iNet Thread Development Boards

Once you have these devices ready, follow the steps below.

## 1. Set up a Thread network

1. Power on the GL-S20.

2. Connect the WAN port of the GL-S20 and the LAN port of an upstream device, such as a modem, using an ethernet cable.

3. On a web browser, enter `http://gl-s20-otbr/` in the address bar. (If your GL-S20 is connected to an upstream device, enter the upstream device's IP address. Ensure they are on the same network.)

4. From the left sidebar, click **Thread Mesh** > **Thread Network**.

5. Click **Manual Setup**. 

      ![control TDB](https://static.gl-inet.com/docs/iot/en/iot_dev_board/using_tdb_on_gl-s20/S20-TDB-01.png){class="glboxshadow"}

6. Click **Generate** > **Apply**. 

      ![control TDB](https://static.gl-inet.com/docs/iot/en/iot_dev_board/using_tdb_on_gl-s20/S20-TDB-02.png){class="glboxshadow"}

7. Wait for a while until the word "Leader" appears next to the name of your GL-S20.

      ![control TDB](https://static.gl-inet.com/docs/iot/en/iot_dev_board/using_tdb_on_gl-s20/S20-TDB-03.png){class="glboxshadow"}

## 2. Commission the Thread Development Boards into the GL-S20's Thread network

1. From the left sidebar, click **Thread Commissioning**.

2. Click **Start**. The Thread LED on your GL-S20 will start blinking in orange. 

      ![control TDB](https://static.gl-inet.com/docs/iot/en/iot_dev_board/using_tdb_on_gl-s20/S20-TDB-04.png){class="glboxshadow"}

3. Under "Joiners," click **Add**. 

4. Enter the following information:

      - **Joiner EUI-64**: Enter *. This allows any Thread Development Boards to join the Thread network. (To add a specific board, enter the EUI-64 of the board.)
      - **Joiner Credential**: Enter **AAAAAA**.

5. Click **Apply**. 

      ![control TDB](https://static.gl-inet.com/docs/iot/en/iot_dev_board/using_tdb_on_gl-s20/S20-TDB-05.png){class="glboxshadow"}

6. Press the SW2 on each Thread Development Board you added. The LED will blink in green. (The board is entering commissioning mode.)

7. Wait for a few seconds until the green LED stops blinking. (When the LED becomes static, the board has been commissioned into the Thread network.)

## 3. Test the Thread Development Boards on the Thread network

1. Long press the SW1 on each Thread Development Board you added for about 3 seconds. The Thread Development Boards will enter the demo mode.

2. Use the rotary knob to control the RGB LED of other Thread Development Boards on the same thread network:
      - To turn on or off the RGB LED: Press down the rotary knob. 
      - To change the RGB LED colors: Rotate the rotary knob. 
