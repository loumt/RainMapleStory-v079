/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools;

import client.LoginCrypto;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

/**
 *
 * @author wubin
 */
public class MacAddressTool {

    public static String getMacAddress(boolean ipAddress) {
        String macs = null;
        String localip = null;
        try {
            Enumeration netInterfaces = NetworkInterface.getNetworkInterfaces();

            boolean finded = false;
            while ((netInterfaces.hasMoreElements()) && (!finded)) {
                NetworkInterface ni = (NetworkInterface) netInterfaces.nextElement();
                Enumeration address = ni.getInetAddresses();
                while (address.hasMoreElements()) {
                    InetAddress inetAddress = (InetAddress) address.nextElement();
                    String ip = inetAddress.getHostAddress();
                    if ((ip.contains(":")) || (ip.startsWith("221.231.")) || (ip.equalsIgnoreCase("127.0.0.1"))) {
                        continue;
                    }
                    if ((!inetAddress.isSiteLocalAddress()) && (!inetAddress.isLoopbackAddress())) {
                        localip = inetAddress.getHostAddress();
                        byte[] mac = ni.getHardwareAddress();
                        StringBuilder sb = new StringBuilder();
                        for (int i = 0; i < mac.length; i++) {
                            if (i != 0) {
                                sb.append("-");
                            }
                            String str = Integer.toHexString(mac[i] & 0xFF);
                            sb.append(str.length() == 1 ? new StringBuilder().append(0).append(str).toString() : str);
                        }
                        macs = sb.toString().toUpperCase();

                        finded = true;
                        break;
                    }
                    if ((inetAddress.isSiteLocalAddress()) && (!inetAddress.isLoopbackAddress())) {
                        localip = inetAddress.getHostAddress();
                        byte[] mac = ni.getHardwareAddress();
                        StringBuilder sb = new StringBuilder();
                        for (int i = 0; i < mac.length; i++) {
                            if (i != 0) {
                                sb.append("-");
                            }
                            String str = Integer.toHexString(mac[i] & 0xFF);
                            sb.append(str.length() == 1 ? new StringBuilder().append(0).append(str).toString() : str);
                        }
                        macs = sb.toString().toUpperCase();

                        finded = true;
                        break;
                    }
                }
            }
        } catch (SocketException e) {
            e.printStackTrace();
        }
        return ipAddress ? localip : macs;
    }

    public static boolean isValidate(){
        List<String> macs = new ArrayList<String>(){
            {
                add("3b409f54d8adac13b8e7f846cc2549b5431aa0a0");
                add("e565973de250f996ef2d31182abca5b5420ac435");
                add("2a97d43b89ff3b8ea76eea42454756e66f083275");
            }
        };
        System.out.println("#####################当前允许服务器运行的MAC码##########################");
        macs.stream().forEachOrdered(System.out::println);
        System.out.println("#####################当前允许服务器运行的MAC运行的码##########################");
        String mac = MacAddressTool.getMacAddress(false);
        String num = MacAddressTool.returnSerialNumber();
        String localMac = LoginCrypto.hexSha1(num + mac);
        System.out.println("当前机器的码: MAC:" + mac + "\tNUM:" + num + "\tlocalMac:" + localMac);
        return macs.stream().anyMatch(localMac::equals);
    }

    public static String returnSerialNumber() {
        String cpu = getCPUSerial();
        String disk = getHardDiskSerialNumber("C");

        int newdisk = Integer.parseInt(disk);

        String s = cpu + newdisk;
        String newStr = s.substring(8, s.length());
        return newStr;
    }

    public static String getCPUSerial() {
        String result = "";
        try {
            File file = File.createTempFile("tmp", ".vbs");
            file.deleteOnExit();
            FileWriter fw = new FileWriter(file);
            String vbs = "Set objWMIService = GetObject(\"winmgmts:\\\\.\\root\\cimv2\")\nSet colItems = objWMIService.ExecQuery _ \n   (\"Select * from Win32_Processor\") \nFor Each objItem in colItems \n    Wscript.Echo objItem.ProcessorId \n    exit for  ' do the first cpu only! \nNext \n";

            fw.write(vbs);
            fw.close();
            Process p = Runtime.getRuntime().exec("cscript //NoLogo " + file.getPath());

            BufferedReader input = new BufferedReader(new InputStreamReader(p.getInputStream()));

            String line;
            while ((line = input.readLine()) != null) {
                result = result + line;
            }
            input.close();
            file.delete();
        } catch (Exception e) {
            e.fillInStackTrace();
        }
        if ((result.trim().length() < 1) || (result == null)) {
            result = "无机器码被读取";
        }
        return result.trim();
    }

    public static String getHardDiskSerialNumber(String drive) {
        String result = "";
        try {
            File file = File.createTempFile("realhowto", ".vbs");
            file.deleteOnExit();
            FileWriter fw = new FileWriter(file);
            String vbs = "Set objFSO = CreateObject(\"Scripting.FileSystemObject\")\nSet colDrives = objFSO.Drives\nSet objDrive = colDrives.item(\"" + drive + "\")\n" + "Wscript.Echo objDrive.SerialNumber";

            fw.write(vbs);
            fw.close();
            Process p = Runtime.getRuntime().exec("cscript //NoLogo " + file.getPath());

            BufferedReader input = new BufferedReader(new InputStreamReader(p.getInputStream()));
            String line;
            while ((line = input.readLine()) != null) {
                result = result + line;
            }
            input.close();
        } catch (Exception e) {
        }
        return result.trim();
    }
}

