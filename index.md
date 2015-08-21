---
layout: default
---

# Introduction
"One World, One Internet, One Namespace" is the essence for the success of today's Internet. The top level of the unique identifier system, the DNS root system, has been operational for 25+ years. It is pivot to make the current Internet useful. So it is considered somewhat ossified for stability reasons. It is hard to test and implement new ideas evolving to a more advanced level to counter challenges like IPv6-only operation, DNSSEC key/algorithm rollover, scaling issues, etc. In order to make the test more practical, it is also necessary to involve users’ environment which is highly diversified, to study the effect of the changes in question.

To benefit the Internet development as a whole, the proposal of Yeti Project is formed to build a parallel experimental live IPv6 DNS root system to discover the limits of DNS root name service and deliver useful technical output. Possible research agenda will be explored on this testbed covering several aspects but not limited to:

* IPv6-only operation
* DNSSEC key rollover
* Renumbering issues
* Scalability issues
* Multiple zone file signers

Interested parties in this community like individual researchers, labs of universities, companies and institutes are welcome to join us as Yeti root server operators (at least 25 operators), recursive name server operators, and individual researchers. It is expected that Yeti Project can also gain the support from vendors, for example, the DNS software implementers, Developers of CPE devices & IoT devices, middle box developers who can test their product and connect their own testbed into Yeti testbed.

Note that the Yeti DNS project has complete fealty to IANA as the DNS name space manager. All IANA top-level domain names will be precisely expressed in the Yeti DNS system, including all TLD data and meta-data. We hope to inform the IANA community by peer-reviewed science as to future possibilities to consider for the IANA root DNS system.

Yeti DNS System is a live testbed for Root DNS Server System:

* A testbed which is usable, but not recommended for regeneral use by regular Internet users
* The project will terminate at the end of Year 2018 (this plan may be extended for a while to complete the experiments but not longer)
* It deosn't add/delete delegations found in IANA Root zone. It just changes delegation information only for Root DNS servers, and sign all RRsets with a Yeti DNSSEC Key.
* **NOT providing alternate name space.**

As project coordinators we are keen to invite interested authority name server operators, recursive name server operators, individual researchers to contact us by e-mail, either individually: [ljsong@biigroup.cn](mailto:ljsong@biigroup.cn) (Davey Song), [kato@wide.ad.jp](mailto:kato@wide.ad.jp) (Akira Kato), [vixie@tisf.net](mailto:vixie@tisf.net) (Paul Vixie) or as a team: [coordinators@lists.yeti-dns.org](mailto:coordinators@lists.yeti-dns.org)

Project are placed in a repository in GitHub: [Yeti-Project](https://github.com/BII-Lab/Yeti-Project) 

There is a discussion mailing list for project participants, reachable here: [Yeti-discuss](http://lists.yeti-dns.org/mailman/listinfo/discuss) 