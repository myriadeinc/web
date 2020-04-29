import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Snippet } from '../common/Snippet.jsx';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import LandingFooter from './LandingFooter.jsx';

import '../../styles/components/landing/main.less';

function LinuxInstructions() {
    return (
        <>
            <Jumbotron className="w-75 mt-5 mx-auto">
                <h1>Installing XMRig on Ubuntu</h1>
                <h4 className="mb-5">A guide for absolute beginners</h4>

                <h3 className="mt-5">Making a bootable USB stick with Ubuntu</h3>
                <p>
                    For Windows users that do not have Ubuntu, you will need to create a bootable USB stick to begin installing Ubuntu. You can use a program called "UNetbootin" to create a bootable flash drive. It can be found here: https://unetbootin.github.io/.
                    </p>
                <p>
                    Go to http://releases.ubuntu.com/ and download the Ubuntu release you want. Myriade has been tested on 18.04, but you can use 16.04 on a much older computer if 18.04 just doesn't work.
                    </p>
                <p>
                    Once that file is downloaded, plug in the USB stick, open up UNetbootin, skip the top section where you select a distro and just go to the bottom where it says "Diskimage". Make sure ISO is selected, then click the three dots and find your Ubuntu download there.
                    </p>
                <p>
                    Verify you have the correct drive letter selected at the very bottom otherwise you might rewrite something you care about.  Press OK.
                    </p>
                <p>
                    Now you have a USB stick that a computer can boot linux from.
                    </p>

                <h3>Installing Ubuntu</h3>
                <p>
                    With your computer powered off, plug in your new USB stick and turn on the power. Get into your BIOS by pressing del, F2, F12, whatever your motherboard tells you during the few-seconds splash screen at start up. In there you should find an option to boot from your USB stick.
                    </p>
                <p>
                    Click the "Install Ubuntu" option once you boot from USB. Once that comes up, select "normal install" and select "download updates". You don't need 3rd part stuff so leave that unchecked. Follow the prompts. You can set want your computer name and everything to be simple and short in order to simplify things for yourself. Now select "Log In Automatically". If it doesn't work, check the section below.
                    </p>
                <p>
                    Finish the install, reboot, remove the USB.
                    </p>

                <h3>If Auto-Login Fails</h3>
                <p>
                    Press ctl-alt-t to open a Terminal.  We need to enable a timed login instead of auto-login. For some reason, this works.
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo nano /etc/gdm3/custom.conf`}
                </Snippet>
                <p>
                    Uncomment out the three "timed login" sections.  Delete the # sign in front of "TimedLogInEnable", "TimedLogIn", and "TimedLogInDelay".
                </p>
                <p>
                    Change the value of "TimedLogIn" to whatever your username is. Change the value of "TimedLogInDelay" from 10 to 1.
                </p>
                <p>
                    Save and exit by pressing: ctl-x, y, enter.
                </p>

                <h3>XMRig Install</h3>
                <p>
                    You can compromise your security a little in order to increase simplicity by removing the password requirement for "sudo" commands.  Do this by putting in the Terminal:
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo visudo`}
                </Snippet>
                <p>
                    Find the line that starts with "%sudo" and make it look like: %sudo ALL=(ALL) NOPASSWD: ALL
                </p>
                <p>
                    To install the XMRig, run the following in terminal:
                </p>
                <Snippet language="bash" style={atomOneDark} >
                    {`$sudo apt install -y build-essential cmake libuv1-dev libmicrohttpd-dev libssl-dev libhwloc-dev gcc-7 g++-7
$sudo apt install software-properties-common
$sudo add-apt-repository ppa:jonathonf/gcc-7.1
$sudo apt update && sudo apt upgrade -y
$sudo reboot`}
                </Snippet>
                <p>
                    Once back in (and you should have gotten in right away thanks to the auto login work around), in the terminal put:
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo git clone https://github.com/xmrig/xmrig.git
$cd xmrig
$sudo mkdir build
$cd build
$sudo cmake .. -DCMAKE_C_COMPILER=gcc-7 -DCMAKE_CXX_COMPILER=g++-7
$sudo make`}
                </Snippet>
                <p>
                    XMRig is now installed and should work, but we are missing the config file.
                </p>

                <h3>Configuration File</h3>
                <p>
                    Go to https://xmrig.com/wizard and fill in the shit and download the config.json file. Go to wherever it downloaded, probably downloads, by either going through the GUI windows or using the command:
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$cd /home/username/Downloads `}
                </Snippet>
                <p>
                    To copy it to where it needs to go so XMRig finds it we will do (starting in the folder where the downloaded file is):
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo cp config.json /home/username/xmrig/build`}
                </Snippet>
                <p>
                    Now it will move to the xmrig folder.  You can try just clicking and dragging or copy and pasting but I found I needed to be an administrator or super user or whatever and learning the copy command was easier. Navigate to:
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$cd /home/username/xmrig/build`}
                </Snippet>
                <p>
                    Execute XMRig for a minute so it populates the info in the config file.
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo ./xmrig`}
                </Snippet>
                <p>
                    Give it a few seconds, then press ctl-c (stops the process). Now edit the config:
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo gedit config.json`}
                </Snippet>
                <p>
                    Near the top, under "randomx", change "1gb-pages": false to "1gb-pages": true
                </p>
                <p>
                    Now scroll down and verify that all the personal information is correct.  For example, you may need to change your "rigid" to something because it starts blank and you would like for it to show up on nanopool.  Click save at the top.
                </p>

                <h3>Hugepages and 1GB Pages</h3>
                <p>
                    This step is based of these two guides: (https://medium.com/@tomas_savenas/30-increase-in-cpu-mining-hash-rate-by-enabling-huge-pages-8af5eedb7d62) (https://github.com/xmrig/xmrig/issues/1411):
                </p>
                <p>First for hugepages:</p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo bash -c "echo vm.nr_hugepages=1280 >> /etc/sysctl.conf"
$sudo -i
$sudo sysctl -w vm.nr_hugepages=$(nproc) 
$for i in $(find /sys/devices/system/node/node* -maxdepth 0 -type d);do    echo 3 > "$i/hugepages/hugepages-1048576kB/nr_hugepages";done
$sudo bash -c "echo vm.nr_hugepages=$(nproc) >> /etc/sysctl.conf"
$exit`}
                </Snippet>
                <p>Then for the 1gb pages:</p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo su
$sudo echo "vm.swappiness=0" >> /etc/sysctl.conf
$lscpu | grep -w "pse\|pdpe1gb"`}
                </Snippet>
                <p>
                    If you don't see "pse" and "pdpe1gb" highlighted in red it is a hardware limitation and you can stop here.
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo echo "3" >> /sys/devices/system/node/node0/hugepages/*1048*/nr_hugepages`}
                </Snippet>
                <p>
                    We skip one here (according to the guide) because we only have one NUMA node, and the second command in the guide doesn't do anything if you only have one.
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo echo "3" >> /sys/devices/system/node/node*/hugepages/*1048*/nr_hugepages
$sudo nano /etc/default/grub`}
                </Snippet>
                <p>
                    Now edit the line: GRUB_CMDLINE_LINUX="" to: GRUB_CMDLINE_LINUX="hugepagesz=1GB default_hugepagesz=1GB hugepages=6"
                </p>
                <p>
                    Press ctl-x, "y", then enter.
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo update-grub`}
                </Snippet>
                <p>
                    Since 1gbpages part of the config.json file has already been edited, both hugepages and 1gb pages should be enabled when xmrig starts. Reboot to give everything a fresh start:
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$    sudo reboot`}
                </Snippet>

                <h3>Getting XMRig to Autostart at Boot</h3>
                <p>The following method is just one of many ways to do this. In this methos, two files will be written: a script, and a desktop file.</p>
                <p>Navigate to the file and edit it:</p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$cd /etc/xdg/autostart
