﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: br.js
 * 	Portuguese (Brazil) language file.
 * 
 * File Author:
 * 	 Oszy007 (oszy007@gmail.com)
 */
 
 var theUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "Geral",
 Downloads			: "Downloads",
 Connection			: "Conexão",
 BitTorrent			: "BitTorrent",
 Queueing			: "Fila",
 Scheduler			: "Agendador",
 Advanced			: "Avançado",
 Disk_Cache			: "Cache de disco",
 Enable_Web_Interface : "Habilitar Interface Web",
 Authent			: "Autenticação",
 Username			: "Usuário",
 Password			: "Senha",
 Enable_Guest_acc	: "Habilitar conta Visitante com o nome",
 Connectivity		: "Conectividade",
 Alt_list_port		: "Porta alternativa de escuta (a padrão é a do bittorrent)",
 Rest_access		: "Restringir o acesso para os seguintes IPs (Separar múltiplas entradas com ,)",
 User_Interface		: "Interface do usuário",
 Confirm_del_torr	: "Confirmar quando excluir torrents",
 Update_GUI_every	: "Atualizar GUI a cada",
 ms					: "ms",
 Alt_list_bckgnd	: "Alternar a cor de fundo da lista",
 Show_speed			: "Mostrar velocidade",
 Don_t				: "Desativado",
 In_status_bar		: "Na barra de status",
 In_title_bar		: "Na barra de título",
 Show_cat_start		: "Mostrar categorias quando iniciar",
 Virt_row_thres		: "Ponto inicial virtual da fila",
 Show_det_start		: "Mostrar detalhes quando iniciar",
 Restor_def			: "Restaurar configurações",
 When_add_torrent	: "Enquanto adiciona torrents",
 Dnt_start_down_auto: "Não iniciar o download automaticamente",
 Other_sett			: "Outras Configurações",
 Append_ut_incompl	: "Adicionar .!ut a arquivos incompletos",
 Prealloc_all_files	: "Pré-alocar todos os arquivos",
 Prev_stnd_w_act_con: "Previnir modo standby se houverem torrents ativos",
 Listening_Port		: "Porta de Escuta",
 Port_f_incom_conns	: "Porta usada para conexões de entrada",
 Random_Port		: "Porta Aleatória",
 Rnd_port_torr_start: "Alternar porta cada vez que o rTorrent iniciar",
 En_UPnP_mapp		: "Habilitar mapeamento UPnP",
 Add_torr_mustdie_f	: "Adicionar o rTorrent às exceções do Firewall do Windows (Windows XP SP2 ou posterior)",
 Proxy_Server		: "Servidor Proxy",
 Type				: "Tipo",
 none				: "(nenhum)",
 Proxy				: "Proxy",
 Port				: "Porta",
 Use_proxy_4_p2p_con: "Usar o servidor proxy para conexões ponto-a-ponto",
 Bandwidth_Limiting : "Limitador de Largura de Banda",
 Global_max_upl		: "Taxa de upload global máxima",
 unlimited			: "ilimitada",
 Alt_down_r_downl	: "Alternar taxa de upload quando não houverem downloads",
 Glob_max_downl		: "Taxa de download global máxima",
 Num_of_conn		: "Número de Conexões",
 Glob_max_conn		: "Número máximo de conexões totais",
 Max_conn_peer_torr	: "Número máximo de peers conectados por torrent",
 Num_upl_slots		: "Número de slots para upload por torrent",
 Extra_ulslots		: "Usar slots adicionais se a velocidade de upload for < 90%",
 Add_bittor_featrs	: "Recursos Adicionais do BitTorrent",
 En_DHT_ntw			: "Habilitar rede DHT",
 Ask_scrape			: "Obter do rastreador inf. do torrent",
 En_DHT_new_torrs	: "Habilitar DHT para novos torrents",
 Peer_exch			: "Troca de peers",
 Ip_report_track	: "IP/Hostname para relatar ao rastreador",
 Protocol_enc		: "Encriptação de Protocolo",
 Outgoing			: "Saída",
 Disabled			: "Desativada",
 Enabled			: "Ativada",
 Forced				: "Forçada",
 All_inc_legacy_conn: "Permitir conexões não criptografadas",
 Queue_sett			: "Configurações da Fila",
 Max_n_act_torrs	: "Número máximo de torrents ativos (upload ou download)",
 Max_num_act_downl	: "Número máximo de downloads ativos",
 Seed_while			: "Semear enquanto [Valores Padrão]",
 Ratio_is			: "Ratio for",
 or_time_is			: " % ou tempo de semeio for ",
 Ignore				: "(Ignorar)",
 nin_min			: "90 minutos",
 two_h				: "2 horas",
 three_h			: "3 horas",
 four_h				: "4 horas",
 five_h				: "5 horas",
 six_h				: "6 horas",
 seven_h			: "7 horas",
 eight_h			: "8 horas",
 nine_h				: "9 horas",
 ten_h				: "10 horas",
 twelve_h			: "12 horas",
 sixteen_h			: "16 horas",
 twenty_h			: "20 horas",
 tw_four_h			: "24 horas",
 thirty_h			: "30 horas",
 thirty_six_h		: "36 horas",
 forty_eight_h		: "48 horas",
 sixty_h			: "60 horas",
 sev_two_h			: "72 horas",
 nin_six_h			: "96 horas",
 Seed_prior			: "Tarefas de envio têm maior prioridade do que as de download",
 When_torr_reach	: "Quando o Torrent alcançar seu objetivo de envio",
 Limit_upl_rate		: "Limitar a taxa de upload para [0 = parar o torrent]",
 En_shedul			: "Habilitar o Agendador",
 Shed_sett			: "Configurações do Agendador",
 Lim_upl_rate		: "Taxa de upload limitada",
 Lim_dow_rate		: "Taxa de download limitada",
 Dis_DHT_when_t_off	: "Desativar DHT ao desligar",
 Disc_cahe			: "Cache de Disco",
 Disc_cahe_bla_bla	: "O cache de disco é usado para manter o freqüente acesso à memória, reduzindo assim o número de escritas e leituras ao disco rígido. O rTorrent administra o cache automaticamente, mas você pode mudar seu comportamento modificando estas configurações.",
 Overwr_d_cahe_au	: "Definir tamanho do cache manualmente",
 MB					: "MB",
 Red_mem_usage		: "Reduzir o uso da memória quando o cache não for usado",
 Adv_cache_sett		: "Configurações de Cache Avançadas",
 En_cach_disc		: "Habilitar cache de escrita",
 Wr_out_ever_2_min	: "Gravar cache de blocos não modificados a cada 2 minutos",
 Wr_immed			: "Gravar cache de partes finalizadas imediatamente",
 En_cah_disc_read	: "Habilitar cache de leitura",
 Turn_off_w_read	: "Desligar leitura se a velocidade de upload for baixa",
 Rem_old_from_cahe	: "Remover blocos antigos do cache",
 Increase_autom_cach: "Aumentar automaticamente o tamanho do cache a cada cache thrashing",
 Advanced			: "Avançado",
 Advanced_label		: "Opções Avançadas [ATENÇÃO: Não modifique!]",
 Cancel				: "Cancelar",
 uTorrent_settings	: "Preferências do rTorrent",
 
