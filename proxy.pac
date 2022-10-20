function FindProxyForURL(url, host)
{
    url  = url.toLowerCase();
    host = host.toLowerCase();
    
    if (isInNet(host, "172.16.0.0",  "255.240.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "127.0.0.0", "255.255.255.0"))
        
        return "DIRECT";


    return "SOCKS 192.168.1.86:11080";
    
}