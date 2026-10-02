<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	const title = 'WhatIsMore-Dice+numbers';
	const href = 'https://svelte.dev/playground/22934c701bdb4906bbca29e66d26fdc7?version=5.57.1#H4sIAAAAAAAAA-19j3IbN-_gq6Dq3VmKJa1lx2kjS-rPdZPWd2mSS9z0u8lmMtQuJbFZkbol17Kq0b3P9xzfi92Af3a50sqW3bR1W7czscQ_IACCIABSxLLGyZTWurVzfnba-nlC1Ln8UaS09fr8TGSppK13x-1OrVkbsYTKWvf9sqYWM-yABbWm6346m7XlJU0Ulg2JpFXlkeCKciVr3VpPRimbqUHIQxUE8EJEJIFLkjIyTKjE0oQqmKVUShpDH_6bVETR-ogkkjZObK_z6UykSrdm-iP8IKYURqmYQlhrBxMxpXb0sHbiNfv56EfKs6Lh_GhKeVbZ9HviQxyTLRDPBB-xcdEw0t8rm57zkSgaMj4SXjOFDTV5jx7hH3gE_4UMj-kIlq-Gv9BIreB1KmbS1c5SMaOpWsBSqpTx8Qrez8iYfoAWPLtSNOUkgXc-Y8udCF-s4H0ixh-21c1ISqbSVgcht9gZvGCpkVmZGj1pS8Dxcc6GjMc4bD2sIX_DWqMJiRiXqpagKVaKSvWRZ9MhTbtw0LSFbEo_JkSqjzGTs4QsvCp6haUkXXThfVj7Er4jisIFm1Kot9vtBoS1D7ZpJC-9lhdUKuCiCfrDSzKlTXhBScpp2oSLlDD94ezjAf7TwX8O8Z8j_OdxE96RJKMgaUIjRWNowplIUxopJjg0NRJNOOVyTnEuLD5T2WjCKzWhKbxGZlJFU1ngh6R0gdM5fJuIYV1T81IAcgTmRAK9olGGgw3pSKQUJLlE2GrCJGBf5Glb0wtLnJMu7GFxMEsI43urRsGGu44Sycttg0Tycm_VwBFWjSYYWSlPsBl9TphifPwRpxS60LFIxVlKkHe4cL_NlBIcijnmAlXRt8IW68VfqnorMh7_9OYFdCGshbWmlaWpiHGMvZhFdE93AEgJj8X0RxHTMqCiXOYVFoQELTAIJaw1w9qEklkxa6bjmUhEKrumI0T6m-k2TEj0SfdLaaz_DpOMrvd_NSMRUwsHQOivzAzdPmy2j5rt42b7q2b7qevHh2cTwSLd5NCWDceaA_mQunBkCscppTwvHI4_CjtkWGs_ycsvUaz1qJ3mYfOo-bh53HzihsSVp1m9NgmXTGYkeU5pPCTRpy6oNKuusmukC3u9SQekWiS0H9ZGgquWZL_Sbufgcn5iuNfV-J4AdhunOGjLlMM4pYuTsDY4e_XmzbOziy96waQz2Ksc75zfZsSUxteNd_6ycsTIjFASwYlSM9kNgmE2Ee04itpZNGEJbUdJ8P8Yj0hrSFQgsYcMbP_2dHaUzwLjvxVqDqEEF7et55SoLNVzbOcJAABrXlA-VhPowrHX_GKSUjkRSYwdljMiZbd93AR6FdGk23668ppqZOVPb17ILixHhCW3RVqlCzImjFuc7Spe_x80ErcEPadJEgtObwBtyLolbN0podzy2mfJz0bbofp_LtI3VGaJOuc_soRJGgkeyy4cHhwcVArvc83B3y63z0_PX1y3SF5rdu4wDuqt6wZ6ffr27XUDPXN8-jzr_9m_zp69ePHs5dp6TMT4nCuaEr0Xe2KOlZKmlzTdcTVFKsDNbjaZ5QsIgV7StxpKWQcmxnRAyBlHozfOOylKoslaldkoYYVbJBpaso7WbC8ozGHeM9Zgd0JJrO3jXsL4J0hp0g9rmndyQqkKazBJ6ahfUDSfz9vzIxlNhEhkOxLTYH4USRk8DuZH7UjKsDbQQ5XB85Avv2Qja7T1cccgUxrWViHvDc2OjEgIHiUs-tRf1hvQH8CyMM2RzSe6O-IisO_JamX6fKIL3fDaboCDrnWcikxSivPpuhY9NftXIR88u2KqFxgkByFfdqmp6Fn7Hm2QrkZsif-uIMBWARutKqg2FntYW0HPGvO2u7Zo9OdEjAe9wNTm40EV76Cn_YYtELBuS390B3R_9BIGvUD_yUmDnnZwNsBi_0EvwEqfwp6WFi1D3XEihiSpD0W8aFiTDKYkHTPePZhdaf8EtI6NY8bHedlKS4wFU2vW0OardXHuVs0trmDJ9Sl7g-tVlQ4hgHWU_ndGuGJqUThL_9eWVPpVSy0u51z7ki_EeFX0w-X8i1xrHhNFz_mrdIy23nORTomq7KKst-mZ7gqxpFcaDro8iRj3l1pyvUIzQf3l6gRbB4HvhYFuYYzMvmdkgrMy8RNu4-ZTzGQU1j6cuI7WztQ95xOmbFdn_3lWH4S1BU0SMXcgY9dU26I5xMLw7MP7dqdpbc_H2vx8oi3Qr9EIzTsw6MNR_m1Kroxj1IeneaGxKfVK7MP7g6ZnWTa_an7dRGjKNU5pnJK50wu5FxzA84wbjY7fR_YLpFRS9UKMZb0BS2eQcSkS2k7EuB7W3mAD48BQnB_ZDmsmcKC3CugDep4AW3xPrLjG-wS4hf8JcN89UEPOH-CDalb8rl5oqFZOcXnigvC3SYqeBSdlTkjK3VHB4TwVIFKqspRDhQ6pN_bDWkuH0749u2iFtX2jCNrWUtgPa6D0JMcwXEBRb82FiuHlnKlo8mo0eqMXicECrfd80egtcXtPvrVjvtrW-lF68a-L5yyh9UYl017NKIeLf10A43o254zHqGTcEvNb45wpt1r8BgqGiRhCv5AH3TRfWVtkqQQhSxPow09vXrSjlBJFTYzspzcv6gjbtTXotcWM8nqWJk3Y-zhMCP-0V4WvoY7G2-lbGe3ks-vs7bub2HX29t2u7MoVRuPETFgQQDXH3u-d6U00gziDEYsmjKbtdnsPVwhscg9WN09APvifzf-tDFttmMy5ocP4LFPvEe1-NKHRp6G4MlrOq0hJzIQOaNrlgMEYORLptAsyIgmtHzq8QmWMpFZCR6p75MwiryJl44nqdjyDKVQJGdJEC4I1scrVHiqas3sflnMWq0m3c3Dw30sWV8jRYSIJG_N-WIu0hYMhEG1H2dCZ9oJM08MBbom9YHI4gJD3vmi1oKcHgxJDjNGov9EYbWOjn8oO1GoArdYgN5Mrm4S8lyXoVCRs0NNED-xGticBbb6uG1-PqA2CYjzTcgWzhEQUQw1o7K9VDnqBgVsa5JxLlWaREruMY_Vq9Tiucm2cV6-fvXSWA4ogionzhgTvWleo0JKrwcWzf13kvgiIdHsXqylWg7O374oeI715tM3wFR1zg2c1ePPs7bMLh10OoRckTPt3ekZChbOP0CxVtxAE39ldDeA0U2JKFIs0M5QA60xrAj2gRpQhZhKN3Li__KIKXtUMSVtVNUG2TlPmaNFyaeh7q4hiUrFIdqHeIxCLOU8EibWrTJREZVZ4yssqPYUqT-uqVVgDhj0dkBeMfwprg-_sV0j0KZVmOnFoFM7W5HBwOpuRlPKImjVozkpwr-hNjgYYY0az0xKGFsOqF0yOBqbR8ksUResTEKk_wMrU-WzWystwEeMjs34JIFjO6i8DMH_tAAEOsHIoFYi9Rft_ZOxKbf87iMaAb0uRqnpj9cEiaxH1rHsi4bIC07KUlZE1vXN0XXcbjitk6HLgXItVKXYHA92noElTYqPxOY9H4xUInn8djldgiejF7HLwXKTUxJi6bsXIbDymUm_qvwj4BsoUYZQgEWlYC6xyzKfNemREmk-anJ1mDVG0TDA9B7AsQOT09QJE2OL9bR4b634OFIa3Q0FPs1mKBSLgDjI8ZruTBjNzFpViEh1WfEz90gr9sA7Ktpwy3j9oH3TQ--wftJ8-BanoTBd5rQTv6pH7y7Ix7EkcOKpyDWOXiBaqZ1dkOksoamjgawL8nn3I17DVtXa3Nnv14K6Us01KNZlrSzPRoftWZ3UXgnsejihFbGT9AiM6efiliui1QDqqmbIiKtePxr7Al-uGY18Sq8LzxnNc7-VkokpMym0HvcAR44jdcKmcknQxxD-PAZ-TTLs5qV6Qz7Un5PZ_3LmeXdE0YpJKGNlzIruD2ZX-cmgVPhoAGGGW5lZEsd7zc8kKxYOCXrGuiy5aws1CPi7haIe35ykmmjGkak4px1iBwblAwj9lXoE9a9kZn3LvYtF1Dpxm6VQh9xoj0zpKgdgpAfSKKX2ypjfxArvNw-7b41gF42ZMzYaPE727GVg-xFkN4J0uAFcCVkJ8B2GtT2F_1myQKqyBaQOj_NjYorRpOK5Bc3sw2plhrYo5lafO1XZlddPBxuSGtXN3pPpH4p6fYO-CfdG4Cv_8-G03_OuVQ_wPW-qfJDduTVWOyi5UFY2rqMLTyz-fIMRiF1p0uyoy8LD3zycDsdiFDN3OI6Pk_OyuWXxkVwN9xW5j3_G1Sql9zjx9wmbuLhQqtrjPsPs25PXx96GDKl2vB83vRmib0Dve9iEWFyja-qLA7fDZ6K0x29JipqXQNw89knakwtwGuG6Au-JvscsZey2ZJWzvKF75daXVAMzdlAqZKhpVblLOHgJ91wPjm9fo-gLWzQtv7YJP9apbb3TTtvS7YbtxIaka381m1-g6LXyfG9HyPaT2aKtCq2p4zf7yRyA727qJVDXcusX_QdhadbQDunZFV6zn3S4S4Jl45TWCcoV_iQAj3t-lZC6BALaCEYkozJly8SpzwH-AVvpTE8IpLh54Z_cc-nB8UirC8T_qsMhHBNrPT963NouF6ueH8mutCreu_bRcpU8CoA-dJwflignFk4a8Rh-ak5hlGLI7PCjfIurJy7GB1DdHCyvbvb80f1f6okUP1yxc9cPacViDhf2bYsHhAX5auE8GVljrHOM3C8t9HbEk6S_XGLTSxa3ce_Xc1sBGztgIeL__VO8s0ItYGiUUIhz96DCsQbRwn9L-0pC62hwrFspc7NkO46vjMgyohlIFpNP5-jNAKVAx8HwouxPk4bLOlVtA0WRUE3QXruxI0PWY7EbO9TBuhUhx9Yr3-18_COA_XQDvLjxfPQjPHyk8n3vibyOCpXl_8jDvf4V5L83Z8e8-Z38-o_5M7Vpi9uN_ALM_C6OOfidG3RtJOPydCPwsyHUqkLvj9mC8W_yBxXhQupOGXhbeNJMqFZ9oV3uEJyE3X1vm6texvVfmfp2n3UJ7X8zgtnQ9qgEcrAHorN_f3_X2vg7kfNzqfFc3-Ac74Tyb4g3KB5e8esXq2-E5gLw_FrcIjyYi7Ye1KYvjhIY1iMWUccJVC8EljFN77TElGN_KfzHmBodH0GkfWxRyYTDt5o4jQ5HEYW2w5Nl01Qtw4M9pd23SpwHcN_rubhLmBBoQ95bCuxsGm1NoINw3Cu9utFTM4b1chXe1WXL6vjq-zyJ6d--1YgLvp4zeNai3OYP3XEDvOoE5ffdl_n63WOjDzn8v6HvY-R92_oed__5M4N9_5_97bo2f86TnYWu8F_Q9bI0PW-P93xr_UXvH32T3_93Oih92jntB38PO8bBzPOwcf75q_ZxXOv5yqvVhYf5VF-bfzt75p-mdz3m76UHv3BMK__565--_MD_nbbq_yMJ82Ez-4jL7OS9I_kVk9u8_qZ_vYuk9Xql_jzuvXlaf8l3XcsXnfa161-eneenpaXyoDV_-I7NZt3Qx1WVe0c9Nl5-mtoX-C9QeGHNtdSaQNEYSl1ykX84EYm-3-j_zts-GnmYxE_XqH643bLfy78OrOm78gtx19RK9VPUr54FxnfLMDFv7Vf1U2fXGn1nv2hHbun74W_Jd-2Fb1y8qWO74bF53ZoKXvhev35enY63UvYtk0k7o1_W1IGEdolFVbp8-0skq5iSN-z5APjzLB8pvPQ_zBwhMqdISds4ZShH7lfFxyPWjlTrDAafzV5zqj-U3vfM3dNdeb6-bbFbmxeIg0E9He2_Ebnt4Gd9Ttj1PzPPe5SeF9fPm7fbaO8NhLQx5WNu_Gap5AN0De5fXi1ebZJ-9fbdG9DrFPlV2_PyhXo-q4vFeR1QF4viS9o6P_pqXtdeQNuJYjxpL95akIT1_Rh32942yG9UL0bVSmr-h7Ql18ei7ykUf-hDlrwM7QfMaXpIUmP08Emmd9Q9OWM8uJvsy3gnb329YZgKwUd1Wv2cfBvlAObv1f2trKrRPrNm31lbmxXrAXHWhcisdH12vO4FDvFIqZ4JLatJd9XWDNhfzeqOlObX-srxHksXwYyTw1cEp5cpMMC5W04qNIFd_eTKofh869nnvmyE1m82mgxaqFTizpRLs4W3A7gz16BZQdwb6eHegO8M83hmmB1LLCGqtz_ry_xk-Bbzbk__XvfZfVjlrK3ff5Idwj9KjIlwrKt6xb26-Xu9KLZf2K7mVN9rXE7Fvl5wr3qaFdWVpZenCIlOQh85wrOtG-QuvXt3I1A3HNuvFotTP_SRGtzG5FvCB3PdFm9KzuPth7UPxjjtqGKc_jLLKtV1ocrdZUvdtB6uWKl_baizLO3n_2qfrilEKePkzL1ZRu-oCD38b7_nvbZnXoxpL3yzT8OqNk9XqpBhtfd_ezHYQTfC1SAsoWbiZB5Hpd4c9acEHmLl5-XhvQwb3zE_I1uYRpMpGI3zld23yPbnwUn_YxV6ak5wDdlbMPvDbZqV4ku-meeF3nZmyyVzMze2n5vzlPZmcfBFVvWqXa-GtbBr0K_jkz_XNDBkxzuSExkC0qYy5u_aLwZBjdiyi1a0EYlSLL0WaUWvtciqRBC1chVFdRnv9SbRH20nK2bEpVpIq3AZEpuplZ8jKSdODemOyusbJylsY1y2Nwr2oXhbFm46-3JeTP3jvVTZcKwBvl845N-hX8w2dsmvYZgDexLbcC_xzOfbaPb1XzSzzTNkmn25Fau64_rmk6tclt5Nqno_zSc2fsS_yy-YObOErmFWyWlcxX6z3KBSMxxqbti53X1cux23pseBHnYODg5IWK_4pp6yy-WE2XOqwwqPGwip_fTP_jEPPTXsQwPeU05QozCVgc9_CjLAUdXqMCRN4hGEZRceoxHTY6X2n3V5OydVLbQeuPnheVjMtu1nAeuum8gnkrhb-n0IffiRq0h4lQqR1_dGgUW88ygWk9Ig5axRJV96vv7fdXCvYTz986K-32k832n34gKlz5JzMdLxLzYX9DXpJHPwIzG0p9fq22237bRON0ngV4Zyym-uXVodzwIturHuTJYezOmFOVVYZzP6-h4knUvpNnlRG_yT8C4fwymQgyFN4tlo5WypfAq8NHJtckgLLLcxSsLIRCf1ggImRttiYY9ov0uksWly0uODMJZy5pC1qXIgW8xN92kQMoerJGeHeu-wY7Gx9ogs5EamKMiX7Ye20cNIwzaTLrlJv9Ad5UGNVavGJLjAfyPY2qdCs4OSSjYnJITYoakuvyEd_9XfzewHy2H7ZyAyRP55__ZPg9in65X9N1DRZi1au_Jfqyw0LVeg3sicQ7o83sJ893Etmmk96WHNJSb0gsmdG1wYvhV4MfopRb5j1_cMj7drRtoRaXazU6XLEAKKESKlT5aYfhyyNMYfra1zhOl_yNx5mmywp0KnvL_P9ZtVsLb2dZtWArS8tA5kKPq56WlmP4I1YOvlBCfFyX5nMWRCRJKpD_enB5RxaGD2re7qjgWdQTw5mV9CAAOqb1fvQgQYUqfl4O-eIic7kGRoZxxOv1jAR-rgIzDMZXegcYAourTXNUxmlInOShgqxC4Yq3Xco0pjq1MM6RAcVWYm_fPb18ZPDU13rikajkfmepRILZoLlIL1jtS7gqZoJrYYqeIT_KjyeKWcDC5WKDZGVWOpFbfDszK5AioTF4E7L7I7zKDAjwIxmCqhCDQtRSjOJSZGxzuUQjuklTcSMpu2p-JUlCWmLdByM0iAWkQx-psPg7O3b4JdMKjZatOyJmJlsJkEy9PWkyCaEKZrqSc8SmgIeOVE5I6j6WQIjksUpYQrPzv7zb0xocKkVOwa8OWGIX0IgrCUkHdMsxTNNCu44DQqKPL7FLrWhzWBrxc7McbnGZGwDV6G3IRV3RyyVqoXJoLfAOig1xw23urWDb5ojprc7jsRUyJXHkeWKyuPIWx1GeseEXgLXJydrB4vlDM3bTx1NGtdIOUCd_e0WoBuv1Wm4YzB8KuiOXTFn7p1HldEdum6xpryMOjoDKJpU5xJ3l9br8zORpZK23nXaB6GXtU8v-U1rDGH0FOZrdnuvSvNPMZRtF9-E6Ltswic2J7fNSb3KrZKSTZKzfQWl3mt2w03WyN0tkputEt8O6QUq3pUNdsv7-N1vYkcZyv1nC1ppRlSsyeaEqBdoUTNSh1b86Yvz71_235x__8OF7YtKDWjMlElO2yPrOeaHJB2SRTtKwtrgfy6-XZhMeEVqsN00HGY5r9Rw5Qpfw60vsdMhRijXFlm-qE5BMp20a06HuCVmJguwADyHICk1lx-GLMFZFyMgnE1JIqE-yaaEm6geFxzM10aesJdxyEyqH5FFE-1ApyO9q3mwUaWkVFGo0_a4rfVaU6so7XwLJRsaPlLHeCYymTeUUVNrUMLHCW24HQ-zcuvoau64a0MDJFVoSBpsCQdSStRYp5eUI8Kai1eo6UYjFqELifkeDGVNkEgHkZCIuW6ZEqlko-2yLvwvLuYchtk4zwfl0ktimkpMnWUwSClwoWBOk8SaJjS2GSltW-2Y6s0kIngtiCUJDCnIKBVJst74h4sfX4B5vJ5xm3gozzvEpB5LErxr8CuNv8BuhoVmcq43Zihv_fS2sGdOX58HONzHtxZe-vH09XkD1vJpam68phx3eHi-liPL48lpHIOkuFgVNdujubeDPLdZXpyXjkV5Dis9iWOdCaXEijc0EmnsBEZnfaXFAASvmORpY7ZBtAABEOB3dnQdyLeRIRTKm-qNCI5TcsnUwjV2uUAli02u1HwGo4ShQacrCsGULl0nSYBwkiwky-8i6YRZCIMo_Z3yGKt02ADDHIYKlY_gD33zCAh4pi1RHesvMxlIHIOYOSWRzXS6z7oSGhEz0DcN7C8Fx9stNDZpFsy8lmehXWI3vDEszNOByS6cKkMVXh34_vTHZ029kIAYOQLb0fHem48mzmkg0o1GLvdjdW1-zKkvEwZ5yl7QwuoYptUL4ZFOYZZqR1uCGCqj-bQhmXGGeWrzUY17dkdgJJmThXRXnXSSd8z3PqUW3pTxYEqugimNGeHB6SVNUXu8sQfAOtuaN3S-1owq5hiXMSDR7ciTxnk6lXEzDW7FWGATNp6AjESKWh03TIcP-URBZlrfo0TZ451Y6210WReAridJk4VZKxzqKdGn8GpC9MgxujoRSZJFo6RZTA7YNxQ1Z7JAaUQmWSWjbcUjp2aUxeYsoQRZmc0gwpU6pHjWDXJC9B0ApgwOr-Uimgg45ya_MIskvFVZjLuqzrSzoeJ-EHO9BPCsRX1ToeB6bHBhzvp7gV6FOH3SV3X-emZcf55imtgeW09czQYnpXW4BXaP6aCHLkOGzzBWwpXUoGN6yYyY4bceG9gVjq2bOD6BmZBMr-35hNq9v8cGyhspIlxvKdTU4v5NeROBMi4z02fhWk0YNxpq_SywEocTj7gXRXFOnODUccyTzZiifzGk8bUMSnUASTPIB81GeLEzFbOU4SYxn7CEuuueCYuIPY4gMY6E5Rztg2hC8NhtTNtlueiZTMbqdcouSbQAJmVmpdKkOO6xwSkkZL5AbTwRWRJrfWp4jZAlWZj1bTW7DjuQcUr1tKHIorBJyCQu8JgootWqjHALYSMWmRqkzYnpG5oQNFLRoCiSLZ9hJii0C_U0WON1D82BbhDMJ6ibMKCHt01JQobtKNkbjFJtZcZoySJmsZNZejWjKZtqQcunw1WmZvyQb5rIcdIm0VSbGrFgQeeg3ek8Pg6Ojp8cP3163D46fvLk4PFBWBuQVLEooThwM-Qo2BtoI7wxUxpXMQ0s3vpvaxipvYEUWarTTZMBhl7GTE2yYbs3TAcuge3h4CxFi14Gp9EnLuYJjceaKMc1dTGh64Y0zFKB-bHR1iK4uyRkKMyqdZrUaiOrj0J1g6_wn3-n__n3dAHf6kKNr94FNrshce04itoZRleo6Y_4wQsyNJQirzSNRhdWAPlFkGjCpu0SDqZsBxR-EcPhYi7SJHY9h8MF_IwF2K3t6UxkwW5Oz_wItWCl27NeVRnaWYvJ4I1_yjM8zygHI9Czc3Hj-VFrSFKYH7USDEq1xilduCznZlATaUBjZa1fnIoZHny0JuLSBiQwyOUC2_4IuiSsDTAZuBeS1s23QbUkgsHQxGvxS0TSuPXYxj-uGc51ZIpigKsi0K6ZtIdRqz0M5mPCVD9ejunj0T2uGMCB9WjbCh93OQ3f7FAWvjmUMqdbv5UCY_brMda2TzfYDTOz60DofOthtG_t8cqEEdDF10Plucjd3yL2j8HY7jgRQ5LUvzQChielbgPuot8XfTLXXZWYdeHQRGFxhF9bjMf0qnt4UBykO1jtCtEpjmCrepoQ8e0Cr-ZHF-WlmZd5azIIwP4-o_yjigW4E3ltC3yidAZDoSZAIBHGIYmBXimacpJoELj0ggCeuTLvYrxd7lvvxydi3Myvi4O-bgoXEyZRZUdZmhpTEu0VekWjTNG4CdYcdejksBkH76cuiNX63QvXUivMqYizhDoemCsZQfBbLuiv32K_y7V8xMBAGyZiuH6__eYr-fb3CzfPhD7UP4zZmClZ118aS7sGU6qylIMphR50DuAb2DvYgy7s7eExlq4w462DraTS3kzXkerSZXMj6Ha8sPa-ONfej9tjqp5nSfJ_KEnr-YWZ_bDW8lqVqNBdfhRcTeqN_c7uXQwuDXcdzcxJ_m2z_Q8YAtcdzE2b_bDWDWvuHk8VToxnisp8jP2wVncjVDR_a-4k-c3beXMLMMmvLtWLVg2PTH2jV0_Rbmpj7WilrD82K687t_lOp0twZzZeigV98GIb-QHponFFXgak4oZ8CuNtKRRG498xbYJ_8ITOKx4vmVOHkjGjT6ZNg6LFqqfp5v0lr4i1e7HztVQRy-F4_fbF1g6YNGJZGcsvovV-bH7rDYry_449Nv_DdU1tOgdwuSGuazvoBciS_AIGlLhWPr5Y9UrS88BFn4s-a9DUsfdZQPNI33koK4QPzZoiLJkzHte6-hbH6v8DWibk91CjAAA';
	let prefersDark = $state(true);
	let isDark = $state(true);

	function switchTheme() {
		const value = isDark ? 'light' : 'dark';

		isDark = value === 'dark';
		localStorage.setItem('sv:theme', isDark === prefersDark ? 'system' : value);
	}

	$effect(() => {
		document.documentElement.classList.remove('light', 'dark');
		prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const theme = localStorage.getItem('sv:theme');

		isDark = !theme
			? prefersDark
			: theme === 'dark' || theme === 'system' && prefersDark;

		document.documentElement.classList.add(isDark ? 'dark' : 'light');
	});
