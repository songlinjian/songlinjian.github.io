---
layout: default
---
# Yeti Root Zone

## Yeti Root Hints

Operators who manage a DNS recursive resolver typically need to configure a “root hints file”. This file contains the names and IP addresses of the root zone, so the software can bootstrap the DNS resolution process. For many pieces of software, this list comes built into the software.

**download**:[Root Hints](https://raw.githubusercontent.com/BII-Lab/Yeti-Project/master/domain/named.cache)    [Signature](https://raw.githubusercontent.com/BII-Lab/Yeti-Project/master/domain/named.cache.asc)

## Yeti Root Trust Anchors

The Root Trust Anchor, or Key Signing Key, is used by DNSSEC-enabled software to verify the contents of the DNS root zone is valid. It additionally enables a single chain of trust to DNSSEC-enabled top-level domains and beyond.

**download**:[Root Trust Anchors](https://raw.githubusercontent.com/BII-Lab/Yeti-Project/master/domain/KSK.pub)    [Signature](https://raw.githubusercontent.com/BII-Lab/Yeti-Project/master/domain/KSK.pub.asc)

## Yeti Root Zone File

The complete root zone is available for download at the following locations. Ordinarily there should be no need to download this file on a regular basis, as the contents of the file are served via the DNS system itself.

**download**:[Root Zone File](http://dnsv6lab.net/zone/root.zone)    [Signature](http://dnsv6lab.net/zone/root.zone.asc)

**Note:** althought Yeti DNS project publishes strictly IANA information for TLD data and metadata, it's necessary for us to replace the apex NS RRset with Yeti authority name servers.