$sudo gedit`}
                </Snippet>
                <p>In the editor, insert:</p>
                <Snippet language="plaintext" style={atomOneDark}>
                    {`[Desktop Entry]
Name=XMrig
Comment=Run XMRig at boot with as sudo
Exec=gnome-terminal -e "/home/username/Documents/xmrig.sh"
Icon=terminal
Terminal=true
Type=Application
Categories=Application;`}
                </Snippet>
                <p>
                    Before saving it, change the 'username' to your username. Click save at the top and save it as xmrig.desktop
                </p>
                <p>Then run:</p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo chmod +x xmrig.desktop`}
                </Snippet>
                <p>
                    Right click on the icon in the file and go to properties and verify that "Allow executing file as a program" box is now selected.
                </p>
                <p>
                    The next step is to make the script. It can be saved in the documents folder, or anywhere else, as long as the path is known.
                </p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$cd /home/username/Documents
$sudo nano`}
                </Snippet>
                <p>For the script, insert:</p>
                <Snippet language="plaintext" style={atomOneDark}>
                    {`!#/bin/bash
sudo /home/bashful/xmrig/build/xmrig start`}
                </Snippet>
                <p>Press ctl-x to save, save it as xmrig.sh. Now to again make it executable, run:</p>
                <Snippet language="bash" style={atomOneDark}>
                    {`$sudo chmod +x xmrig.sh`}
                </Snippet>
                <p>
                    Right click and look at file properties to again verify the check box is checked. Go to the little grid at the bottom left, start searching for "startup.." and click on "startup applications". Vverify xmrig is there and checked.
                </p>

                <h3>Final Tweaks (BIOS)</h3>
                <p>
                    The very last thing is that something called the "governor" limits the computer's power.  In order to bypass that, memory and CPU needs to be overclocked. They don't need to be overclocked a lot.
                </p>
                <p>
                    Reboot and go into the computer's BIOS.  Find the memory settings and change it to something like "extreme memory profile" or "profile 1".  You are going to customize it to your needs, or look up a tutorial on your specific motherboard. You can also slightly increase the default processor speed (i.e. 4.0Ghz).
                </p>
                <p>
                    Save and reboot. Hopefullye the computer boots up, log in, and starts mining with no need for user interaction. If you have any questions or concerns, feel free to reach out to the team support.
                </p>
                <p>
                    Special thanks to <a href="https://www.reddit.com/user/Kazagaroth/">Kazagaroth</a> for providing the tutorial instructions!
                </p>
            </Jumbotron>
            <LandingFooter />
        </>
    );
}

export default LinuxInstructions;