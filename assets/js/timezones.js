const timezones = [
    { name: '', zone: 'Select Time Zone' },

    // Africa
    { name: 'Africa/Abidjan', zone: 'Africa/Abidjan' },
    { name: 'Africa/Accra', zone: 'Africa/Accra' },
    { name: 'Africa/Addis_Ababa', zone: 'Africa/Addis_Ababa' },
    { name: 'Africa/Algiers', zone: 'Africa/Algiers' },
    { name: 'Africa/Asmara', zone: 'Africa/Asmara' },
    { name: 'Africa/Bamako', zone: 'Africa/Bamako' },
    { name: 'Africa/Bangui', zone: 'Africa/Bangui' },
    { name: 'Africa/Banjul', zone: 'Africa/Banjul' },
    { name: 'Africa/Bissau', zone: 'Africa/Bissau' },
    { name: 'Africa/Blantyre', zone: 'Africa/Blantyre' },
    { name: 'Africa/Brazzaville', zone: 'Africa/Brazzaville' },
    { name: 'Africa/Bujumbura', zone: 'Africa/Bujumbura' },
    { name: 'Africa/Cairo', zone: 'Africa/Cairo' },
    { name: 'Africa/Casablanca', zone: 'Africa/Casablanca' },
    { name: 'Africa/Ceuta', zone: 'Africa/Ceuta' },
    { name: 'Africa/Conakry', zone: 'Africa/Conakry' },
    { name: 'Africa/Dakar', zone: 'Africa/Dakar' },
    { name: 'Africa/Dar_es_Salaam', zone: 'Africa/Dar_es_Salaam' },
    { name: 'Africa/Djibouti', zone: 'Africa/Djibouti' },
    { name: 'Africa/Douala', zone: 'Africa/Douala' },
    { name: 'Africa/El_Aaiun', zone: 'Africa/El_Aaiun' },
    { name: 'Africa/Freetown', zone: 'Africa/Freetown' },
    { name: 'Africa/Gaborone', zone: 'Africa/Gaborone' },
    { name: 'Africa/Harare', zone: 'Africa/Harare' },
    { name: 'Africa/Johannesburg', zone: 'Africa/Johannesburg' },
    { name: 'Africa/Juba', zone: 'Africa/Juba' },
    { name: 'Africa/Kampala', zone: 'Africa/Kampala' },
    { name: 'Africa/Khartoum', zone: 'Africa/Khartoum' },
    { name: 'Africa/Kigali', zone: 'Africa/Kigali' },
    { name: 'Africa/Kinshasa', zone: 'Africa/Kinshasa' },
    { name: 'Africa/Lagos', zone: 'Africa/Lagos' },
    { name: 'Africa/Libreville', zone: 'Africa/Libreville' },
    { name: 'Africa/Lome', zone: 'Africa/Lome' },
    { name: 'Africa/Luanda', zone: 'Africa/Luanda' },
    { name: 'Africa/Lubumbashi', zone: 'Africa/Lubumbashi' },
    { name: 'Africa/Lusaka', zone: 'Africa/Lusaka' },
    { name: 'Africa/Malabo', zone: 'Africa/Malabo' },
    { name: 'Africa/Maputo', zone: 'Africa/Maputo' },
    { name: 'Africa/Maseru', zone: 'Africa/Maseru' },
    { name: 'Africa/Mbabane', zone: 'Africa/Mbabane' },
    { name: 'Africa/Mogadishu', zone: 'Africa/Mogadishu' },
    { name: 'Africa/Monrovia', zone: 'Africa/Monrovia' },
    { name: 'Africa/Nairobi', zone: 'Africa/Nairobi' },
    { name: 'Africa/Ndjamena', zone: 'Africa/Ndjamena' },
    { name: 'Africa/Niamey', zone: 'Africa/Niamey' },
    { name: 'Africa/Nouakchott', zone: 'Africa/Nouakchott' },
    { name: 'Africa/Ouagadougou', zone: 'Africa/Ouagadougou' },
    { name: 'Africa/Porto-Novo', zone: 'Africa/Porto-Novo' },
    { name: 'Africa/Sao_Tome', zone: 'Africa/Sao_Tome' },
    { name: 'Africa/Tripoli', zone: 'Africa/Tripoli' },
    { name: 'Africa/Tunis', zone: 'Africa/Tunis' },
    { name: 'Africa/Windhoek', zone: 'Africa/Windhoek' },

    // America
    { name: 'America/Adak', zone: 'America/Adak' },
    { name: 'America/Anchorage', zone: 'America/Anchorage' },
    { name: 'America/Anguilla', zone: 'America/Anguilla' },
    { name: 'America/Antigua', zone: 'America/Antigua' },
    { name: 'America/Araguaina', zone: 'America/Araguaina' },
    { name: 'America/Argentina/Buenos_Aires', zone: 'America/Argentina/Buenos_Aires' },
    { name: 'America/Argentina/Catamarca', zone: 'America/Argentina/Catamarca' },
    { name: 'America/Argentina/Cordoba', zone: 'America/Argentina/Cordoba' },
    { name: 'America/Argentina/Jujuy', zone: 'America/Argentina/Jujuy' },
    { name: 'America/Argentina/La_Rioja', zone: 'America/Argentina/La_Rioja' },
    { name: 'America/Argentina/Mendoza', zone: 'America/Argentina/Mendoza' },
    { name: 'America/Argentina/Rio_Gallegos', zone: 'America/Argentina/Rio_Gallegos' },
    { name: 'America/Argentina/Salta', zone: 'America/Argentina/Salta' },
    { name: 'America/Argentina/San_Juan', zone: 'America/Argentina/San_Juan' },
    { name: 'America/Argentina/San_Luis', zone: 'America/Argentina/San_Luis' },
    { name: 'America/Argentina/Tucuman', zone: 'America/Argentina/Tucuman' },
    { name: 'America/Argentina/Ushuaia', zone: 'America/Argentina/Ushuaia' },
    { name: 'America/Aruba', zone: 'America/Aruba' },
    { name: 'America/Asuncion', zone: 'America/Asuncion' },
    { name: 'America/Atikokan', zone: 'America/Atikokan' },
    { name: 'America/Bahia', zone: 'America/Bahia' },
    { name: 'America/Bahia_Banderas', zone: 'America/Bahia_Banderas' },
    { name: 'America/Barbados', zone: 'America/Barbados' },
    { name: 'America/Belem', zone: 'America/Belem' },
    { name: 'America/Belize', zone: 'America/Belize' },
    { name: 'America/Blanc-Sablon', zone: 'America/Blanc-Sablon' },
    { name: 'America/Boa_Vista', zone: 'America/Boa_Vista' },
    { name: 'America/Bogota', zone: 'America/Bogota' },
    { name: 'America/Boise', zone: 'America/Boise' },
    { name: 'America/Cambridge_Bay', zone: 'America/Cambridge_Bay' },
    { name: 'America/Campo_Grande', zone: 'America/Campo_Grande' },
    { name: 'America/Cancun', zone: 'America/Cancun' },
    { name: 'America/Caracas', zone: 'America/Caracas' },
    { name: 'America/Cayenne', zone: 'America/Cayenne' },
    { name: 'America/Cayman', zone: 'America/Cayman' },
    { name: 'America/Chicago', zone: 'America/Chicago' },
    { name: 'America/Chihuahua', zone: 'America/Chihuahua' },
    { name: 'America/Costa_Rica', zone: 'America/Costa_Rica' },
    { name: 'America/Creston', zone: 'America/Creston' },
    { name: 'America/Cuiaba', zone: 'America/Cuiaba' },
    { name: 'America/Curacao', zone: 'America/Curacao' },
    { name: 'America/Danmarkshavn', zone: 'America/Danmarkshavn' },
    { name: 'America/Dawson', zone: 'America/Dawson' },
    { name: 'America/Dawson_Creek', zone: 'America/Dawson_Creek' },
    { name: 'America/Denver', zone: 'America/Denver' },
    { name: 'America/Detroit', zone: 'America/Detroit' },
    { name: 'America/Dominica', zone: 'America/Dominica' },
    { name: 'America/Edmonton', zone: 'America/Edmonton' },
    { name: 'America/Eirunepe', zone: 'America/Eirunepe' },
    { name: 'America/El_Salvador', zone: 'America/El_Salvador' },
    { name: 'America/Fort_Nelson', zone: 'America/Fort_Nelson' },
    { name: 'America/Fortaleza', zone: 'America/Fortaleza' },
    { name: 'America/Glace_Bay', zone: 'America/Glace_Bay' },
    { name: 'America/Godthab', zone: 'America/Godthab' },
    { name: 'America/Goose_Bay', zone: 'America/Goose_Bay' },
    { name: 'America/Grand_Turk', zone: 'America/Grand_Turk' },
    { name: 'America/Grenada', zone: 'America/Grenada' },
    { name: 'America/Guadeloupe', zone: 'America/Guadeloupe' },
    { name: 'America/Guatemala', zone: 'America/Guatemala' },
    { name: 'America/Guayaquil', zone: 'America/Guayaquil' },
    { name: 'America/Guyana', zone: 'America/Guyana' },
    { name: 'America/Halifax', zone: 'America/Halifax' },
    { name: 'America/Havana', zone: 'America/Havana' },
    { name: 'America/Hermosillo', zone: 'America/Hermosillo' },
    { name: 'America/Indiana/Indianapolis', zone: 'America/Indiana/Indianapolis' },
    { name: 'America/Indiana/Knox', zone: 'America/Indiana/Knox' },
    { name: 'America/Indiana/Marengo', zone: 'America/Indiana/Marengo' },
    { name: 'America/Indiana/Petersburg', zone: 'America/Indiana/Petersburg' },
    { name: 'America/Indiana/Tell_City', zone: 'America/Indiana/Tell_City' },
    { name: 'America/Indiana/Vevay', zone: 'America/Indiana/Vevay' },
    { name: 'America/Indiana/Vincennes', zone: 'America/Indiana/Vincennes' },
    { name: 'America/Indiana/Winamac', zone: 'America/Indiana/Winamac' },
    { name: 'America/Inuvik', zone: 'America/Inuvik' },
    { name: 'America/Iqaluit', zone: 'America/Iqaluit' },
    { name: 'America/Jamaica', zone: 'America/Jamaica' },
    { name: 'America/Juneau', zone: 'America/Juneau' },
    { name: 'America/Kentucky/Louisville', zone: 'America/Kentucky/Louisville' },
    { name: 'America/Kentucky/Monticello', zone: 'America/Kentucky/Monticello' },
    { name: 'America/Kralendijk', zone: 'America/Kralendijk' },
    { name: 'America/La_Paz', zone: 'America/La_Paz' },
    { name: 'America/Lima', zone: 'America/Lima' },
    { name: 'America/Los_Angeles', zone: 'America/Los_Angeles' },
    { name: 'America/Lower_Princes', zone: 'America/Lower_Princes' },
    { name: 'America/Maceio', zone: 'America/Maceio' },
    { name: 'America/Managua', zone: 'America/Managua' },
    { name: 'America/Manaus', zone: 'America/Manaus' },
    { name: 'America/Marigot', zone: 'America/Marigot' },
    { name: 'America/Martinique', zone: 'America/Martinique' },
    { name: 'America/Matamoros', zone: 'America/Matamoros' },
    { name: 'America/Mazatlan', zone: 'America/Mazatlan' },
    { name: 'America/Menominee', zone: 'America/Menominee' },
    { name: 'America/Merida', zone: 'America/Merida' },
    { name: 'America/Metlakatla', zone: 'America/Metlakatla' },
    { name: 'America/Mexico_City', zone: 'America/Mexico_City' },
    { name: 'America/Miquelon', zone: 'America/Miquelon' },
    { name: 'America/Moncton', zone: 'America/Moncton' },
    { name: 'America/Monterrey', zone: 'America/Monterrey' },
    { name: 'America/Montevideo', zone: 'America/Montevideo' },
    { name: 'America/Montserrat', zone: 'America/Montserrat' },
    { name: 'America/Nassau', zone: 'America/Nassau' },
    { name: 'America/New_York', zone: 'America/New_York' },
    { name: 'America/Nipigon', zone: 'America/Nipigon' },
    { name: 'America/Nome', zone: 'America/Nome' },
    { name: 'America/Noronha', zone: 'America/Noronha' },
    { name: 'America/North_Dakota/Beulah', zone: 'America/North_Dakota/Beulah' },
    { name: 'America/North_Dakota/Center', zone: 'America/North_Dakota/Center' },
    { name: 'America/North_Dakota/New_Salem', zone: 'America/North_Dakota/New_Salem' },
    { name: 'America/Ojinaga', zone: 'America/Ojinaga' },
    { name: 'America/Panama', zone: 'America/Panama' },
    { name: 'America/Pangnirtung', zone: 'America/Pangnirtung' },
    { name: 'America/Paramaribo', zone: 'America/Paramaribo' },
    { name: 'America/Phoenix', zone: 'America/Phoenix' },
    { name: 'America/Port-au-Prince', zone: 'America/Port-au-Prince' },
    { name: 'America/Port_of_Spain', zone: 'America/Port_of_Spain' },
    { name: 'America/Porto_Velho', zone: 'America/Porto_Velho' },
    { name: 'America/Puerto_Rico', zone: 'America/Puerto_Rico' },
    { name: 'America/Punta_Arenas', zone: 'America/Punta_Arenas' },
    { name: 'America/Rainy_River', zone: 'America/Rainy_River' },
    { name: 'America/Rankin_Inlet', zone: 'America/Rankin_Inlet' },
    { name: 'America/Recife', zone: 'America/Recife' },
    { name: 'America/Regina', zone: 'America/Regina' },
    { name: 'America/Resolute', zone: 'America/Resolute' },
    { name: 'America/Rio_Branco', zone: 'America/Rio_Branco' },
    { name: 'America/Santarem', zone: 'America/Santarem' },
    { name: 'America/Santiago', zone: 'America/Santiago' },
    { name: 'America/Santo_Domingo', zone: 'America/Santo_Domingo' },
    { name: 'America/Sao_Paulo', zone: 'America/Sao_Paulo' },
    { name: 'America/Scoresbysund', zone: 'America/Scoresbysund' },
    { name: 'America/Sitka', zone: 'America/Sitka' },
    { name: 'America/St_Barthelemy', zone: 'America/St_Barthelemy' },
    { name: 'America/St_Johns', zone: 'America/St_Johns' },
    { name: 'America/St_Kitts', zone: 'America/St_Kitts' },
    { name: 'America/St_Lucia', zone: 'America/St_Lucia' },
    { name: 'America/St_Thomas', zone: 'America/St_Thomas' },
    { name: 'America/St_Vincent', zone: 'America/St_Vincent' },
    { name: 'America/Swift_Current', zone: 'America/Swift_Current' },
    { name: 'America/Tegucigalpa', zone: 'America/Tegucigalpa' },
    { name: 'America/Thule', zone: 'America/Thule' },
    { name: 'America/Thunder_Bay', zone: 'America/Thunder_Bay' },
    { name: 'America/Tijuana', zone: 'America/Tijuana' },
    { name: 'America/Toronto', zone: 'America/Toronto' },
    { name: 'America/Tortola', zone: 'America/Tortola' },
    { name: 'America/Vancouver', zone: 'America/Vancouver' },
    { name: 'America/Whitehorse', zone: 'America/Whitehorse' },
    { name: 'America/Winnipeg', zone: 'America/Winnipeg' },
    { name: 'America/Yakutat', zone: 'America/Yakutat' },
    { name: 'America/Yellowknife', zone: 'America/Yellowknife' },

    // Antarctica
    { name: 'Antarctica/Casey', zone: 'Antarctica/Casey' },
    { name: 'Antarctica/Davis', zone: 'Antarctica/Davis' },
    { name: 'Antarctica/DumontDUrville', zone: 'Antarctica/DumontDUrville' },
    { name: 'Antarctica/Macquarie', zone: 'Antarctica/Macquarie' },
    { name: 'Antarctica/Mawson', zone: 'Antarctica/Mawson' },
    { name: 'Antarctica/Palmer', zone: 'Antarctica/Palmer' },
    { name: 'Antarctica/Rothera', zone: 'Antarctica/Rothera' },
    { name: 'Antarctica/Syowa', zone: 'Antarctica/Syowa' },
    { name: 'Antarctica/Troll', zone: 'Antarctica/Troll' },
    { name: 'Antarctica/Vostok', zone: 'Antarctica/Vostok' },

    // Arctic
    { name: 'Arctic/Longyearbyen', zone: 'Arctic/Longyearbyen' },

    // Asia
    { name: 'Asia/Aden', zone: 'Asia/Aden' },
    { name: 'Asia/Almaty', zone: 'Asia/Almaty' },
    { name: 'Asia/Amman', zone: 'Asia/Amman' },
    { name: 'Asia/Anadyr', zone: 'Asia/Anadyr' },
    { name: 'Asia/Aqtau', zone: 'Asia/Aqtau' },
    { name: 'Asia/Aqtobe', zone: 'Asia/Aqtobe' },
    { name: 'Asia/Ashgabat', zone: 'Asia/Ashgabat' },
    { name: 'Asia/Atyrau', zone: 'Asia/Atyrau' },
    { name: 'Asia/Baghdad', zone: 'Asia/Baghdad' },
    { name: 'Asia/Bahrain', zone: 'Asia/Bahrain' },
    { name: 'Asia/Baku', zone: 'Asia/Baku' },
    { name: 'Asia/Bangkok', zone: 'Asia/Bangkok' },
    { name: 'Asia/Barnaul', zone: 'Asia/Barnaul' },
    { name: 'Asia/Beirut', zone: 'Asia/Beirut' },
    { name: 'Asia/Bishkek', zone: 'Asia/Bishkek' },
    { name: 'Asia/Brunei', zone: 'Asia/Brunei' },
    { name: 'Asia/Chita', zone: 'Asia/Chita' },
    { name: 'Asia/Choibalsan', zone: 'Asia/Choibalsan' },
    { name: 'Asia/Colombo', zone: 'Asia/Colombo' },
    { name: 'Asia/Damascus', zone: 'Asia/Damascus' },
    { name: 'Asia/Dhaka', zone: 'Asia/Dhaka' },
    { name: 'Asia/Dili', zone: 'Asia/Dili' },
    { name: 'Asia/Dubai', zone: 'Asia/Dubai' },
    { name: 'Asia/Dushanbe', zone: 'Asia/Dushanbe' },
    { name: 'Asia/Famagusta', zone: 'Asia/Famagusta' },
    { name: 'Asia/Gaza', zone: 'Asia/Gaza' },
    { name: 'Asia/Hebron', zone: 'Asia/Hebron' },
    { name: 'Asia/Ho_Chi_Minh', zone: 'Asia/Ho_Chi_Minh' },
    { name: 'Asia/Hong_Kong', zone: 'Asia/Hong_Kong' },
    { name: 'Asia/Hovd', zone: 'Asia/Hovd' },
    { name: 'Asia/Irkutsk', zone: 'Asia/Irkutsk' },
    { name: 'Asia/Jakarta', zone: 'Asia/Jakarta' },
    { name: 'Asia/Jayapura', zone: 'Asia/Jayapura' },
    { name: 'Asia/Jerusalem', zone: 'Asia/Jerusalem' },
    { name: 'Asia/Kabul', zone: 'Asia/Kabul' },
    { name: 'Asia/Kamchatka', zone: 'Asia/Kamchatka' },
    { name: 'Asia/Karachi', zone: 'Asia/Karachi' },
    { name: 'Asia/Kathmandu', zone: 'Asia/Kathmandu' },
    { name: 'Asia/Khandyga', zone: 'Asia/Khandyga' },
    { name: 'Asia/Kolkata', zone: 'Asia/Kolkata' },
    { name: 'Asia/Krasnoyarsk', zone: 'Asia/Krasnoyarsk' },
    { name: 'Asia/Kuala_Lumpur', zone: 'Asia/Kuala_Lumpur' },
    { name: 'Asia/Kuching', zone: 'Asia/Kuching' },
    { name: 'Asia/Kuwait', zone: 'Asia/Kuwait' },
    { name: 'Asia/Macau', zone: 'Asia/Macau' },
    { name: 'Asia/Magadan', zone: 'Asia/Magadan' },
    { name: 'Asia/Makassar', zone: 'Asia/Makassar' },
    { name: 'Asia/Manila', zone: 'Asia/Manila' },
    { name: 'Asia/Muscat', zone: 'Asia/Muscat' },
    { name: 'Asia/Nicosia', zone: 'Asia/Nicosia' },
    { name: 'Asia/Novokuznetsk', zone: 'Asia/Novokuznetsk' },
    { name: 'Asia/Novosibirsk', zone: 'Asia/Novosibirsk' },
    { name: 'Asia/Omsk', zone: 'Asia/Omsk' },
    { name: 'Asia/Oral', zone: 'Asia/Oral' },
    { name: 'Asia/Phnom_Penh', zone: 'Asia/Phnom_Penh' },
    { name: 'Asia/Pontianak', zone: 'Asia/Pontianak' },
    { name: 'Asia/Pyongyang', zone: 'Asia/Pyongyang' },
    { name: 'Asia/Qatar', zone: 'Asia/Qatar' },
    { name: 'Asia/Qyzylorda', zone: 'Asia/Qyzylorda' },
    { name: 'Asia/Riyadh', zone: 'Asia/Riyadh' },
    { name: 'Asia/Sakhalin', zone: 'Asia/Sakhalin' },
    { name: 'Asia/Samarkand', zone: 'Asia/Samarkand' },
    { name: 'Asia/Seoul', zone: 'Asia/Seoul' },
    { name: 'Asia/Shanghai', zone: 'Asia/Shanghai' },
    { name: 'Asia/Singapore', zone: 'Asia/Singapore' },
    { name: 'Asia/Srednekolymsk', zone: 'Asia/Srednekolymsk' },
    { name: 'Asia/Taipei', zone: 'Asia/Taipei' },
    { name: 'Asia/Tashkent', zone: 'Asia/Tashkent' },
    { name: 'Asia/Tbilisi', zone: 'Asia/Tbilisi' },
    { name: 'Asia/Tehran', zone: 'Asia/Tehran' },
    { name: 'Asia/Thimphu', zone: 'Asia/Thimphu' },
    { name: 'Asia/Tokyo', zone: 'Asia/Tokyo' },
    { name: 'Asia/Tomsk', zone: 'Asia/Tomsk' },
    { name: 'Asia/Ulaanbaatar', zone: 'Asia/Ulaanbaatar' },
    { name: 'Asia/Urumqi', zone: 'Asia/Urumqi' },
    { name: 'Asia/Ust-Nera', zone: 'Asia/Ust-Nera' },
    { name: 'Asia/Vientiane', zone: 'Asia/Vientiane' },
    { name: 'Asia/Vladivostok', zone: 'Asia/Vladivostok' },
    { name: 'Asia/Yakutsk', zone: 'Asia/Yakutsk' },
    { name: 'Asia/Yangon', zone: 'Asia/Yangon' },
    { name: 'Asia/Yekaterinburg', zone: 'Asia/Yekaterinburg' },
    { name: 'Asia/Yerevan', zone: 'Asia/Yerevan' },

    // Atlantic
    { name: 'Atlantic/Azores', zone: 'Atlantic/Azores' },
    { name: 'Atlantic/Bermuda', zone: 'Atlantic/Bermuda' },
    { name: 'Atlantic/Canary', zone: 'Atlantic/Canary' },
    { name: 'Atlantic/Cape_Verde', zone: 'Atlantic/Cape_Verde' },
    { name: 'Atlantic/Faroe', zone: 'Atlantic/Faroe' },
    { name: 'Atlantic/Madeira', zone: 'Atlantic/Madeira' },
    { name: 'Atlantic/Reykjavik', zone: 'Atlantic/Reykjavik' },
    { name: 'Atlantic/South_Georgia', zone: 'Atlantic/South_Georgia' },
    { name: 'Atlantic/Stanley', zone: 'Atlantic/Stanley' },

    // Australia
    { name: 'Australia/Adelaide', zone: 'Australia/Adelaide' },
    { name: 'Australia/Brisbane', zone: 'Australia/Brisbane' },
    { name: 'Australia/Broken_Hill', zone: 'Australia/Broken_Hill' },
    { name: 'Australia/Currie', zone: 'Australia/Currie' },
    { name: 'Australia/Darwin', zone: 'Australia/Darwin' },
    { name: 'Australia/Eucla', zone: 'Australia/Eucla' },
    { name: 'Australia/Hobart', zone: 'Australia/Hobart' },
    { name: 'Australia/Lindeman', zone: 'Australia/Lindeman' },
    { name: 'Australia/Lord_Howe', zone: 'Australia/Lord_Howe' },
    { name: 'Australia/Melbourne', zone: 'Australia/Melbourne' },
    { name: 'Australia/Perth', zone: 'Australia/Perth' },
    { name: 'Australia/Sydney', zone: 'Australia/Sydney' },

    // Europe
    { name: 'Europe/Amsterdam', zone: 'Europe/Amsterdam' },
    { name: 'Europe/Andorra', zone: 'Europe/Andorra' },
    { name: 'Europe/Astrakhan', zone: 'Europe/Astrakhan' },
    { name: 'Europe/Athens', zone: 'Europe/Athens' },
    { name: 'Europe/Belgrade', zone: 'Europe/Belgrade' },
    { name: 'Europe/Berlin', zone: 'Europe/Berlin' },
    { name: 'Europe/Bratislava', zone: 'Europe/Bratislava' },
    { name: 'Europe/Brussels', zone: 'Europe/Brussels' },
    { name: 'Europe/Bucharest', zone: 'Europe/Bucharest' },
    { name: 'Europe/Budapest', zone: 'Europe/Budapest' },
    { name: 'Europe/Busingen', zone: 'Europe/Busingen' },
    { name: 'Europe/Chisinau', zone: 'Europe/Chisinau' },
    { name: 'Europe/Copenhagen', zone: 'Europe/Copenhagen' },
    { name: 'Europe/Dublin', zone: 'Europe/Dublin' },
    { name: 'Europe/Gibraltar', zone: 'Europe/Gibraltar' },
    { name: 'Europe/Guernsey', zone: 'Europe/Guernsey' },
    { name: 'Europe/Helsinki', zone: 'Europe/Helsinki' },
    { name: 'Europe/Isle_of_Man', zone: 'Europe/Isle_of_Man' },
    { name: 'Europe/Istanbul', zone: 'Europe/Istanbul' },
    { name: 'Europe/Jersey', zone: 'Europe/Jersey' },
    { name: 'Europe/Kaliningrad', zone: 'Europe/Kaliningrad' },
    { name: 'Europe/Kiev', zone: 'Europe/Kiev' },
    { name: 'Europe/Kirov', zone: 'Europe/Kirov' },
    { name: 'Europe/Lisbon', zone: 'Europe/Lisbon' },
    { name: 'Europe/Ljubljana', zone: 'Europe/Ljubljana' },
    { name: 'Europe/London', zone: 'Europe/London' },
    { name: 'Europe/Luxembourg', zone: 'Europe/Luxembourg' },
    { name: 'Europe/Madrid', zone: 'Europe/Madrid' },
    { name: 'Europe/Malta', zone: 'Europe/Malta' },
    { name: 'Europe/Mariehamn', zone: 'Europe/Mariehamn' },
    { name: 'Europe/Minsk', zone: 'Europe/Minsk' },
    { name: 'Europe/Monaco', zone: 'Europe/Monaco' },
    { name: 'Europe/Moscow', zone: 'Europe/Moscow' },
    { name: 'Europe/Oslo', zone: 'Europe/Oslo' },
    { name: 'Europe/Paris', zone: 'Europe/Paris' },
    { name: 'Europe/Podgorica', zone: 'Europe/Podgorica' },
    { name: 'Europe/Prague', zone: 'Europe/Prague' },
    { name: 'Europe/Riga', zone: 'Europe/Riga' },
    { name: 'Europe/Rome', zone: 'Europe/Rome' },
    { name: 'Europe/Samara', zone: 'Europe/Samara' },
    { name: 'Europe/San_Marino', zone: 'Europe/San_Marino' },
    { name: 'Europe/Sarajevo', zone: 'Europe/Sarajevo' },
    { name: 'Europe/Saratov', zone: 'Europe/Saratov' },
    { name: 'Europe/Simferopol', zone: 'Europe/Simferopol' },
    { name: 'Europe/Skopje', zone: 'Europe/Skopje' },
    { name: 'Europe/Sofia', zone: 'Europe/Sofia' },
    { name: 'Europe/Stockholm', zone: 'Europe/Stockholm' },
    { name: 'Europe/Tallinn', zone: 'Europe/Tallinn' },
    { name: 'Europe/Tirane', zone: 'Europe/Tirane' },
    { name: 'Europe/Ulyanovsk', zone: 'Europe/Ulyanovsk' },
    { name: 'Europe/Uzhgorod', zone: 'Europe/Uzhgorod' },
    { name: 'Europe/Vaduz', zone: 'Europe/Vaduz' },
    { name: 'Europe/Vatican', zone: 'Europe/Vatican' },
    { name: 'Europe/Vienna', zone: 'Europe/Vienna' },
    { name: 'Europe/Vilnius', zone: 'Europe/Vilnius' },
    { name: 'Europe/Volgograd', zone: 'Europe/Volgograd' },
    { name: 'Europe/Warsaw', zone: 'Europe/Warsaw' },
    { name: 'Europe/Zagreb', zone: 'Europe/Zagreb' },
    { name: 'Europe/Zaporozhye', zone: 'Europe/Zaporozhye' },
    { name: 'Europe/Zurich', zone: 'Europe/Zurich' },

    // Indian
    { name: 'Indian/Antananarivo', zone: 'Indian/Antananarivo' },
    { name: 'Indian/Chagos', zone: 'Indian/Chagos' },
    { name: 'Indian/Christmas', zone: 'Indian/Christmas' },
    { name: 'Indian/Cocos', zone: 'Indian/Cocos' },
    { name: 'Indian/Comoro', zone: 'Indian/Comoro' },
    { name: 'Indian/Kerguelen', zone: 'Indian/Kerguelen' },
    { name: 'Indian/Mahe', zone: 'Indian/Mahe' },
    { name: 'Indian/Maldives', zone: 'Indian/Maldives' },
    { name: 'Indian/Mauritius', zone: 'Indian/Mauritius' },
    { name: 'Indian/Mayotte', zone: 'Indian/Mayotte' },
    { name: 'Indian/Reunion', zone: 'Indian/Reunion' },

    // Pacific
    { name: 'Pacific/Apia', zone: 'Pacific/Apia' },
    { name: 'Pacific/Auckland', zone: 'Pacific/Auckland' },
    { name: 'Pacific/Bougainville', zone: 'Pacific/Bougainville' },
    { name: 'Pacific/Chatham', zone: 'Pacific/Chatham' },
    { name: 'Pacific/Easter', zone: 'Pacific/Easter' },
    { name: 'Pacific/Efate', zone: 'Pacific/Efate' },
    { name: 'Pacific/Enderbury', zone: 'Pacific/Enderbury' },
    { name: 'Pacific/Fakaofo', zone: 'Pacific/Fakaofo' },
    { name: 'Pacific/Fiji', zone: 'Pacific/Fiji' },
    { name: 'Pacific/Funafuti', zone: 'Pacific/Funafuti' },
    { name: 'Pacific/Galapagos', zone: 'Pacific/Galapagos' },
    { name: 'Pacific/Gambier', zone: 'Pacific/Gambier' },
    { name: 'Pacific/Guadalcanal', zone: 'Pacific/Guadalcanal' },
    { name: 'Pacific/Guam', zone: 'Pacific/Guam' },
    { name: 'Pacific/Honolulu', zone: 'Pacific/Honolulu' },
    { name: 'Pacific/Kiritimati', zone: 'Pacific/Kiritimati' },
    { name: 'Pacific/Kosrae', zone: 'Pacific/Kosrae' },
    { name: 'Pacific/Kwajalein', zone: 'Pacific/Kwajalein' },
    { name: 'Pacific/Majuro', zone: 'Pacific/Majuro' },
    { name: 'Pacific/Marquesas', zone: 'Pacific/Marquesas' },
    { name: 'Pacific/Midway', zone: 'Pacific/Midway' },
    { name: 'Pacific/Nauru', zone: 'Pacific/Nauru' },
    { name: 'Pacific/Niue', zone: 'Pacific/Niue' },
    { name: 'Pacific/Norfolk', zone: 'Pacific/Norfolk' },
    { name: 'Pacific/Noumea', zone: 'Pacific/Noumea' },
    { name: 'Pacific/Pago_Pago', zone: 'Pacific/Pago_Pago' },
    { name: 'Pacific/Palau', zone: 'Pacific/Palau' },
    { name: 'Pacific/Pitcairn', zone: 'Pacific/Pitcairn' },
    { name: 'Pacific/Pohnpei', zone: 'Pacific/Pohnpei' },
    { name: 'Pacific/Port_Moresby', zone: 'Pacific/Port_Moresby' },
    { name: 'Pacific/Rarotonga', zone: 'Pacific/Rarotonga' },
    { name: 'Pacific/Saipan', zone: 'Pacific/Saipan' },
    { name: 'Pacific/Tahiti', zone: 'Pacific/Tahiti' },
    { name: 'Pacific/Tarawa', zone: 'Pacific/Tarawa' },
    { name: 'Pacific/Tongatapu', zone: 'Pacific/Tongatapu' },
    { name: 'Pacific/Wake', zone: 'Pacific/Wake' },
    { name: 'Pacific/Wallis', zone: 'Pacific/Wallis' },

    // Etc
    { name: 'Etc/GMT', zone: 'Etc/GMT' },
    { name: 'Etc/GMT+0', zone: 'Etc/GMT+0' },
    { name: 'Etc/GMT+1', zone: 'Etc/GMT+1' },
    { name: 'Etc/GMT+10', zone: 'Etc/GMT+10' },
    { name: 'Etc/GMT+11', zone: 'Etc/GMT+11' },
    { name: 'Etc/GMT+12', zone: 'Etc/GMT+12' },
    { name: 'Etc/GMT+2', zone: 'Etc/GMT+2' },
    { name: 'Etc/GMT+3', zone: 'Etc/GMT+3' },
    { name: 'Etc/GMT+4', zone: 'Etc/GMT+4' },
    { name: 'Etc/GMT+5', zone: 'Etc/GMT+5' },
    { name: 'Etc/GMT+6', zone: 'Etc/GMT+6' },
    { name: 'Etc/GMT+7', zone: 'Etc/GMT+7' },
    { name: 'Etc/GMT+8', zone: 'Etc/GMT+8' },
    { name: 'Etc/GMT+9', zone: 'Etc/GMT+9' },
    { name: 'Etc/GMT-0', zone: 'Etc/GMT-0' },
    { name: 'Etc/GMT-1', zone: 'Etc/GMT-1' },
    { name: 'Etc/GMT-10', zone: 'Etc/GMT-10' },
    { name: 'Etc/GMT-11', zone: 'Etc/GMT-11' },
    { name: 'Etc/GMT-12', zone: 'Etc/GMT-12' },
    { name: 'Etc/GMT-13', zone: 'Etc/GMT-13' },
    { name: 'Etc/GMT-14', zone: 'Etc/GMT-14' },
    { name: 'Etc/GMT-2', zone: 'Etc/GMT-2' },
    { name: 'Etc/GMT-3', zone: 'Etc/GMT-3' },
    { name: 'Etc/GMT-4', zone: 'Etc/GMT-4' },
    { name: 'Etc/GMT-5', zone: 'Etc/GMT-5' },
    { name: 'Etc/GMT-6', zone: 'Etc/GMT-6' },
    { name: 'Etc/GMT-7', zone: 'Etc/GMT-7' },
    { name: 'Etc/GMT-8', zone: 'Etc/GMT-8' },
    { name: 'Etc/GMT-9', zone: 'Etc/GMT-9' },
    { name: 'Etc/UCT', zone: 'Etc/UCT' },
    { name: 'Etc/UTC', zone: 'Etc/UTC' },
    { name: 'Etc/Universal', zone: 'Etc/Universal' },
    { name: 'Etc/Zulu', zone: 'Etc/Zulu' },

    // Etcetera – you can add more regions as needed
];