</script>

<svelte:head>
	<title>--from-playground {title}</title>
	<script>{ const theme = localStorage.getItem('sv:theme'); document.documentElement.classList.add( !theme || theme === 'system' ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : theme ); }</script>
</svelte:head>

<div class="layout">
	<nav class="navbar">
		<div class="nav-left">
			<a href="/" class="svelte-icon"><img src={favicon} alt="Svelte" width="32" height="32" /></a>
			<p class="title">{title}</p>
		</div>

		<div class="nav-right">
			<a
				href={href}
				class="raised"
				target="_blank"
				rel="noopener noreferrer"
			>
				--to-playground 
				<span aria-hidden="true" style="margin-left:0.25em;">↗</span>
			</a>

			<button
				class="raised theme-toggle"
				onclick={switchTheme}
				aria-label="Toggle theme"
			><span class="icon"></span></button>
		</div>
	</nav>

	<main class="content">{@render children()}</main>
</div>

<style>
	:global(body) {
		margin: 0;
	}

	:global(html) {
		margin: 0;
		--bg-1: hsl(0, 0%, 100%);
		--bg-2: hsl(206, 20%, 90%);
		--bg-3: hsl(206, 20%, 80%);
		--navbar-bg: #fff;
		--fg-1: hsl(0, 0%, 13%);
		--fg-2: hsl(0, 0%, 50%);
		--fg-3: hsl(0, 0%, 60%);
		--link: hsl(208, 77%, 47%);
		--border-radius: 4px;
		--font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
		color-scheme: light;
		background: var(--bg-1);
		color: var(--fg-1);
		font-family: var(--font);
		line-height: 1.5;
		height: calc(100vh - 2rem);
		accent-color: var(--link) !important;
		min-height: 100vh;
		background-color: var(--bg-1);
	}

	:global(html.dark) {
		color-scheme: dark;
		--bg-1: hsl(0, 0%, 18%);
		--bg-2: hsl(0, 0%, 30%);
		--bg-3: hsl(0, 0%, 40%);
		--navbar-bg: hsl(220, 14%, 16%);
		--fg-1: hsl(0, 0%, 75%);
		--fg-2: hsl(0, 0%, 40%);
		--fg-3: hsl(0, 0%, 30%);
		--link: hsl(206, 96%, 72%);
	}

	.navbar {
		color: var(--fg-1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0em 2.5rem;
		height: 3.7rem;
		background-color: var(--navbar-bg);
		box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08),
			0 1.5px 4px 0 rgba(0, 0, 0, 0.04);
	}

	.nav-left {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.svelte-icon {
		display: flex;
		align-items: center;
		text-decoration: none;
		transition: opacity 0.2s ease;
	}

	.svelte-icon:hover {
		opacity: 0.8;
	}

	.title {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 0;
	}

	.nav-right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.raised {
		background: var(--navbar-bg);
		border-left: 0.5px solid var(--fg-3);
		border-top: 0.5px solid var(--fg-3);
		border-bottom: none;
		border-right: none;
		border-radius: var(--border-radius);
		color: var(--fg-1);
		cursor: pointer;
		transition: all 0.2s ease;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
			0 1px 2px rgba(0, 0, 0, 0.06);
		text-decoration: none;
		font-weight: 500;
		padding: 0.25rem 0.75rem;
		font-size: 0.8rem;
	}

	.raised:hover {
		border-left-color: var(--fg-2);
		border-top-color: var(--fg-2);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15),
			0 2px 4px rgba(0, 0, 0, 0.1);
		transform: translate(-1px, -1px);
	}

	.content {
		padding: 1rem;
		color: var(--fg-1);
	}

	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.8rem;
		height: 1.8rem;
		padding: 0;
		min-width: 2rem;
	}

	.icon {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		-webkit-mask-size: 1.5rem;
		mask-size: 1.5rem;
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-position: center;
		mask-position: center;
		background-color: var(--fg-1);
	}

	.icon {
		mask-image: url('data:image/svg+xml,%3csvg%20xmlns="http://www.w3.org/2000/svg"%20viewBox="0%200%2024%2024"%3e%3cpath%20fill="%23666"%20d="M12%2021q-3.775%200-6.388-2.613T3%2012q0-3.45%202.25-5.988T11%203.05q.625-.075.975.45t-.025%201.1q-.425.65-.638%201.375T11.1%207.5q0%202.25%201.575%203.825T16.5%2012.9q.775%200%201.538-.225t1.362-.625q.525-.35%201.075-.037t.475.987q-.35%203.45-2.937%205.725T12%2021Zm0-2q2.2%200%203.95-1.213t2.55-3.162q-.5.125-1%20.2t-1%20.075q-3.075%200-5.238-2.163T9.1%207.5q0-.5.075-1t.2-1q-1.95.8-3.163%202.55T5%2012q0%202.9%202.05%204.95T12%2019Zm-.25-6.75Z"/%3e%3c/svg%3e');
	}

	:global(html.dark) .icon {
		mask-image: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23d4d4d4'%20d='M12%2019a1%201%200%200%201%20.993.883L13%2020v1a1%201%200%200%201-1.993.117L11%2021v-1a1%201%200%200%201%201-1zm6.313-2.09.094.083.7.7a1%201%200%200%201-1.32%201.497l-.094-.083-.7-.7a1%201%200%200%201%201.218-1.567l.102.07zm-11.306.083a1%201%200%200%201%20.083%201.32l-.083.094-.7.7a1%201%200%200%201-1.497-1.32l.083-.094.7-.7a1%201%200%200%201%201.414%200zM4%2011a1%201%200%200%201%20.117%201.993L4%2013H3a1%201%200%200%201-.117-1.993L3%2011h1zm17%200a1%201%200%200%201%20.117%201.993L21%2013h-1a1%201%200%200%201-.117-1.993L20%2011h1zM6.213%204.81l.094.083.7.7a1%201%200%200%201-1.32%201.497l-.094-.083-.7-.7A1%201%200%200%201%206.11%204.74l.102.07zm12.894.083a1%201%200%200%201%20.083%201.32l-.083.094-.7.7a1%201%200%200%201-1.497-1.32l.083-.094.7-.7a1%201%200%200%201%201.414%200zM12%202a1%201%200%200%201%20.993.883L13%203v1a1%201%200%200%201-1.993.117L11%204V3a1%201%200%200%201%201-1zm0%205a5%205%200%201%201-4.995%205.217L7%2012l.005-.217A5%205%200%200%201%2012%207z'/%3e%3c/svg%3e");
	}
</style>