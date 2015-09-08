---
layout: post
title:  "Welcome to Yeti DNS Projet!"
date:   2015-05-10 10:19:41
author: Paul Vixie
categories: Yeti blog
---

This is the Yeti DNS Project, an experimental testbed network of DNS root name servers.

This testbed network will be used to discover the limits of DNS root
name service, including the following:

* Can root name service succeed if it is only connected via IPv6 (and
never via IPv4)?
* Can we change the DNSSEC "ZSK" more frequently, perhaps every two weeks?
* Can we change the DNSSEC "KSK" more frequently, perhaps every six weeks?
* How many root name servers is enough? How many is too many?
* Can we add and delete root name server operators frequently, such as
every month?
* Can the IANA name space be served by more than one set of root name
servers?

Note that the Yeti DNS project has complete fealty to IANA as the DNS
name space manager. All IANA top-level domain names will be precisely
expressed in the Yeti DNS system, including all TLD data and meta-data.
So, the Yeti DNS project is not an "alternative root" in any sense of
that term. We hope to inform the IANA community by peer-reviewed science
as to future possibilities to consider for the IANA root DNS system.


Resources
---------
The latest zone file, public key, and description of the Yeti DNS
project are placed in a repository in GitHub:

> <https://github.com/BII-Lab/Yeti-Project>

There is a discussion mailing list for project participants, reachable
here:

> <http://lists.yeti-dns.org/mailman/listinfo/discuss>


Statistics
----------
The DSC page of the Yeti root servers is available, where you can see
the traffic of the testbed:

> <http://dsc.yeti-dns.org/dsc-grapher.pl?plot=bynode&server=Yeti-Project>


Coordination and Participation
------------------------------
The Yeti DNS project was launched in March 2015 by representatives from
WIDE, BII, and TISF, who now act as co-equal project coordinators. The
role of the coordinators includes outreach to the community, cooperation
with Yeti DNS authority name server operators ("providers"), and support
for Yeti DNS recursive name server operators ("subscribers"). Initially,
the coordinators will also operate the Yeti DNS distribution master servers.

The Yeti DNS project coordinators invite interested authority name
server operators, recursive name server operators, to contact us by e-mail,
either individually:

> <ljsong@biigroup.cn> (Davey Song)  
> <kato@wide.ad.jp> (Akira Kato)  
> <vixie@tisf.net> (Paul Vixie)  

...or as a team:

> <coordinators@lists.yeti-dns.org>


About Us
--------

[BII Group](http://biigroup.com/en) &mdash; the parent company of BII (Beijing
Internet Institute), a public interest company serving as BII's Engineering
Research Center.

[WIDE](http://www.wide.ad.jp/) &mdash; Widely Integrated Distributed Environment.

TISF &mdash; a collaborative engineering and security project by Paul Vixie.
