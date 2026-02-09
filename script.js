// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Text files data with categories
    const textFiles = [
        {
            id: 'command',
            name: 'command.txt',
            title: 'Linux Commands Collection',
            category: 'system',
            icon: 'fas fa-terminal',
            description: 'Essential Linux commands & system configurations',
            tags: ['linux', 'commands', 'system', 'configuration'],
            color: '#2563eb',
            lines: 245,
            size: '12.5 KB',
            content: `# Linux Commands Collection\n\n## System Configuration\n\n# Remove Super shortcuts\nxfconf-query -c xfce4-keyboard-shortcuts -p "/commands/custom/<Super>s" -r 2>/dev/null || true\nxfconf-query -c xfce4-keyboard-shortcuts -p "/commands/custom/<Super>h" -r 2>/dev/null || true\n\n# Set Ctrl+Alt+S and Ctrl+Alt+H\nxfconf-query -c xfce4-keyboard-shortcuts -p "/commands/custom/<Control><Alt>s" -n -t string -s "bash -c 'pactl set-default-sink alsa_output.usb-Generic_AB13X_USB_Audio_20210726905926-00.analog-stereo && notify-send \\"Audio\\" \\"USB Speaker\\"'"\nxfconf-query -c xfce4-keyboard-shortcuts -p "/commands/custom/<Control><Alt>h" -n -t string -s "bash -c 'pactl set-default-sink alsa_output.pci-0000_00_1b.0.analog-stereo && notify-send \\"Audio\\" \\"Headphones\\"'"\n\necho "Now try Ctrl+Alt+S and Ctrl+Alt+H"\n\n## Package Management\n\nytpl "LINK_HERE"\npdfbatch\nimg2pdf IMG*.jpg --rotation=ifvalid -o history_notes.pdf\ninxi -Faz\nyay -S intel-media-driver \nsudo pacman -Syu poppler-qt6\n\n## Audio Configuration\n\n# Switch to Headphones (front panel)\npactl set-sink-port alsa_output.pci-0000_00_1b.0.analog-stereo analog-output-headphones\n\n# Switch to Speakers (back panel / line out)\npactl set-sink-port alsa_output.pci-0000_00_1b.0.analog-stereo analog-output-lineout\n\n## Network Commands\n\n# Internet on/off\nsudo ip link set enp2s0 down\n\n# Speed test\nsudo apt install speedtest-cli\nspeedtest\n\n## System Information\n\nmount | grep ' / '\ndpkg -l | grep <partial_name>\n\n## Security & Updates\n\nsudo ./VentoyWeb.sh\nsudo chkrootkit\nsudo rkhunter --update\nsudo rkhunter --check\nsudo lynis audit system\nsudo systemctl restart NetworkManager\n\n## Container Management\n\npodman start WinApps\npodman stop WinApps\n\n## Security Setup\n\nflatpak override --user --env=FLATPAK_NO_ANALYTICS=1\nsudo apt install preload fwupd apparmor apparmor-utils unattended-upgrades\nsudo systemctl enable preload\nsudo systemctl start apparmor\n\n## Firewall Configuration\n\nsudo apt install ufw auditd lynis ecryptfs-utils\nsudo ufw enable\nsudo ufw allow ssh\nsudo ufw allow http\nsudo ufw allow https\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\n\n## System Maintenance\n\nsudo swapoff -a\nsudo hdparm -W1 /dev/sdX\nsudo freshclam\nsudo clamscan -r --remove --log=/var/log/clamav/scan.log /home/goplunaplu\n\n## Power Management\n\nsystemctl poweroff\nsystemctl suspend\nsystemctl reboot\n\n## Package Management\n\nsudo apt install gdebi-core iptables\nsudo apt update\n\n## GRUB Configuration\n\nsudo update-grub\nsudo add-apt-repository ppa:yannubuntu/boot-repair\nsudo apt-get update\nsudo apt-get install -y boot-repair\nsudo boot-repair\nsudo grub-install /dev/sdb5\n\n## System Optimization\n\nsudo apt install zram-tools\necho 'PERCENT=100' | sudo tee /etc/default/zramswap\nsudo systemctl restart zramswap\nsudo apt install earlyoom\nsudo systemctl enable --now earlyoom\nsudo apt install cpufrequtils\necho 'GOVERNOR="performance"' | sudo tee /etc/default/cpufrequtils\nsudo systemctl enable cpufrequtils\nsudo systemctl start cpufrequtils\n\n## Disk Optimization\n\nsudo nano /etc/fstab  # Change to: defaults,noatime,errors=remount-ro\nsudo nano /etc/sysctl.conf  # Add: vm.swappiness=10, vm.vfs_cache_pressure=50\nsudo sysctl -p\nsudo e4defrag /media/goplunaplu/c48cacc8-1908-479f-a608-7871c2e09d1b\nsudo hdparm -A1 /dev/sdb\nsudo hdparm -W1 /dev/sdb\n\n## Service Management\n\n# Disable unnecessary services\nsudo systemctl disable --now cups.service cups-browsed.service\nsudo systemctl disable --now bluetooth.service\nsudo systemctl disable --now speech-dispatcherd.service\nsudo systemctl disable --now tlp.service\nsudo systemctl disable --now upower.service\n\n## Volume Control Commands\n\n# Increase volume by 5%\namixer set Master 5%+\n# Decrease volume by 5%\namixer set Master 5%-\n# Mute\namixer set Master mute\n# Unmute\namixer set Master unmute\n\n## Application Configuration\n\nflatpak override --user --env=GTK_IM_MODULE=ibus org.telegram.desktop\nflatpak override --user --env=QT_IM_MODULE=ibus org.telegram.desktop\nflatpak override --user --env=XMODIFIERS=@im=ibus org.telegram.desktop\n\nsudo apt install firmware-misc-nonfree intel-media-va-driver i965-va-driver -y\n\n## Additional System Commands\n\nsudo sed -Ei '/load-module module-suspend-on-idle/s/^/#/' /etc/pulse/default.pa\nsudo apt install wmctrl hunspell-bn gdb gimagereader tesseract-ocr-eng tesseract-ocr-ben\ngnome-text-editor\ngnome-calculator\nfonts-beng-extra\n\n## Service Optimization\n\nsudo systemctl disable wpa_supplicant.service\nsudo systemctl disable accounts-daemon.service\nsudo systemctl disable switcheroo-control.service\nsudo systemctl disable plymouth-quit-wait.service\nsudo systemctl disable plymouth-start.service\nsudo systemctl disable power-profiles-daemon.service\nsudo systemctl disable udisks2.service\nsudo systemctl disable colord.service\nsudo systemctl disable systemd-hostnamed.service\n\n## Timezone Configuration\n\nsudo timedatectl set-timezone Asia/Dhaka\n\n## Temp Directory Optimization\n\necho 'tmpfs /tmp tmpfs defaults,noatime,mode=1777 0 0' | sudo tee -a /etc/fstab\nsudo systemctl daemon-reload\nsudo mount /tmp\n\n## Graphics & Media\n\nsudo apt install gimp simplescreenrecorder mesa-vulkan-drivers mesa-utils i965-va-driver intel-media-va-driver\n\n## Input Method Configuration\n\nexport GTK_IM_MODULE=ibus\nexport QT_IM_MODULE=ibus\nexport XMODIFIERS=@im=ibus\nibus-daemon -drx\n\n## Browser Optimization\n\n# Enable VA-API in Brave/Chrome\n# Navigate to: brave://flags\n# Enable: Override software rendering list\n# Enable: Hardware-accelerated video decode\n\n## IBus Configuration\n\nexport QT_IM_MODULE=ibus\nexport XMODIFIERS=@im=ibus\nexport GTK_IM_MODULE=ibus`
        },
        {
            id: 'dark-mode',
            name: 'DARK MODE !!.txt',
            title: 'Dark Mode Setup Guide',
            category: 'tutorial',
            icon: 'fas fa-moon',
            description: 'Complete guide to enable dark mode on XFCE',
            tags: ['darkmode', 'xfce', 'theme', 'gui'],
            color: '#7c3aed',
            lines: 45,
            size: '2.1 KB',
            content: `# Dark Mode Setup Guide for XFCE\n\n## Option 1: Copy Configuration Files\n\n\`\`\`bash\nmkdir ~/dark-mode-backup\ncp ~/.config/gtk-3.0/settings.ini ~/dark-mode-backup/gtk-3-settings.ini\ncp ~/.config/gtk-4.0/settings.ini ~/dark-mode-backup/gtk-4-settings.ini\ncp ~/.local/share/applications/*.desktop ~/dark-mode-backup/\n\`\`\`\n\n## Option 2: Automated Setup Script\n\n\`\`\`bash\n#!/bin/bash\n\necho "Setting up dark mode for GNOME apps on XFCE..."\n\n# Set gsettings\ngsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'\ngsettings set org.gnome.desktop.interface gtk-theme 'WhiteSur-Dark-nord'\n\n# Configure GTK-3.0\nmkdir -p ~/.config/gtk-3.0\necho "[Settings]\ngtk-application-prefer-dark-theme=1\ngtk-theme-name=WhiteSur-Dark-nord" >> ~/.config/gtk-3.0/settings.ini\n\n# Configure GTK-4.0\nmkdir -p ~/.config/gtk-4.0\ncat > ~/.config/gtk-4.0/settings.ini << 'EOF'\n[Settings]\ngtk-application-prefer-dark-theme=1\ngtk-theme-name=WhiteSur-Dark-nord\nEOF\n\n# Video Downloader dark mode\ncp /usr/share/applications/com.github.unrud.VideoDownloader.desktop ~/.local/share/applications/\nsed -i 's/^Exec=video-downloader/Exec=env ADW_DEBUG_COLOR_SCHEME=prefer-dark video-downloader/' ~/.local/share/applications/com.github.unrud.VideoDownloader.desktop\n\n# GNOME Clocks dark mode\ncp /usr/share/applications/org.gnome.clocks.desktop ~/.local/share/applications/\nsed -i 's/^Exec=gnome-clocks/Exec=env ADW_DEBUG_COLOR_SCHEME=prefer-dark gnome-clocks/' ~/.local/share/applications/org.gnome.clocks.desktop\n\n# GNOME Calculator dark mode\ncp /usr/share/applications/org.gnome.Calculator.desktop ~/.local/share/applications/\nsed -i 's/^Exec=gnome-calculator/Exec=env ADW_DEBUG_COLOR_SCHEME=prefer-dark gnome-calculator/' ~/.local/share/applications/org.gnome.Calculator.desktop\n\nupdate-desktop-database ~/.local/share/applications/\n\necho "Done! Log out and back in to apply changes."\n\`\`\`\n\n## Usage Instructions\n\n1. Save the script as \`setup-dark-mode.sh\`\n2. Make it executable: \`chmod +x setup-dark-mode.sh\`\n3. Run it: \`./setup-dark-mode.sh\`\n4. Log out and back in\n\n**Note:** This script works for both current and future installations!`
        },
        {
            id: 'fix-lag',
            name: 'fix lag lubuntu.txt',
            title: 'Fix Lubuntu Performance Issues',
            category: 'tutorial',
            icon: 'fas fa-tachometer-alt',
            description: 'Optimize Lubuntu for better performance',
            tags: ['performance', 'lubuntu', 'graphics', 'optimization'],
            color: '#10b981',
            lines: 35,
            size: '1.8 KB',
            content: `# Fix Lubuntu Performance Issues\n\n## 1. Check Graphics Drivers\n\n\`\`\`bash\ninxi -G\n\`\`\`\n\nIf output shows "Gallium" or "llvmpipe", you need proper GPU drivers.\n\n### For NVIDIA:\n\`\`\`bash\nsudo apt update\nsudo ubuntu-drivers autoinstall\nsudo reboot\n\`\`\`\n\n### For AMD/Intel:\n\`\`\`bash\nsudo apt install xserver-xorg-video-amdgpu\n# OR\nsudo apt install xserver-xorg-video-intel\n\`\`\`\n\n## 2. Configure Compositor (Picom)\n\n1. Enable compositor in: Preferences → LXQt Settings → Session Settings\n\n2. Create custom configuration:\n\`\`\`bash\nmkdir -p ~/.config/picom\nnano ~/.config/picom/picom.conf\n\`\`\`\n\nAdd this configuration:\n\`\`\`ini\nvsync = true;\nbackend = "glx";\nglx-no-stencil = true;\nglx-no-rebind-pixmap = true;\n\`\`\`\n\n3. Restart compositor:\n\`\`\`bash\npkill picom && picom --config ~/.config/picom/picom.conf &\n\`\`\`\n\n## 3. Disable Compositor (if hardware is weak)\n\n\`\`\`bash\npkill picom\n\`\`\`\n\nOr disable from LXQt Session Settings.\n\n## 4. Alternative: Switch to Xfce\n\nFor very old hardware, consider switching to Xfce or using SLiM display manager.\n\n## Performance Tips\n\n- Close unnecessary background applications\n- Reduce visual effects in LXQt settings\n- Use lightweight applications\n- Keep system updated\n- Monitor system resources with htop`
        },
        {
            id: 'mount-hdd',
            name: 'How to Auto Mount an HDD.txt',
            title: 'Auto Mount HDD at Startup',
            category: 'tutorial',
            icon: 'fas fa-hdd',
            description: 'Guide to auto-mount HDD partitions on Debian',
            tags: ['storage', 'mount', 'hdd', 'debian'],
            color: '#8b5cf6',
            lines: 30,
            size: '1.5 KB',
            content: `# Auto-Mount HDD at Startup (Debian 12)\n\n## 1. Find HDD UUID\n\n\`\`\`bash\nlsblk -o UUID,MOUNTPOINT,NAME,FSTYPE,SIZE\n\`\`\`\n\nOR\n\n\`\`\`bash\nsudo blkid\n\`\`\`\n\n## 2. Edit fstab File\n\n\`\`\`bash\nsudo nano /etc/fstab\n\`\`\`\n\nAdd these entries (replace UUIDs with yours):\n\n\`\`\`\nUUID=756972f6-58cb-4afa-acf7-9f3f59575ad7 /media/hdd1 ext4 defaults,nofail 0 2\nUUID=F63253063252CB6F /media/hdd2 ntfs defaults,nofail,windows_names 0 2\nUUID=10a6339a-5f52-4e2e-b889-ef30eb59b5d6 /media/hdd3 ext4 defaults,nofail 0 2\n\`\`\`\n\n## 3. Create Mount Directories\n\n\`\`\`bash\nsudo mkdir -p /media/hdd1\nsudo mkdir -p /media/hdd2\nsudo mkdir -p /media/hdd3\n\`\`\`\n\n## 4. Apply Changes\n\n\`\`\`bash\nsudo mount -a\n\`\`\`\n\n## 5. Verify\n\n\`\`\`bash\ndf -h\n\`\`\`\n\n## 6. For NTFS Partitions (if needed)\n\n\`\`\`bash\nsudo apt install ntfs-3g -y\n\`\`\`\n\nUpdate fstab entry:\n\`\`\`\nUUID=F63253063252CB6F /media/hdd2 ntfs-3g defaults,nofail,windows_names 0 2\n\`\`\`\n\n## Notes\n\n- Use \`nofail\` option to prevent boot issues if drive is missing\n- \`windows_names\` preserves Windows file naming conventions\n- Reboot to test auto-mount: \`sudo reboot\``
        },
        {
            id: 'mpv',
            name: 'MPV .txt',
            title: 'MPV Media Player Configuration',
            category: 'media',
            icon: 'fas fa-film',
            description: 'Optimized MPV config for i7-3770 HD 4000',
            tags: ['media', 'video', 'player', 'configuration'],
            color: '#ec4899',
            lines: 60,
            size: '3.2 KB',
            content: `# MPV Configuration for Maximum Performance\n\n## Basic Settings\n\nosc=yes\nosc-layout=slimbox\nosd-on-seek=no\nosd-level=1\n\n## Video Output (Intel HD 4000)\n\nvo=gpu\ngpu-api=opengl\nhwdec=vaapi\nhwdec-codecs=all\n\n## Quality Settings\n\nscale=bilinear\ncscale=bilinear\ndscale=bilinear\n\n## Disable Heavy Processing\n\ndeband=no\ndither-depth=no\ncorrect-downscaling=no\nsigmoid-upscaling=no\nlinear-downscaling=no\ntemporal-dither=no\ndeinterlace=no\n\n## Audio Settings\n\naudio-normalize-downmix=yes\nvolume-max=200\naudio-channels=stereo\n\n## Subtitle Settings\n\nsub-auto=fuzzy\nsub-font="Liberation Sans"\nsub-font-size=48\nsub-bold=yes\nsub-color="#FFFFFF"\nsub-border-color="#000000"\nsub-border-size=2\nsub-shadow-offset=2\n\n## Screenshots\n\nscreenshot-directory=~/Pictures/mpv-shots\nscreenshot-format=png\nscreenshot-template="%F-%P"\n\n## Cache Settings\n\ncache=yes\ncache-secs=20\ndemuxer-max-bytes=300MiB\ndemuxer-max-back-bytes=75MiB\n\n## Misc Settings\n\nkeep-open=yes\nsave-position-on-quit=yes\n\n## Performance Optimization\n\nvd-lavc-threads=8\nvd-lavc-fast=yes\nvideo-sync=audio\nframedrop=vo\nopengl-swapinterval=1\npriority=high\n\n# ---------------------------------------------------\n# MPV Input Configuration\n# ---------------------------------------------------\n\n## Playback Control\nSPACE           cycle pause\nLEFT            seek -5\nRIGHT           seek 5\nUP              seek 60\nDOWN            seek -60\nCtrl+LEFT       frame-back-step\nCtrl+RIGHT      frame-step\n\n## Speed Control\n[               add speed -0.1\n]               add speed 0.1\nBS              set speed 1\n\n## Volume Control\n9               add volume -3\n0               add volume 3\nm               cycle mute\n\n## Subtitle Control\nv               cycle sub\nb               cycle audio\nz               add sub-delay -0.1\nx               add sub-delay 0.1\n\n## Screenshots\ns               screenshot\nCtrl+s          screenshot video\nAlt+s           screenshot window\n\n## UI Controls\no               show-progress\nTAB             cycle-values osd-level 0 1 2 3\n\n## Quit\nq               quit\nSHIFT+q         quit-watch-later`
        },
        {
            id: 'quick-setup',
            name: 'Quick Setup Guide Aggressive.txt',
            title: 'Aggressive Preload Script',
            category: 'system',
            icon: 'fas fa-bolt',
            description: 'Preload script for faster application startup',
            tags: ['performance', 'preload', 'optimization', 'startup'],
            color: '#f59e0b',
            lines: 40,
            size: '2.0 KB',
            content: `# Aggressive Preload Script for 4 Main Apps\n\n\`\`\`bash\n#!/bin/bash\n\necho "Starting aggressive preload for main applications..."\n\n# Brave Browser\nfind /opt/brave.com/brave -type f 2>/dev/null | xargs -I {} cat {} > /dev/null 2>&1 &\ncat /usr/bin/brave-browser-stable > /dev/null 2>&1 &\n\n# OnlyOffice\nfind /opt/onlyoffice/desktopeditors -type f 2>/dev/null | xargs -I {} cat {} > /dev/null 2>&1 &\ncat /usr/bin/onlyoffice-desktopeditors > /dev/null 2>&1 &\n\n# Notesnook (Flatpak)\nfind "/var/lib/flatpak/app/com.notesnook.Notesnook" -type f 2>/dev/null | xargs -I {} cat {} > /dev/null 2>&1 &\n\n# Telegram (Flatpak)\nfind "/var/lib/flatpak/app/org.telegram.desktop" -type f 2>/dev/null | xargs -I {} cat {} > /dev/null 2>&1 &\n\n# Flatpak Runtimes\nfind /var/lib/flatpak/runtime -type f -name "*.so*" 2>/dev/null | head -n 20000 | xargs -I {} cat {} > /dev/null 2>&1 &\nfind /var/lib/flatpak/runtime -type f -name "*.bin" 2>/dev/null | head -n 5000 | xargs -I {} cat {} > /dev/null 2>&1 &\n\n# System Libraries\nfind /lib/x86_64-linux-gnu -type f -name "*.so*" 2>/dev/null | head -n 3000 | xargs -I {} cat {} > /dev/null 2>&1 &\nfind /usr/lib/x86_64-linux-gnu -type f -name "*.so*" 2>/dev/null | head -n 3000 | xargs -I {} cat {} > /dev/null 2>&1 &\n\n# Fonts and Icons\nfind /usr/share/fonts -type f 2>/dev/null | head -n 3000 | xargs -I {} cat {} > /dev/null 2>&1 &\nfind /usr/share/icons -type f 2>/dev/null | head -n 5000 | xargs -I {} cat {} > /dev/null 2>&1 &\nfind /usr/share/themes -type f 2>/dev/null | head -n 1000 | xargs -I {} cat {} > /dev/null 2>&1 &\n\nwait\necho "Preload complete! Applications should start faster."\n\`\`\`\n\n## Usage Instructions\n\n1. Save the script as \`preload-apps.sh\`\n2. Make it executable: \`chmod +x preload-apps.sh\`\n3. Run it: \`sudo ./preload-apps.sh\`\n4. For best results, run at system startup\n\n## Notes\n\n- This script aggressively caches application files in RAM\n- Results in faster application startup times\n- May increase RAM usage temporarily\n- Most effective on systems with sufficient RAM (8GB+)`
        },
        {
            id: 'xrandr',
            name: 'xrandr cvt 1400 900.txt',
            title: 'Custom Display Resolution Setup',
            category: 'system',
            icon: 'fas fa-desktop',
            description: 'Set custom 1440x900 resolution with xrandr',
            tags: ['display', 'resolution', 'xrandr', 'graphics'],
            color: '#6366f1',
            lines: 10,
            size: '0.5 KB',
            content: `# Custom Resolution: 1440x900\n\n## 1. Generate Modeline\n\n\`\`\`bash\ncvt 1440 900\n\`\`\`\n\n## 2. Create New Mode\n\n\`\`\`bash\nxrandr --newmode "1440x900_60.00" 106.50 1440 1520 1672 1904 900 903 909 934 -hsync +vsync\n\`\`\`\n\n## 3. Add Mode to Display\n\n\`\`\`bash\nxrandr --addmode VGA-1 1440x900_60.00\n\`\`\`\n\n## 4. Apply Resolution\n\n\`\`\`bash\nxrandr --output VGA-1 --mode 1440x900_60.00\n\`\`\`\n\n## 5. Make Permanent\n\nAdd to ~/.profile:\n\n\`\`\`bash\nxrandr --newmode "1440x900_60.00" 106.50 1440 1520 1672 1904 900 903 909 934 -hsync +vsync\nxrandr --addmode VGA-1 1440x900_60.00\nxrandr --output VGA-1 --mode 1440x900_60.00\n\`\`\``
        },
        {
            id: 'os-age',
            name: 'os age.txt',
            title: 'Display OS Age in Fastfetch',
            category: 'system',
            icon: 'fas fa-calendar-alt',
            description: 'Show OS installation age in fastfetch output',
            tags: ['system', 'information', 'fastfetch', 'customization'],
            color: '#14b8a6',
            lines: 25,
            size: '1.2 KB',
            content: `# Display OS Age in Fastfetch\n\n## Configuration Steps\n\n1. Create fastfetch config directory:\n\n\`\`\`bash\nmkdir -p ~/.config/fastfetch\n\`\`\`\n\n2. Create config file:\n\n\`\`\`bash\nnano ~/.config/fastfetch/config.jsonc\n\`\`\`\n\n3. Add this configuration:\n\n\`\`\`json\n{\n    "$schema": "https://github.com/fastfetch-cli/fastfetch/raw/dev/doc/json_schema.json",\n    "modules": [\n        "title",\n        "separator",\n        "os",\n        "host",\n        "kernel",\n        "uptime",\n        {\n            "type": "command",\n            "key": "OS Age",\n            "text": "/bin/bash -c 'echo $((($(date +%s) - $(stat -c %W /)) / 86400)) days'"\n        },\n        "packages",\n        "shell",\n        "display",\n        "de",\n        "wm",\n        "terminal",\n        "cpu",\n        "gpu",\n        "memory",\n        "disk",\n        "colors"\n    ]\n}\n\`\`\`\n\n4. Test the configuration:\n\n\`\`\`bash\nfastfetch\n\`\`\`\n\nYou should now see "OS Age: X days" in your fastfetch output!`
        },
        {
            id: 'channel',
            name: 'channel.txt',
            title: 'Useful YouTube Channels',
            category: 'links',
            icon: 'fas fa-youtube',
            description: 'Collection of educational and tech YouTube channels',
            tags: ['youtube', 'education', 'learning', 'resources'],
            color: '#ef4444',
            lines: 15,
            size: '0.8 KB',
            content: `# Useful YouTube Channels\n\n## Technology & Programming\n\nhttps://www.youtube.com/@selfsyncuncut\nhttps://www.youtube.com/@warikoo\nhttps://www.youtube.com/@SeeKen\nhttps://www.youtube.com/@KishanChotaliya/\nhttps://www.youtube.com/@Rewirs\n\n## Education & Learning\n\nhttps://www.youtube.com/@himeeshmadaan\nhttps://www.youtube.com/@sabitinternational\nhttps://www.youtube.com/@Audifeel\nhttps://www.youtube.com/@QuantumProject1\nhttps://www.youtube.com/@SobanAttari26\n\n## Inspiration & Motivation\n\nhttps://www.youtube.com/@GreatIdeasGreatLifeIndia\nhttps://www.youtube.com/@Empowernow186/\n\n## Categories\n\n- Technology & Programming: @selfsyncuncut, @warikoo, @SeeKen\n- Education: @himeeshmadaan, @sabitinternational\n- Inspiration: @GreatIdeasGreatLifeIndia, @Empowernow186`
        },
        {
            id: 'chatgpt-animations',
            name: 'chatgpt Add CSS animations.txt',
            title: 'CSS Animation Ideas & Techniques',
            category: 'tutorial',
            icon: 'fas fa-code',
            description: 'Modern CSS animation effects and techniques',
            tags: ['css', 'animations', 'web', 'design'],
            color: '#3b82f6',
            lines: 20,
            size: '1.0 KB',
            content: `# CSS Animation Ideas & Techniques\n\n## Modern Animation Effects\n\n### Visual Effects\n- Parallax Scrolling\n- Glassmorphism\n- Neumorphism\n- Morphing Effects\n- Glitch Effect\n- Particle Effects\n- Liquid Effect\n- Spring Animation\n\n### Interactive Animations\n- Hover Animation\n- Scroll Reveal\n- Text Typing Effect\n- Shimmer Effect\n- Dynamic Shadows\n\n## Performance Optimization\n\n### Loading Performance\n- Debouncing & Throttling\n- Lazy Loading\n- Infinite Scroll\n- Optimize loading speed\n\n### User Experience\n- Enhance user interactions\n- Dark mode feature\n- Add custom components\n- Responsive animations\n\n## Implementation Tips\n\n1. Use CSS variables for easy customization\n2. Implement prefers-reduced-motion for accessibility\n3. Use hardware acceleration with transform and opacity\n4. Optimize animations for mobile devices\n5. Test performance with DevTools\n\n## Resources\n\n- MDN Web Docs: CSS Animations\n- CSS-Tricks Animation Guide\n- CodePen for inspiration\n- Animate.css library`
        },
        {
            id: 'economics',
            name: 'economics.txt',
            title: 'Economics Study Resources',
            category: 'tutorial',
            icon: 'fas fa-book',
            description: 'Economics study materials and video lectures',
            tags: ['education', 'economics', 'study', 'videos'],
            color: '#10b981',
            lines: 70,
            size: '3.5 KB',
            content: `# Economics Study Resources\n\n## First Paper\n\n### Chapter 1: Introduction\nhttps://youtu.be/SiPmgHB0Y6A\nhttps://youtu.be/Qwip7jJCYdY\nhttps://youtu.be/dyxVJl1pgtg\n\n### Chapter 2: Basic Concepts\nhttps://youtu.be/ioh5vNCfvzc\nhttps://youtu.be/tdG95--X0q8\nhttps://youtu.be/9RLDweAhpyg\nhttps://youtu.be/R83Ncur2Lh4\nhttps://youtu.be/Jcbo8Fa6NJo\n\n### Chapter 3: Demand & Supply\nhttps://youtu.be/KXtpzjGp6bs\nhttps://youtu.be/iJXlOkmFhhI\nhttps://youtu.be/byMR5ai-gQ4\n\n### Chapter 4: Market Structures\nhttps://youtu.be/XodbHQdWY3g\nhttps://youtu.be/2lNZJUWPSHQ\nhttps://youtu.be/YfhauwtnwhE\n\n### Chapter 5: National Income\nhttps://youtu.be/EJ6Jc5UFtfM\nhttps://youtu.be/NBiPe84GbqM\nhttps://youtu.be/ucU6VnHXLW8\n\n## Additional Resources\n\nhttps://youtu.be/eiytjbmppwU\nhttps://youtu.be/k8jnZymUoJE\nhttps://youtu.be/q336XSxE9aU\nhttps://youtu.be/XP9AJgO_OMM\nhttps://youtu.be/xhVIV1HKQEc\n\n## Study Tips\n\n1. Watch videos before reading textbooks\n2. Take notes while watching\n3. Practice with past papers\n4. Join study groups\n5. Create mind maps for each chapter`
        },
        {
            id: 'furniture',
            name: 'furniture https youtu.txt',
            title: 'Furniture Shopping Guide',
            category: 'links',
            icon: 'fas fa-couch',
            description: 'Furniture shopping links and price references',
            tags: ['furniture', 'shopping', 'home', 'decor'],
            color: '#f59e0b',
            lines: 10,
            size: '0.5 KB',
            content: `# Furniture Shopping Guide\n\n## Bed\n- Price: ~8,000 BDT\n- Video: https://youtu.be/_rs_RP2NQSs\n\n## Dining Set\n- Price: ~16,000 BDT\n- Video: https://youtu.be/CLBNa2AAHbA\n\n## Wardrobe & Tables\n- Almari: 13,000 BDT\n- Dressing Table: 13,000 BDT\n- Reading Table: 11,000 BDT\n- Video: https://youtu.be/lrkQrTKnxY4\n\n## Computer Table\n- Price: 5,400 BDT\n- Link: https://regalfurniturebd.com/product/computer-table-k6v1mk\n\n## Other Items\n- BRB Fan: 3,700 BDT\n- Kitchen Set: 6,000 BDT\n- Cabinet: 12,000 BDT\n- Video: https://youtu.be/7zoSbpXdV20\n\n## Shopping Tips\n1. Compare prices from multiple stores\n2. Check material quality\n3. Measure your space before buying\n4. Look for warranty options`
        },
        {
            id: 'id-pass',
            name: 'id pass  .txt',
            title: 'Account Credentials',
            category: 'personal',
            icon: 'fas fa-key',
            description: 'Username and password information',
            tags: ['credentials', 'security', 'account'],
            color: '#6b7280',
            lines: 3,
            size: '0.1 KB',
            content: `# Account Credentials\n\nUsername: OI71mveCoNZSo0oK\nPassword: e9kDS44KdZIUXN0ZRH7aPmlwXxHHnS5n\n\n## Security Notes\n- Keep this information secure\n- Use password manager if possible\n- Enable two-factor authentication\n- Change passwords regularly`
        },
        {
            id: 'old-pattern',
            name: 'old pattern.txt',
            title: 'Habits to Avoid',
            category: 'personal',
            icon: 'fas fa-times-circle',
            description: 'Personal habits and patterns to change',
            tags: ['personal', 'habits', 'self-improvement'],
            color: '#6b7280',
            lines: 25,
            size: '1.0 KB',
            content: `# Habits to Avoid\n\n## Morning Routine Issues\n- Wake up late\n- Don't pray tahajjud\n- Don't perform morning azkar fully\n- Skip Ishrak prayer\n- Don't read Quran in morning\n\n## Daily Habits\n- Spend too much time on PC\n- Use phone excessively\n- Talk too much\n- Behave unwell\n- Eat too much\n\n## Technology Usage\n- Always on phone or PC\n- Keep notifications on\n- Keep internet always on\n\n## Spiritual Neglect\n- Don't take bath first thing\n- Don't pray Sunnah of Zohor\n- Don't take power nap\n- Don't go to mosque\n- Don't recite Quran at night\n\n## Self-Improvement\n- Don't do gym/exercise\n- Don't do accountability\n- Don't make wudhu at night\n\n## Improvement Plan\n1. Create structured daily routine\n2. Set specific time limits for devices\n3. Prioritize spiritual activities\n4. Practice mindfulness\n5. Track progress daily`
        },
        {
            id: 'ruqyah',
            name: 'ruqyah.txt',
            title: 'Ruqyah Islamic Healing Guide',
            category: 'personal',
            icon: 'fas fa-book-quran',
            description: 'Islamic healing practices and protection',
            tags: ['islam', 'healing', 'spiritual', 'protection'],
            color: '#059669',
            lines: 50,
            size: '2.5 KB',
            content: `# Ruqyah Islamic Healing Guide\n\n## Basic Principles\n\n- Ruqyah can be performed even if no illness is present\n- No side effects\n- Helps identify if problems are spiritual in nature\n\n## Recommended Practices\n\n### Surah Al-Baqarah\n- Can be recited for general wellness\n- Effective against Jinn, Magic, Evil Eye\n- Recite with intention of healing and protection\n- Can recite daily or complete every 3-4 days\n\n### Daily Routine\n- Morning & Evening: Recite Surah Al-Fatihah, Ayatul Kursi\n- Duration: 30 minutes each session\n- Minimum: 2 weeks continuous practice\n- Face the patient while reciting\n\n## How to Perform Ruqyah\n\n1. Make intention for specific healing\n2. Recite recommended Surahs (3x, 7x, or 10x)\n3. Blow on yourself\n4. Blow on water/oil and use\n5. Perform daily, multiple times if needed\n6. Combine with medical treatment when necessary\n\n## Protection from Evil Eye\n\nRecite this dua for protection:\n\nأَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ\n\nTranslation: "I seek refuge in the perfect words of Allah from every devil and poisonous creature, and from every evil eye."\n\n## Important Notes\n\n- Recite Ayatul Kursi and Three Quls before starting\n- Maintain strong mental state during ruqyah\n- Keep blessings hidden to avoid envy\n- Use phrases like "Alhamdulillah" when praised\n- Increase greetings (Salam) to remove envy\n\n## Additional Resources\n\nAudio Ruqyah: https://files.ruqyahbd.org/audio/Ruqyah-3Kul-ruqyahbd.org.mp3\nGuide: https://ruqyahbd.org/blog/3669/self-ruqyah-for-jinn-problems`
        }
    ];

    // DOM Elements
    const fileList = document.getElementById('file-list');
    const searchInput = document.getElementById('search-input');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const fileTitle = document.getElementById('file-title');
    const fileMeta = document.getElementById('file-meta');
    const fileContent = document.getElementById('file-content');
    const emptyState = document.getElementById('empty-state');
    const copyBtn = document.getElementById('copy-btn');
    const downloadBtn = document.getElementById('download-btn');
    const rawBtn = document.getElementById('raw-btn');
    const viewAllBtn = document.getElementById('view-all-btn');
    const exportAllBtn = document.getElementById('export-all-btn');
    const extractLinksBtn = document.getElementById('extract-links-btn');
    const themeBtns = document.querySelectorAll('.theme-btn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const previewContent = document.getElementById('preview-content');
    const linksContainer = document.getElementById('links-container');
    const fileCounter = document.getElementById('file-counter');
    const lineCounter = document.getElementById('line-counter');

    // State
    let currentFile = null;
    let currentCategory = 'all';
    let isDarkMode = false;
    let isRawView = false;
    let allFiles = [...textFiles];

    // Initialize
    function init() {
        renderFileList();
        setupEventListeners();
        loadTheme();
        updateStats();
        
        // Select first file
        if (textFiles.length > 0) {
            setTimeout(() => {
                selectFile(textFiles[0].id);
            }, 100);
        }
    }

    // Render file list
    function renderFileList() {
        fileList.innerHTML = '';
        
        const filteredFiles = allFiles.filter(file => {
            if (currentCategory === 'all') return true;
            return file.category === currentCategory;
        });

        if (filteredFiles.length === 0) {
            fileList.innerHTML = `
                <div class="empty-state" style="padding: 20px; text-align: center; color: var(--text-tertiary)">
                    <i class="fas fa-folder-open" style="font-size: 2rem; margin-bottom: 10px;"></i>
                    <p>No files in this category</p>
                </div>
            `;
            return;
        }

        filteredFiles.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.className = `file-item ${currentFile && currentFile.id === file.id ? 'active' : ''}`;
            fileItem.dataset.id = file.id;
            
            fileItem.innerHTML = `
                <div class="file-item-icon" style="color: ${file.color}">
                    <i class="${file.icon}"></i>
                </div>
                <div class="file-item-content">
                    <div class="file-item-title">${file.name}</div>
                    <div class="file-item-desc">${file.description}</div>
                </div>
            `;
            
            fileItem.addEventListener('click', () => selectFile(file.id));
            fileList.appendChild(fileItem);
        });
    }

    // Select a file
    function selectFile(fileId) {
        const file = allFiles.find(f => f.id === fileId);
        if (!file) return;

        currentFile = file;
        
        // Update UI
        updateFileListSelection();
        updateFileInfo(file);
        renderFileContent(file);
        updatePreview(file);
        extractAndDisplayLinks(file);
        updateStats();
        
        // Hide empty state
        emptyState.classList.add('hidden');
        fileContent.classList.remove('hidden');
    }

    // Update file list selection
    function updateFileListSelection() {
        document.querySelectorAll('.file-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.id === currentFile.id) {
                item.classList.add('active');
            }
        });
    }

    // Update file information
    function updateFileInfo(file) {
        fileTitle.textContent = file.title;
        
        fileMeta.innerHTML = `
            <span class="meta-item">
                <i class="fas fa-file"></i>
                ${file.name}
            </span>
            <span class="meta-item">
                <i class="fas fa-tag"></i>
                ${capitalizeFirstLetter(file.category)}
            </span>
            <span class="meta-item">
                <i class="fas fa-chart-bar"></i>
                ${file.lines} lines
            </span>
            <span class="meta-item">
                <i class="fas fa-weight-hanging"></i>
                ${file.size}
            </span>
        `;
    }

    // Render file content
    function renderFileContent(file) {
        if (isRawView) {
            fileContent.innerHTML = `
                <div class="code-block">
                    <pre>${escapeHtml(file.content)}</pre>
                </div>
            `;
        } else {
            const formattedContent = formatContent(file.content);
            fileContent.innerHTML = formattedContent;
        }
    }

    // Format content for display
    function formatContent(content) {
        const lines = content.split('\n');
        let html = '';
        let inCodeBlock = false;
        let currentSection = null;

        lines.forEach((line, index) => {
            // Handle code blocks
            if (line.trim().startsWith('```')) {
                inCodeBlock = !inCodeBlock;
                if (inCodeBlock) {
                    html += `<div class="code-block">`;
                } else {
                    html += `</div>`;
                }
                return;
            }

            if (inCodeBlock) {
                html += `<div class="code-line">
                    <span class="line-number">${index + 1}</span>
                    <span class="line-content">${formatCodeLine(line)}</span>
                </div>`;
                return;
            }

            // Handle headings
            if (line.startsWith('# ')) {
                currentSection = line.substring(2);
                html += `<div class="content-block">
                    <h3 class="block-title"><i class="fas fa-heading"></i>${currentSection}</h3>`;
                return;
            }

            if (line.startsWith('## ')) {
                html += `<h4 style="margin: 16px 0 8px 0; color: var(--primary-color);">${line.substring(3)}</h4>`;
                return;
            }

            // Handle lists
            if (line.startsWith('- ') || line.match(/^\d+\./)) {
                if (!line.includes('http')) {
                    html += `<div class="code-line">
                        <span class="line-number">${index + 1}</span>
                        <span class="line-content">${formatTextLine(line)}</span>
                    </div>`;
                }
                return;
            }

            // Handle URLs
            if (line.includes('http')) {
                const urls = extractUrls(line);
                urls.forEach(url => {
                    line = line.replace(url, `<a href="${url}" target="_blank" class="url">${url}</a>`);
                });
                html += `<div class="code-line">
                    <span class="line-number">${index + 1}</span>
                    <span class="line-content">${formatTextLine(line)}</span>
                </div>`;
                return;
            }

            // Handle regular text
            if (line.trim()) {
                html += `<div class="code-line">
                    <span class="line-number">${index + 1}</span>
                    <span class="line-content">${formatTextLine(line)}</span>
                </div>`;
            }
        });

        // Close last section if open
        if (currentSection) {
            html += '</div>';
        }

        return html;
    }

    // Format code line
    function formatCodeLine(line) {
        let formatted = escapeHtml(line);
        
        // Highlight comments
        formatted = formatted.replace(/^(\s*#|\/\/)/, '<span class="comment">$1</span>');
        
        // Highlight commands
        formatted = formatted.replace(/\b(sudo|apt|install|update|upgrade|systemctl|mkdir|nano|echo|cp|mv|rm)\b/g, 
            '<span class="command">$1</span>');
        
        // Highlight options
        formatted = formatted.replace(/--?\w+/g, '<span class="option">$&</span>');
        
        // Highlight strings
        formatted = formatted.replace(/["'][^"']*["']/g, '<span class="string">$&</span>');
        
        return formatted;
    }

    // Format text line
    function formatTextLine(line) {
        let formatted = escapeHtml(line);
        
        // Highlight important words
        const importantWords = ['Important:', 'Note:', 'Tip:', 'Warning:', 'Caution:'];
        importantWords.forEach(word => {
            const regex = new RegExp(`(${word})`, 'gi');
            formatted = formatted.replace(regex, '<span class="highlight">$1</span>');
        });
        
        return formatted;
    }

    // Update preview
    function updatePreview(file) {
        const preview = file.content.substring(0, 200) + (file.content.length > 200 ? '...' : '');
        previewContent.innerHTML = `
            <div style="font-size: 0.875rem; line-height: 1.6; color: var(--text-secondary);">
                ${formatPreviewText(preview)}
            </div>
        `;
        previewContent.parentElement.parentElement.querySelector('.preview-empty').classList.add('hidden');
        previewContent.classList.remove('hidden');
    }

    // Format preview text
    function formatPreviewText(text) {
        let formatted = escapeHtml(text);
        formatted = formatted.replace(/\n/g, '<br>');
        
        // Highlight URLs
        const urls = extractUrls(formatted);
        urls.forEach(url => {
            formatted = formatted.replace(url, `<span style="color: var(--primary-light);">${url}</span>`);
        });
        
        return formatted;
    }

    // Extract and display links
    function extractAndDisplayLinks(file) {
        const urls = extractUrls(file.content);
        const linksEmpty = document.querySelector('.links-empty');
        const linksContainer = document.getElementById('links-container');
        
        if (urls.length > 0) {
            linksContainer.innerHTML = '';
            urls.slice(0, 10).forEach(url => {
                const linkItem = document.createElement('a');
                linkItem.className = 'link-item';
                linkItem.href = url;
                linkItem.target = '_blank';
                linkItem.innerHTML = `
                    <i class="fas fa-external-link-alt"></i>
                    <span class="link-text">${url.replace('https://', '').replace('www.', '').split('/')[0]}</span>
                `;
                linksContainer.appendChild(linkItem);
            });
            
            linksEmpty.classList.add('hidden');
            linksContainer.classList.remove('hidden');
        } else {
            linksEmpty.classList.remove('hidden');
            linksContainer.classList.add('hidden');
        }
    }

    // Update statistics
    function updateStats() {
        const selectedCount = currentFile ? 1 : 0;
        const lineCount = currentFile ? currentFile.lines : 0;
        
        fileCounter.textContent = `${selectedCount} file${selectedCount !== 1 ? 's' : ''} selected`;
        lineCounter.textContent = `${lineCount} line${lineCount !== 1 ? 's' : ''}`;
    }

    // Extract URLs from text
    function extractUrls(text) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.match(urlRegex) || [];
    }

    // Escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Capitalize first letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            if (searchTerm.length < 2) {
                allFiles = [...textFiles];
                renderFileList();
                return;
            }
            
            allFiles = textFiles.filter(file => 
                file.name.toLowerCase().includes(searchTerm) ||
                file.title.toLowerCase().includes(searchTerm) ||
                file.description.toLowerCase().includes(searchTerm) ||
                file.content.toLowerCase().includes(searchTerm) ||
                file.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
            
            renderFileList();
        });

        // Category filter
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentCategory = this.dataset.category;
                allFiles = [...textFiles];
                renderFileList();
            });
        });

        // Copy button
        copyBtn.addEventListener('click', () => {
            if (currentFile) {
                navigator.clipboard.writeText(currentFile.content)
                    .then(() => showToast('Content copied to clipboard'))
                    .catch(err => showToast('Failed to copy: ' + err));
            }
        });

        // Download button
        downloadBtn.addEventListener('click', () => {
            if (currentFile) {
                const blob = new Blob([currentFile.content], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = currentFile.name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                showToast('File download started');
            }
        });

        // Raw view toggle
        rawBtn.addEventListener('click', () => {
            isRawView = !isRawView;
            if (isRawView) {
                rawBtn.innerHTML = '<i class="fas fa-eye"></i><span>Formatted</span>';
                rawBtn.title = 'Switch to formatted view';
            } else {
                rawBtn.innerHTML = '<i class="fas fa-code"></i><span>Raw</span>';
                rawBtn.title = 'Switch to raw view';
            }
            
            if (currentFile) {
                renderFileContent(currentFile);
            }
        });

        // View all files
        viewAllBtn.addEventListener('click', () => {
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            document.querySelector('.category-btn[data-category="all"]').classList.add('active');
            currentCategory = 'all';
            allFiles = [...textFiles];
            renderFileList();
            showToast('Showing all files');
        });

        // Export all files
        exportAllBtn.addEventListener('click', () => {
            const allContent = textFiles.map(file => 
                `=== ${file.name} ===\n${file.title}\n${file.description}\n\n${file.content}\n\n`
            ).join('\n\n');
            
            const blob = new Blob([allContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'all-commands-and-configs.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('All files exported successfully');
        });

        // Extract links
        extractLinksBtn.addEventListener('click', () => {
            const allLinks = [];
            textFiles.forEach(file => {
                const urls = extractUrls(file.content);
                urls.forEach(url => {
                    allLinks.push({ file: file.name, link: url });
                });
            });
            
            if (allLinks.length > 0) {
                const linksText = allLinks.map(item => `${item.file}: ${item.link}`).join('\n');
                navigator.clipboard.writeText(linksText)
                    .then(() => showToast(`Copied ${allLinks.length} links to clipboard`))
                    .catch(err => showToast('Failed to copy links: ' + err));
            } else {
                showToast('No links found in files');
            }
        });

        // Theme switch
        themeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                themeBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const theme = this.dataset.theme;
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
                isDarkMode = theme === 'dark';
            });
        });
    }

    // Load saved theme
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const themeBtn = document.querySelector(`.theme-btn[data-theme="${savedTheme}"]`);
        if (themeBtn) {
            themeBtn.click();
        }
    }

    // Show toast notification
    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Initialize the application
    init();
});