// Main window
 Doesnt_support		: "A interface ruTorrent não suporta o seu navegador.",
 Name				: "Nome",
 Status				: "Status",
 Size				: "Tamanho",
 Done				: "Concluído",
 Downloaded			: "Baixado",
 Uploaded			: "Enviado",
 Ratio				: "Ratio",
 DL					: "DL",
 UL					: "UL",
 ETA				: "ETA",
 Label				: "Categoria",
 Peers				: "Peers",
 Seeds				: "Seeds",
 Avail				: "Disp.",
 Remaining			: "Faltando",
 Priority			: "Prioridade",
 Download			: "Baixar",
 Upload				: "Enviar",
 Not_torrent_file	: "O arquivo deve ser um torrent válido.",
 Pausing			: "Pausado",
 Seeding			: "Enviando",
 Downloading		: "Baixando",
 Checking			: "Verificando",
 Error				: "Erro",
 Queued				: "Envios na Fila",
 Finished			: "Finalizado",
 Stopped			: "Parado",
 Request_timed_out	: "O pedido do rTorrent excedeu o tempo.",
 
 Force_Start		: "Forçar Início",
 Start				: "Iniciar",
 Pause				: "Pausar",
 Stop				: "Parar",
 Force_recheck		: "Forçar Re-checagem",
 New_label			: "Nova Categoria...",
 Remove_label		: "Remover Categoria",
 Labels				: "Categorias",
 Remove				: "Remover",
 Delete_data		: "Excluir Dados",
 Remove_and			: "Remover e",
 Details			: "Detalhes...",
 Properties			: "Propriedades...",
 of					: "de", 		//this two creates line 
 connected			: "conectado(s)",	//  XX of YY connected
 High_priority		: "Alta",
 Normal_priority	: "Normal",
 Low_priority		: "Baixa",
 Dont_download		: "Não Baixar",
 Shure_restore_UI	: "Você tem certeza que quer restaurar a interface do usuário?",
 Reloading			: "Recarregando...",
 Name				: "Nome",
 Date_				: "Data",
 Files				: "Arquivos",
 Logger				: "Registros",
 
 s					: "s",    // part of "KB/s"
 bytes				: "bytes",
 KB					: "KB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "Carregando...",
 Torrent_file		: "Arquivo torrent",
 Torrent_URL		: "URL do torrent",
 Cookies			: "Cookies",
 RSS_Downloader		: "RSS Downloader",
 Torrent_properties	: "Propriedades do Torrent",
 Trackers			: "Rastreadores",
 Max_down_rate		: "Taxa máxima de upload",
 Max_upl_rate		: "Taxa máxima de download",
 Bandwidth_sett		: "Configurações de Banda",
 Number_ul_slots	: "Número de slots para upload",
 Override_default	: "Não utilizar opções padrão",
 Initial_seed		: "Semeio inicial",
 Enable_DHT			: "Habilitar DHT",
 Peer_ex			: "Troca de Peers",
 About				: "Sobre",
 Enter_label_prom	: "Informe a nova categoria para os torrents",
 Remove_torrents	: "Remover Torrent(s)",
 Rem_torrents_prompt: "Você realmente quer remover o(s) torrent(s) selecionado(s)?",
 All				: "Todos",
 Active				: "Ativo",
 Inactive			: "Inativo",
 No_label			: "Sem Categoria",
 Transfer			: "Transferência",
 Time_el			: "Tempo Gasto",
 Remaining			: "Restando",
 Share_ratio		: "Ratio",
 Down_speed			: "Vel. de Download",
 Down_limit			: "Limite Down",
 Ul_speed			: "Vel. de Upload",
 Ul_limit			: "Limite Up",
 Wasted				: "Gasto",
 Tracker			: "Rastreador",
 Track_URL			: "URL",
 Track_status		: "Status",
 Update_in			: "Atualização em",
 DHT_status			: "Status DHT",
 Save_as			: "Salvar Como",
 Tot_size			: "Tamanho Total",
 Created_on			: "Criado em",
 Comment			: "Comentário",
 
 
 //buttons
 add_button			: "Adicionar Arquivo",
 add_url			: "Adicionar URL",
 ok				: "   OK   ",
 Cancel				: " Cancelar ",
 no				: "   No   ",
 
 mnu_add			: "Adicionar Torrent",
 mnu_remove			: "Excluir",
 mnu_start			: "Iniciar",
 mnu_pause			: "Pausar",
 mnu_stop			: "Parar",
 mnu_rss			: "Alimentadores RSS",
 mnu_settings			: "Preferências",
 mnu_search			: "Pesquisar",
 mnu_lang			: "Idioma",
 
 //Other variables added by spide
 torrent_add			: "Adicionar Torrent", /*Caption of torrent add box*/
 time_w				: "S ", /*for x weeks*/
 time_d				: "d ", /*for x days remaining*/
 time_h				: "h ", /*for x hours remaining*/
 time_m				: "m ", /*for x minutes remaining*/
 time_s				: "s ", /*for x seconds remaining*/

 //Novik's addition
 Base_directory    		: "Directory",
 Number_Peers_min		: "Minimum number of peers",
 Number_Peers_max		: "Maximum number of peers",
 Tracker_Numwant		: "Wished number of peers",
 Number_Peers_For_Seeds_min	: "Minimum number of seeds",
 Number_Peers_For_Seeds_max	: "Maximum number of seeds",
 Enable_port_open		: "Open listening port",
 dht_port			: "UDP port to use for DHT",
 Ather_Limiting			: "Other limitations",
 Number_dl_slots		: "Number of download slots",
 Glob_max_memory		: "Maximum memory usage",
 Glob_max_files			: "Maximum number of open files",
 Glob_max_http			: "Maximum number of open http connections",
 Glob_max_sockets		: "Maximum number of open sockets",
 Ather_sett			: "Other",
 Directory_For_Dl		: "Default directory for downloads",
 Check_hash			: "Check hash after download",
 Hash				: "Hash",
 IsOpen				: "Open",
 DisableTracker			: "Disable",
 EnableTracker			: "Enable",
 ClientVersion			: "Client",
 Flags				: "Flags",
 ReqTimeout			: "Request timeout",
 GetTrackerMessage		: "Receive messages from tracker",
 Help				: "Help",
 PHPDoesnt_enabled		: "Your Web-server does not support PHP. Correct this and try again.",
 Speed				: "Speed",
 Dont_add_tname			: "Don't add torrent's name to path", 
 Free_Disk_Space		: "Free disk space",
 badXMLRPCVersion		: "rTorrent is compiled with incorrect version of xmlrpc-c library, without i8 support. Version must be >= 1.11. Some functionality will be unavailable.",
 badLinkTorTorrent		: "Bad link to rTorrent. Check if it is really running. Check $scgi_port and $scgi_host settings in config.php and scgi_port in rTorrent configuration file.",
 badUploadsPath			: "Web-server can't access torrents directory for read/write/execute. You can't add torrents through ruTorrent.",
 badSettingsPath		: "Web-server can't access settings directory for read/write/execute. ruTorrent can't save own settings.",
 mnu_help			: "About",
 badUploadsPath2		: "rTorrent's user can't access torrents directory for read/execute. You can't add torrents through ruTorrent.",
 View				: "View",
 AsList				: "as list",
 AsTree				: "as tree",
 Group				: "Group",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent's user can't access file ./test.sh for read/execute. ruTorrent will not work.",
 badSettingsPath2		: "rTorrent's user can't access settings directory for read/write/execute. ruTorrent will not work.",
 scrapeDownloaded		: "Downloaded",
 badSessionPath			: "Web-server can't access rTorrent's session directory for read. ruTorrent will not work.",
 Total				: "Total",
 PCRENotFound			: "PHP module PCRE is not installed. ruTorrent will not work.",
 addTorrentSuccess		: "torrent was successfully passed to rTorrent.",
 addTorrentFailed		: "Error: torrent wasn't passed to rTorrent.",
 pnlState			: "State",
 newLabel			: "New Label",
 enterLabel			: "Enter Label",
 UIEffects			: "Show effects for UI elements",
 Plugins			: "Plugins",
 plgName			: "Name",
 plgStatus			: "Status",
 plgLoaded			: "Loaded",
 plgDisabled			: "Disabled",
 plgVersion			: "Version",
 plgAuthor			: "Author",
 plgDescr			: "Description",
 mnu_go				: "Go",
 pluginCantStart		: "plugin can't start for unknown reason.",
 doFastResume			: "Fast resume",
 innerSearch			: "Local torrents",
 removeTeg			: "Remove tag",
 errMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Plugin will not work.",
 warnMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Some functionality will be unavailable.",
 plgShutdown			: "Shutdown",
 limit				: "Limite",
 speedList			: "Speed popup list (comma-separated)"
 };
