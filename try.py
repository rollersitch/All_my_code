import urllib2
from xml.dom import minidom

IP_URL = "http://freegeoip.net/%(format)s/%(IP)s"


def get_coords(ip):
    url = IP_URL % {'format' : 'xml', 'IP' : ip}
    content = None
    try:
        content = urllib2.urlopen(url).read()

    except urllib2.URLError:
        return

    if content:
        d = minidom.parseString(content)
        lat_el = d.getElementsByTagName("Latitude")
        lon_el = d.getElementsByTagName("Longitude")

        if lat_el and lon_el:
            # How crazy is that??
            lon, lat = lon_el[0].firstChild.nodeValue, lat_el[0].firstChild.nodeValue
	    print(lon + " " + lat)


get_coords('79.47.169.242')
