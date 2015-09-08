---
layout: default
---

# How to Join Yeti

Please contact <discuss@lists.yeti-dns.org> if you wish to ask question and receive latest update in the Yeti project.

Below are details about the different ways of joining the effort.

## 1. Joining Yeti as a Yeti Root Server Operator

To run a Yeti root server, you need a server with good IPv6 Internet access, and a dedicated domain name of the root server which is configured as a slave to the Yeti distribution masters (DM). There are a few steps to join Yeti as a Yeti root server operator.

 **Step 1: Application**

 Please send a mail to <coordinators@lists.yeti-dns.org> with your basic contact information, short introduction or a short declaration to join Yeti Project as a volunteer authority server. Most importantly send a domain name and IPv6 address of the new root server which is to be added into the apex NS  RRset of our root zone. 

 Note that even though we publish strictly IANA information for TLD data and metadata, it's necessary for us to replace the apex NS RRset.  Once we verify that your server is operational we will add it to the apex NS RRset, and we will add you and your designated colleagues to the <operators@lists.yeti-dns.org> mailing list.

 **Step 2: Root server setup**

 The root server must provide DNS service only over IPv6. No A record and no answer when queried over IPv4. 

 ACLs are in place on some of the distribution masters so you need 
 to request a hole for your server's IPv6 address (send an email to 
 coordinators@lists.yeti-dns.org. Test with 'dig @$DistributionMaster 
 AXFR .' to see if you can do a zone transfer. You may have to add 
 '-b $ServiceIPaddress' if your machine is multihomed.
    
 Configure the root server as a slave to the Yeti DM. You can add the following to the configuration file of your root server.

    BIND:

    	masters yeti-dm {
    		240c:f:1:22::7;			# bii
    		2001:200:1d9::53;		# wide
    		2001:559:8000::7;		# tisf
    	};

    NSD:

    	zone:
    		name: "."
    		request-xfr: 240c:f:1:22::7 NOKEY
    		request-xfr: 2001:559:8000::7 NOKEY
    		request-xfr: 2001:200:1d9::53 NOKEY
    		allow-notify: 240c:f:1:22::7 NOKEY
    		allow-notify: 2001:559:8000::7 NOKEY
    		allow-notify: 2001:200:1d9::53 NOKEY
     
Afterward, please send a mail to coordinators mailing list to notify that it is done.

 **Step 3: Monitoring system setup**

For the purpose of experiment and measurement study,we require each root server operator to capture DNS packet on DNS servers and save as pcap file, then send to our storage server. Regarding the data sharing issue, please turn to the [data sharing document](doc/DataSharingDeclaration.md) of YETI Project.

Please read the following link how to setup and join the YETI monitoring system: <https://github.com/BII-Lab/Yeti-Project/blob/master/script/monitor-external/README.txt>. 

This script submits DNS packet via SSH. Note that it uses SSH public key authentication, so user should provide SSH public key via mail to the coordinators (note that currently DSA and RSA are OK, ECC will be supported later).

## 2. Joining Yeti as a Resolver Operator

We encourage people running resolvers to join the project. These should be used for real-world queries, but for informed users in non-critical environments.

To join the Yeti project as a resolver operator, you need to have a working DNS resolver with IPv6 support. You need to update your "hints" file to use the Yeti root servers instead of the IANA root servers. The current "hints" file can be found here: 
<https://raw.githubusercontent.com/BII-Lab/Yeti-Project/master/domain/named.cache>  

 And the DNSSEC key is:

    https://raw.githubusercontent.com/BII-Lab/Yeti-Project/master/domain/KSK.pub 

**Warning**: the DNSSEC key of the Yeti root (the KSK) changes *often* (typically every three months). You must therefore configure your resolver to use RFC 5011 automatic update *or* be ready to make many changes manually.
    
In the purpose of some experiment, we need information and feedback from client side, so we encourage resolver operator to register it mail address for technical assistance, Yeti  testbed changes or experiments coordination. If you setup your recursive server linked with Yeti root server, please contact <coordinators@lists.yeti-dns.org>.

Configuration of the resolver:

    Unbound:

    	server:
    		root-hints: "yeti-hints"
		# Check the file is writable by Unbound
    		auto-trust-anchor-file: autokey/yeti-key.key

    BIND:

        zone "." {
           type hint;
           file "/etc/bind/yeti-hints";
        };

        managed-keys {
	       "." initial-key 257 3 8 "AwEAAchb6LrHCdz9Yo55u1id/b+X1FqVDF66xNrhbgnV+vtpiq7pDsT8 KgzSijNuGs4GLGsMhVE/9H0
wOtmVRUQqQ50PHZsiqg8gqB6i5zLortjp aCLZS7Oke1xP+6LzVRgT4c8NXlRBg3m/gDjzijBD0BMACjVGZNv0gReA g2OCr9dBrweE6DnM6
twG7D2NyuGjpWzKeJfNd3Hek39V9NGHuABGkmYG 16XCao37IWcP/s/57HuBom5U3SNfuzfVDppokatuL6dXp9ktuuVXsESc /rUERU/GPle
uNfRuPHFr3URmrRud4DYbRWNVIsxqkSLrCldDjP1Hicf3 S8NgVHJTSRE=";
        };

In the BIND example, the text between quotes is the key, from https://raw.githubusercontent.com/BII-Lab/Yeti-Project/master/domain/KSK.pub

## 3. Joining Yeti as a Researcher

Researchers are encouraged to join the Yeti discussion list:
	<http://lists.yeti-dns.org/mailman/listinfo/discuss>

Potential experiments or analysis can be discussed there. Confidential 
	inquiries can be sent to <coordinators@lists.yeti-dns.org>.