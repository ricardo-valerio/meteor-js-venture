// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Countries.find().count() === 0) {
    var data = [
        /* 1 */
        {
            "_id" : "AD",
            "country_name" : "Andorra"
        },

        /* 2 */
        {
            "_id" : "AE",
            "country_name" : "United Arab Emirates"
        },

        /* 3 */
        {
            "_id" : "AF",
            "country_name" : "Afghanistan"
        },

        /* 4 */
        {
            "_id" : "AG",
            "country_name" : "Antigua and Barbuda"
        },

        /* 5 */
        {
            "_id" : "AI",
            "country_name" : "Anguilla"
        },

        /* 6 */
        {
            "_id" : "AL",
            "country_name" : "Albania"
        },

        /* 7 */
        {
            "_id" : "AM",
            "country_name" : "Armenia"
        },

        /* 8 */
        {
            "_id" : "AO",
            "country_name" : "Angola"
        },

        /* 9 */
        {
            "_id" : "AQ",
            "country_name" : "Antarctica"
        },

        /* 10 */
        {
            "_id" : "AR",
            "country_name" : "Argentina"
        },

        /* 11 */
        {
            "_id" : "AS",
            "country_name" : "American Samoa"
        },

        /* 12 */
        {
            "_id" : "AT",
            "country_name" : "Austria"
        },

        /* 13 */
        {
            "_id" : "AU",
            "country_name" : "Australia"
        },

        /* 14 */
        {
            "_id" : "AW",
            "country_name" : "Aruba"
        },

        /* 15 */
        {
            "_id" : "AX",
            "country_name" : "Åland Islands"
        },

        /* 16 */
        {
            "_id" : "AZ",
            "country_name" : "Azerbaijan"
        },

        /* 17 */
        {
            "_id" : "BA",
            "country_name" : "Bosnia and Herzegovina"
        },

        /* 18 */
        {
            "_id" : "BB",
            "country_name" : "Barbados"
        },

        /* 19 */
        {
            "_id" : "BD",
            "country_name" : "Bangladesh"
        },

        /* 20 */
        {
            "_id" : "BE",
            "country_name" : "Belgium"
        },

        /* 21 */
        {
            "_id" : "BF",
            "country_name" : "Burkina Faso"
        },

        /* 22 */
        {
            "_id" : "BG",
            "country_name" : "Bulgaria"
        },

        /* 23 */
        {
            "_id" : "BH",
            "country_name" : "Bahrain"
        },

        /* 24 */
        {
            "_id" : "BI",
            "country_name" : "Burundi"
        },

        /* 25 */
        {
            "_id" : "BJ",
            "country_name" : "Benin"
        },

        /* 26 */
        {
            "_id" : "BL",
            "country_name" : "Saint Barthélemy"
        },

        /* 27 */
        {
            "_id" : "BM",
            "country_name" : "Bermuda"
        },

        /* 28 */
        {
            "_id" : "BN",
            "country_name" : "Brunei Darussalam"
        },

        /* 29 */
        {
            "_id" : "BO",
            "country_name" : "Bolivia, Plurinational State of "
        },

        /* 30 */
        {
            "_id" : "BQ",
            "country_name" : "Bonaire, Sint Eustatius and Saba"
        },

        /* 31 */
        {
            "_id" : "BR",
            "country_name" : "Brazil"
        },

        /* 32 */
        {
            "_id" : "BS",
            "country_name" : "Bahamas"
        },

        /* 33 */
        {
            "_id" : "BT",
            "country_name" : "Bhutan"
        },

        /* 34 */
        {
            "_id" : "BV",
            "country_name" : "Bouvet Island"
        },

        /* 35 */
        {
            "_id" : "BW",
            "country_name" : "Botswana"
        },

        /* 36 */
        {
            "_id" : "BY",
            "country_name" : "Belarus"
        },

        /* 37 */
        {
            "_id" : "BZ",
            "country_name" : "Belize"
        },

        /* 38 */
        {
            "_id" : "CA",
            "country_name" : "Canada"
        },

        /* 39 */
        {
            "_id" : "CC",
            "country_name" : "Cocos (Keeling) Islands"
        },

        /* 40 */
        {
            "_id" : "CD",
            "country_name" : "Congo, the Democratic Republic of the "
        },

        /* 41 */
        {
            "_id" : "CF",
            "country_name" : "Central African Republic"
        },

        /* 42 */
        {
            "_id" : "CG",
            "country_name" : "Congo"
        },

        /* 43 */
        {
            "_id" : "CH",
            "country_name" : "Switzerland"
        },

        /* 44 */
        {
            "_id" : "CI",
            "country_name" : "Côte d'Ivoire"
        },

        /* 45 */
        {
            "_id" : "CK",
            "country_name" : "Cook Islands"
        },

        /* 46 */
        {
            "_id" : "CL",
            "country_name" : "Chile"
        },

        /* 47 */
        {
            "_id" : "CM",
            "country_name" : "Cameroon"
        },

        /* 48 */
        {
            "_id" : "CN",
            "country_name" : "China"
        },

        /* 49 */
        {
            "_id" : "CO",
            "country_name" : "Colombia"
        },

        /* 50 */
        {
            "_id" : "CR",
            "country_name" : "Costa Rica"
        },

        /* 51 */
        {
            "_id" : "CU",
            "country_name" : "Cuba"
        },

        /* 52 */
        {
            "_id" : "CV",
            "country_name" : "Cabo Verde"
        },

        /* 53 */
        {
            "_id" : "CW",
            "country_name" : "Curaçao"
        },

        /* 54 */
        {
            "_id" : "CX",
            "country_name" : "Christmas Island"
        },

        /* 55 */
        {
            "_id" : "CY",
            "country_name" : "Cyprus"
        },

        /* 56 */
        {
            "_id" : "CZ",
            "country_name" : "Czech Republic"
        },

        /* 57 */
        {
            "_id" : "DE",
            "country_name" : "Germany"
        },

        /* 58 */
        {
            "_id" : "DJ",
            "country_name" : "Djibouti"
        },

        /* 59 */
        {
            "_id" : "DK",
            "country_name" : "Denmark"
        },

        /* 60 */
        {
            "_id" : "DM",
            "country_name" : "Dominica"
        },

        /* 61 */
        {
            "_id" : "DO",
            "country_name" : "Dominican Republic"
        },

        /* 62 */
        {
            "_id" : "DZ",
            "country_name" : "Algeria"
        },

        /* 63 */
        {
            "_id" : "EC",
            "country_name" : "Ecuador"
        },

        /* 64 */
        {
            "_id" : "EE",
            "country_name" : "Estonia"
        },

        /* 65 */
        {
            "_id" : "EG",
            "country_name" : "Egypt"
        },

        /* 66 */
        {
            "_id" : "EH",
            "country_name" : "Western Sahara"
        },

        /* 67 */
        {
            "_id" : "ER",
            "country_name" : "Eritrea"
        },

        /* 68 */
        {
            "_id" : "ES",
            "country_name" : "Spain"
        },

        /* 69 */
        {
            "_id" : "ET",
            "country_name" : "Ethiopia"
        },

        /* 70 */
        {
            "_id" : "FI",
            "country_name" : "Finland"
        },

        /* 71 */
        {
            "_id" : "FJ",
            "country_name" : "Fiji"
        },

        /* 72 */
        {
            "_id" : "FK",
            "country_name" : "Falkland Islands (Malvinas)"
        },

        /* 73 */
        {
            "_id" : "FM",
            "country_name" : "Micronesia, Federated States of"
        },

        /* 74 */
        {
            "_id" : "FO",
            "country_name" : "Faroe Islands"
        },

        /* 75 */
        {
            "_id" : "FR",
            "country_name" : "France"
        },

        /* 76 */
        {
            "_id" : "GA",
            "country_name" : "Gabon"
        },

        /* 77 */
        {
            "_id" : "GB",
            "country_name" : "United Kingdom"
        },

        /* 78 */
        {
            "_id" : "GD",
            "country_name" : "Grenada"
        },

        /* 79 */
        {
            "_id" : "GE",
            "country_name" : "Georgia"
        },

        /* 80 */
        {
            "_id" : "GF",
            "country_name" : "French Guiana"
        },

        /* 81 */
        {
            "_id" : "GG",
            "country_name" : "Guernsey"
        },

        /* 82 */
        {
            "_id" : "GH",
            "country_name" : "Ghana"
        },

        /* 83 */
        {
            "_id" : "GI",
            "country_name" : "Gibraltar"
        },

        /* 84 */
        {
            "_id" : "GL",
            "country_name" : "Greenland"
        },

        /* 85 */
        {
            "_id" : "GM",
            "country_name" : "Gambia"
        },

        /* 86 */
        {
            "_id" : "GN",
            "country_name" : "Guinea"
        },

        /* 87 */
        {
            "_id" : "GP",
            "country_name" : "Guadeloupe"
        },

        /* 88 */
        {
            "_id" : "GQ",
            "country_name" : "Equatorial Guinea"
        },

        /* 89 */
        {
            "_id" : "GR",
            "country_name" : "Greece"
        },

        /* 90 */
        {
            "_id" : "GS",
            "country_name" : "South Georgia and the South Sandwich Islands"
        },

        /* 91 */
        {
            "_id" : "GT",
            "country_name" : "Guatemala"
        },

        /* 92 */
        {
            "_id" : "GU",
            "country_name" : "Guam"
        },

        /* 93 */
        {
            "_id" : "GW",
            "country_name" : "Guinea-Bissau"
        },

        /* 94 */
        {
            "_id" : "GY",
            "country_name" : "Guyana"
        },

        /* 95 */
        {
            "_id" : "HK",
            "country_name" : "Hong Kong"
        },

        /* 96 */
        {
            "_id" : "HM",
            "country_name" : "Heard Island and McDonald Islands"
        },

        /* 97 */
        {
            "_id" : "HN",
            "country_name" : "Honduras"
        },

        /* 98 */
        {
            "_id" : "HR",
            "country_name" : "Croatia"
        },

        /* 99 */
        {
            "_id" : "HT",
            "country_name" : "Haiti"
        },

        /* 100 */
        {
            "_id" : "HU",
            "country_name" : "Hungar"
        },

        /* 101 */
        {
            "_id" : "ID",
            "country_name" : "Indonesia"
        },

        /* 102 */
        {
            "_id" : "IE",
            "country_name" : "Ireland"
        },

        /* 103 */
        {
            "_id" : "IL",
            "country_name" : "Israel"
        },

        /* 104 */
        {
            "_id" : "IM",
            "country_name" : "Isle of Man"
        },

        /* 105 */
        {
            "_id" : "IN",
            "country_name" : "India"
        },

        /* 106 */
        {
            "_id" : "IO",
            "country_name" : "British Indian Ocean Territory"
        },

        /* 107 */
        {
            "_id" : "IQ",
            "country_name" : "Iraq"
        },

        /* 108 */
        {
            "_id" : "IR",
            "country_name" : "Iran, Islamic Republic of"
        },

        /* 109 */
        {
            "_id" : "IS",
            "country_name" : "Iceland"
        },

        /* 110 */
        {
            "_id" : "IT",
            "country_name" : "Italy"
        },

        /* 111 */
        {
            "_id" : "JE",
            "country_name" : "Jersey"
        },

        /* 112 */
        {
            "_id" : "JM",
            "country_name" : "Jamaica"
        },

        /* 113 */
        {
            "_id" : "JO",
            "country_name" : "Jordan"
        },

        /* 114 */
        {
            "_id" : "JP",
            "country_name" : "Japan"
        },

        /* 115 */
        {
            "_id" : "KE",
            "country_name" : "Kenya"
        },

        /* 116 */
        {
            "_id" : "KG",
            "country_name" : "Kyrgyzstan"
        },

        /* 117 */
        {
            "_id" : "KH",
            "country_name" : "Cambodia"
        },

        /* 118 */
        {
            "_id" : "KI",
            "country_name" : "Kiribati"
        },

        /* 119 */
        {
            "_id" : "KM",
            "country_name" : "Comoros"
        },

        /* 120 */
        {
            "_id" : "KN",
            "country_name" : "Saint Kitts and Nevis"
        },

        /* 121 */
        {
            "_id" : "KP",
            "country_name" : "Korea, Democratic People's Republic of"
        },

        /* 122 */
        {
            "_id" : "KR",
            "country_name" : "Korea, Republic of"
        },

        /* 123 */
        {
            "_id" : "KW",
            "country_name" : "Kuwait"
        },

        /* 124 */
        {
            "_id" : "KY",
            "country_name" : "Cayman Islands"
        },

        /* 125 */
        {
            "_id" : "KZ",
            "country_name" : "Kazakhstan"
        },

        /* 126 */
        {
            "_id" : "LA",
            "country_name" : "Lao People's Democratic Republic"
        },

        /* 127 */
        {
            "_id" : "LB",
            "country_name" : "Lebanon"
        },

        /* 128 */
        {
            "_id" : "LC",
            "country_name" : "Saint Lucia"
        },

        /* 129 */
        {
            "_id" : "LI",
            "country_name" : "Liechtenstein"
        },

        /* 130 */
        {
            "_id" : "LK",
            "country_name" : "Sri Lanka"
        },

        /* 131 */
        {
            "_id" : "LR",
            "country_name" : "Liberia"
        },

        /* 132 */
        {
            "_id" : "LS",
            "country_name" : "Lesotho"
        },

        /* 133 */
        {
            "_id" : "LT",
            "country_name" : "Lithuania"
        },

        /* 134 */
        {
            "_id" : "LU",
            "country_name" : "Luxembourg"
        },

        /* 135 */
        {
            "_id" : "LV",
            "country_name" : "Latvia"
        },

        /* 136 */
        {
            "_id" : "LY",
            "country_name" : "Libya"
        },

        /* 137 */
        {
            "_id" : "MA",
            "country_name" : "Morocco"
        },

        /* 138 */
        {
            "_id" : "MC",
            "country_name" : "Monaco"
        },

        /* 139 */
        {
            "_id" : "MD",
            "country_name" : "Moldova, Republic of"
        },

        /* 140 */
        {
            "_id" : "ME",
            "country_name" : "Montenegro"
        },

        /* 141 */
        {
            "_id" : "MF",
            "country_name" : "Saint Martin (French part)"
        },

        /* 142 */
        {
            "_id" : "MG",
            "country_name" : "Madagascar"
        },

        /* 143 */
        {
            "_id" : "MH",
            "country_name" : "Marshall Islands"
        },

        /* 144 */
        {
            "_id" : "MK",
            "country_name" : "Macedonia, the former Yugoslav Republic of"
        },

        /* 145 */
        {
            "_id" : "ML",
            "country_name" : "Mali"
        },

        /* 146 */
        {
            "_id" : "MM",
            "country_name" : "Myanmar"
        },

        /* 147 */
        {
            "_id" : "MN",
            "country_name" : "Mongolia"
        },

        /* 148 */
        {
            "_id" : "MO",
            "country_name" : "Macao"
        },

        /* 149 */
        {
            "_id" : "MP",
            "country_name" : "Northern Mariana Islands"
        },

        /* 150 */
        {
            "_id" : "MQ",
            "country_name" : "Martinique"
        },

        /* 151 */
        {
            "_id" : "MR",
            "country_name" : "Mauritania"
        },

        /* 152 */
        {
            "_id" : "MS",
            "country_name" : "Montserrat"
        },

        /* 153 */
        {
            "_id" : "MT",
            "country_name" : "Malta"
        },

        /* 154 */
        {
            "_id" : "MU",
            "country_name" : "Mauritius"
        },

        /* 155 */
        {
            "_id" : "MV",
            "country_name" : "Maldives"
        },

        /* 156 */
        {
            "_id" : "MW",
            "country_name" : "Malawi"
        },

        /* 157 */
        {
            "_id" : "MX",
            "country_name" : "Mexico"
        },

        /* 158 */
        {
            "_id" : "MY",
            "country_name" : "Malaysia"
        },

        /* 159 */
        {
            "_id" : "MZ",
            "country_name" : "Mozambique"
        },

        /* 160 */
        {
            "_id" : "NA",
            "country_name" : "Namibia"
        },

        /* 161 */
        {
            "_id" : "NC",
            "country_name" : "New Caledonia"
        },

        /* 162 */
        {
            "_id" : "NE",
            "country_name" : "Niger"
        },

        /* 163 */
        {
            "_id" : "NF",
            "country_name" : "Norfolk Island"
        },

        /* 164 */
        {
            "_id" : "NG",
            "country_name" : "Nigeria"
        },

        /* 165 */
        {
            "_id" : "NI",
            "country_name" : "Nicaragua"
        },

        /* 166 */
        {
            "_id" : "NL",
            "country_name" : "Netherlands"
        },

        /* 167 */
        {
            "_id" : "NO",
            "country_name" : "Norway"
        },

        /* 168 */
        {
            "_id" : "NP",
            "country_name" : "Nepal"
        },

        /* 169 */
        {
            "_id" : "NR",
            "country_name" : "Nauru"
        },

        /* 170 */
        {
            "_id" : "NU",
            "country_name" : "Niue"
        },

        /* 171 */
        {
            "_id" : "NZ",
            "country_name" : "New Zealand"
        },

        /* 172 */
        {
            "_id" : "OM",
            "country_name" : "Oman"
        },

        /* 173 */
        {
            "_id" : "PA",
            "country_name" : "Panama"
        },

        /* 174 */
        {
            "_id" : "PE",
            "country_name" : "Peru"
        },

        /* 175 */
        {
            "_id" : "PF",
            "country_name" : "French Polynesia"
        },

        /* 176 */
        {
            "_id" : "PG",
            "country_name" : "Papua New Guinea"
        },

        /* 177 */
        {
            "_id" : "PH",
            "country_name" : "Philippines"
        },

        /* 178 */
        {
            "_id" : "PK",
            "country_name" : "Pakistan"
        },

        /* 179 */
        {
            "_id" : "PL",
            "country_name" : "Poland"
        },

        /* 180 */
        {
            "_id" : "PM",
            "country_name" : "Saint Pierre and Miquelon"
        },

        /* 181 */
        {
            "_id" : "PN",
            "country_name" : "Pitcairn"
        },

        /* 182 */
        {
            "_id" : "PR",
            "country_name" : "Puerto Rico"
        },

        /* 183 */
        {
            "_id" : "PS",
            "country_name" : "Palestine, State of"
        },

        /* 184 */
        {
            "_id" : "PT",
            "country_name" : "Portugal"
        },

        /* 185 */
        {
            "_id" : "PW",
            "country_name" : "Palau"
        },

        /* 186 */
        {
            "_id" : "PY",
            "country_name" : "Paraguay"
        },

        /* 187 */
        {
            "_id" : "QA",
            "country_name" : "Qatar"
        },

        /* 188 */
        {
            "_id" : "RE",
            "country_name" : "Réunion"
        },

        /* 189 */
        {
            "_id" : "RO",
            "country_name" : "Romania"
        },

        /* 190 */
        {
            "_id" : "RS",
            "country_name" : "Serbia"
        },

        /* 191 */
        {
            "_id" : "RU",
            "country_name" : "Russian Federation"
        },

        /* 192 */
        {
            "_id" : "RW",
            "country_name" : "Rwanda"
        },

        /* 193 */
        {
            "_id" : "SA",
            "country_name" : "Saudi Arabia"
        },

        /* 194 */
        {
            "_id" : "SB",
            "country_name" : "Solomon Islands"
        },

        /* 195 */
        {
            "_id" : "SC",
            "country_name" : "Seychelles"
        },

        /* 196 */
        {
            "_id" : "SD",
            "country_name" : "Sudan"
        },

        /* 197 */
        {
            "_id" : "SE",
            "country_name" : "Sweden"
        },

        /* 198 */
        {
            "_id" : "SG",
            "country_name" : "Singapore"
        },

        /* 199 */
        {
            "_id" : "SH",
            "country_name" : "Saint Helena, Ascension and Tristan da Cunha"
        },

        /* 200 */
        {
            "_id" : "SI",
            "country_name" : "Slovenia"
        },

        /* 201 */
        {
            "_id" : "SJ",
            "country_name" : "Svalbard and Jan Mayen"
        },

        /* 202 */
        {
            "_id" : "SK",
            "country_name" : "Slovakia"
        },

        /* 203 */
        {
            "_id" : "SL",
            "country_name" : "Sierra Leone"
        },

        /* 204 */
        {
            "_id" : "SM",
            "country_name" : "San Marino"
        },

        /* 205 */
        {
            "_id" : "SN",
            "country_name" : "Senegal"
        },

        /* 206 */
        {
            "_id" : "SO",
            "country_name" : "Somalia"
        },

        /* 207 */
        {
            "_id" : "SR",
            "country_name" : "Suriname"
        },

        /* 208 */
        {
            "_id" : "SS",
            "country_name" : "South Sudan"
        },

        /* 209 */
        {
            "_id" : "ST",
            "country_name" : "Sao Tome and Principe"
        },

        /* 210 */
        {
            "_id" : "SV",
            "country_name" : "El Salvador"
        },

        /* 211 */
        {
            "_id" : "SX",
            "country_name" : "Sint Maarten (Dutch part)"
        },

        /* 212 */
        {
            "_id" : "SY",
            "country_name" : "Syrian Arab Republic"
        },

        /* 213 */
        {
            "_id" : "SZ",
            "country_name" : "Swaziland"
        },

        /* 214 */
        {
            "_id" : "TC",
            "country_name" : "Turks and Caicos Islands"
        },

        /* 215 */
        {
            "_id" : "TD",
            "country_name" : "Chad"
        },

        /* 216 */
        {
            "_id" : "TF",
            "country_name" : "French Southern Territories"
        },

        /* 217 */
        {
            "_id" : "TG",
            "country_name" : "Togo"
        },

        /* 218 */
        {
            "_id" : "TH",
            "country_name" : "Thailand"
        },

        /* 219 */
        {
            "_id" : "TJ",
            "country_name" : "Tajikistan"
        },

        /* 220 */
        {
            "_id" : "TK",
            "country_name" : "Tokelau"
        },

        /* 221 */
        {
            "_id" : "TL",
            "country_name" : "Timor-Leste"
        },

        /* 222 */
        {
            "_id" : "TM",
            "country_name" : "Turkmenistan"
        },

        /* 223 */
        {
            "_id" : "TN",
            "country_name" : "Tunisia"
        },

        /* 224 */
        {
            "_id" : "TO",
            "country_name" : "Tonga"
        },

        /* 225 */
        {
            "_id" : "TR",
            "country_name" : "Turkey"
        },

        /* 226 */
        {
            "_id" : "TT",
            "country_name" : "Trinidad and Tobago"
        },

        /* 227 */
        {
            "_id" : "TV",
            "country_name" : "Tuvalu"
        },

        /* 228 */
        {
            "_id" : "TW",
            "country_name" : "Taiwan"
        },

        /* 229 */
        {
            "_id" : "TZ",
            "country_name" : "Tanzania, United Republic of"
        },

        /* 230 */
        {
            "_id" : "UA",
            "country_name" : "Ukraine"
        },

        /* 231 */
        {
            "_id" : "UG",
            "country_name" : "Uganda"
        },

        /* 232 */
        {
            "_id" : "UM",
            "country_name" : "United States Minor Outlying Islands"
        },

        /* 233 */
        {
            "_id" : "US",
            "country_name" : "United States"
        },

        /* 234 */
        {
            "_id" : "UY",
            "country_name" : "Uruguay"
        },

        /* 235 */
        {
            "_id" : "UZ",
            "country_name" : "Uzbekistan"
        },

        /* 236 */
        {
            "_id" : "VA",
            "country_name" : "Holy See (Vatican City State)"
        },

        /* 237 */
        {
            "_id" : "VC",
            "country_name" : "Saint Vincent and the Grenadines"
        },

        /* 238 */
        {
            "_id" : "VE",
            "country_name" : "Venezuela, Bolivarian Republic of"
        },

        /* 239 */
        {
            "_id" : "VG",
            "country_name" : "Virgin Islands,                       "
        },

        /* 240 */
        {
            "_id" : "VI",
            "country_name" : "British Virgin Islands, U.S."
        },

        /* 241 */
        {
            "_id" : "VN",
            "country_name" : "Viet Nam"
        },

        /* 242 */
        {
            "_id" : "VU",
            "country_name" : "Vanuatu"
        },

        /* 243 */
        {
            "_id" : "WF",
            "country_name" : "Wallis and Futuna"
        },

        /* 244 */
        {
            "_id" : "WS",
            "country_name" : "Samoa"
        },

        /* 245 */
        {
            "_id" : "YE",
            "country_name" : "Yemen"
        },

        /* 246 */
        {
            "_id" : "YT",
            "country_name" : "Mayotte"
        },

        /* 247 */
        {
            "_id" : "ZA",
            "country_name" : "South Africa"
        },

        /* 248 */
        {
            "_id" : "ZM",
            "country_name" : "Zambia"
        },

        /* 249 */
        {
            "_id" : "ZW",
            "country_name" : "Zimbabwe"
        }
    ];


    _.each(data, function(country) {
        Countries.insert(
            {
              _id: country._id,
              country_name: country.country_name
            }
        );
    });

  }
});
