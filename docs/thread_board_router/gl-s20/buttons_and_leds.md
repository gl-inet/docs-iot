# **Buttons & LEDs**

GL-S20 has two buttons, IoT and Reset.

![s20btn](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/S20BTN.jpg){class="glboxshadow"}

## **IoT Button**

The IoT button allows you to perform these actions:

| Function               | Instruction                                                  |
| ---------------------- | ------------------------------------------------------------ |
| Join Thread network    | When the device is not connected to a Thread network, press and hold the IoT button for 2 seconds. Release the button when the IoT LED starts flashing green slowly. |
| Create Thread network  | When the device is not connected to a Thread network, press and hold the IoT button for 8 seconds. Release the button when the IoT LED starts flashing green slowly. |
| Start Commissioning    | When your device is connected to a Thread Network, press and hold the IoT button for 2 seconds. Release it when the IoT LED starts flashing yellow slowly. |
| Disable Thread network | When your device is connected to a Thread Network, press and hold the IoT button for 8 seconds. Release it when the IoT LED starts flashing yellow slowly. |

## **Reset Button**

| Reset button function                     | Instruction                                                  |
| ----------------------------------------- | ------------------------------------------------------------ |
| Reset Thread/Wi-Fi/Ethernet configuration | Press and hold the Reset button for 2 seconds. Release it when all 3 LEDs start flashing slowly. |
| Restore factory settings                  | Press and hold the Reset button for 8 seconds. Release it when all 3 LEDs start flashing rapidly. |

## **LED description**

![S20led](https://static.gl-inet.com/docs/iot/en/thread_board_router/gl-s20/user_manual/S20LED.jpg){class="glboxshadow"}

| Device Status              | Power LED            | IoT LED              | Network LED          |
| -------------------------- | -------------------- | -------------------- | -------------------- |
| System starting            | Green flashing       | -                    | -                    |
| Device not initialized     | Solid Yellow         | -                    | -                    |
| Firmware upgrading         | Fast Green flashing  | Fast Green flashing  | Fast Green flashing  |
| Restoring factory settings | Fast Yellow flashing | Fast Yellow flashing | Fast Yellow flashing |
| Repairing firmware         | Red flashing         | -                    | -                    |
| Device abnormality         | Solid Red            | Solid Red            | Solid Red            |


| Network Status                                     | Network LED  |
| -------------------------------------------------- | ------------ |
| Network connected                                  | Solid Green  |
| Network disconnected                               | Solid Red    |
| Network is connected but connectivity check failed | Solid Yellow |


| Thread Network Status                       | IoT LED         |
| ------------------------------------------- | --------------- |
| Thread Uninitialized                        | OFF             |
| Thread working normally                     | Solid Green     |
| Joining Thread network (Thread Router)      | Flashing Green  |
| Thread network disconnected (Thread Router) | Flashing Red    |
| Thread Commissioning enabled                | Flashing Yellow |





