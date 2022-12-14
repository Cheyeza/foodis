PGDMP                         z            foodis    14.5    14.5                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    32804    foodis    DATABASE     Q   CREATE DATABASE foodis WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE foodis;
                postgres    false            ?            1259    41007    booking    TABLE     ?   CREATE TABLE public.booking (
    id integer NOT NULL,
    option text,
    booking_status text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    user_id integer,
    food_id integer
);
    DROP TABLE public.booking;
       public         heap    postgres    false            ?            1259    41014    booking_id_seq    SEQUENCE     ?   ALTER TABLE public.booking ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.booking_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    213            ?            1259    40999    food    TABLE     ?   CREATE TABLE public.food (
    id integer NOT NULL,
    name text,
    image text,
    price double precision,
    category text,
    description text
);
    DROP TABLE public.food;
       public         heap    postgres    false            ?            1259    41006    food_id_seq    SEQUENCE     ?   ALTER TABLE public.food ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.food_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    211            ?            1259    32805    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    firstname text,
    lastname text,
    email text,
    password text
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    32812    users_id_seq    SEQUENCE     ?   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2134567
    CACHE 1
);
            public          postgres    false    209                      0    41007    booking 
   TABLE DATA           [   COPY public.booking (id, option, booking_status, created_at, user_id, food_id) FROM stdin;
    public          postgres    false    213   ?       	          0    40999    food 
   TABLE DATA           M   COPY public.food (id, name, image, price, category, description) FROM stdin;
    public          postgres    false    211   ?                 0    32805    users 
   TABLE DATA           I   COPY public.users (id, firstname, lastname, email, password) FROM stdin;
    public          postgres    false    209   }                  0    0    booking_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.booking_id_seq', 54, true);
          public          postgres    false    214                       0    0    food_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.food_id_seq', 3, true);
          public          postgres    false    212                       0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 60, true);
          public          postgres    false    210            v           2606    41013    booking booking_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.booking DROP CONSTRAINT booking_pkey;
       public            postgres    false    213            t           2606    41005    food food_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.food
    ADD CONSTRAINT food_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.food DROP CONSTRAINT food_pkey;
       public            postgres    false    211            r           2606    32811    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    209            w           1259    41027    fki_bk_id_fk    INDEX     >   CREATE INDEX fki_bk_id_fk ON public.booking USING btree (id);
     DROP INDEX public.fki_bk_id_fk;
       public            postgres    false    213            x           1259    41033    fki_food_id_fk    INDEX     E   CREATE INDEX fki_food_id_fk ON public.booking USING btree (food_id);
 "   DROP INDEX public.fki_food_id_fk;
       public            postgres    false    213            y           1259    41021    fki_user_id_fk    INDEX     @   CREATE INDEX fki_user_id_fk ON public.booking USING btree (id);
 "   DROP INDEX public.fki_user_id_fk;
       public            postgres    false    213            z           2606    41028    booking food_id_fk    FK CONSTRAINT     p   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT food_id_fk FOREIGN KEY (food_id) REFERENCES public.food(id);
 <   ALTER TABLE ONLY public.booking DROP CONSTRAINT food_id_fk;
       public          postgres    false    211    213    3444            {           2606    41034    booking user_id_fk    FK CONSTRAINT     q   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);
 <   ALTER TABLE ONLY public.booking DROP CONSTRAINT user_id_fk;
       public          postgres    false    3442    213    209               ?  x?u?Mn?0???)r????C????L???Q??@J??3m??H#no??>no?۟??????F????D??h???cSۨ!m/??? ?uٻ?"0u??7?+PȄ;/Rj????m?z???%K?I?s?.үHAP??I?K?A'?wΚq ?D?I???W#??&??l?Fּp(?Ĩ4ya??UAh]7?0(?????j???L ?Ĵ?ڡ ?s?a???!A2;??k??@]ɵC]"??u?u?/gV?U??"?,?V? 9?!??$׺?6TUp??ێ?i?H6????Q?9?o?9?Hi?nƶT??40;?%?t?LH/?????IaIM`?3?U??"=jE?sG?l?????????|???F1\??I??>?`CpY֤ʷ?JGj}Y֤?w??=U?*??p?ђ?6??2v??T?jN?x?$X?	? ???ޭ?$$(?r?i5	A?ѹ?+?ZB?ʸ??Zk~\X      	   ?   x???MN?  ?5????t??kG?V7??7@????NOoRo`?????Sp??Rb?g,an?U?OH?V??)Sb?#~3;?FV????~ǡ;???s?=???_?0??P?p׎Q??@\(@`??⑊?????Z??A̸?&????;??p??p????/??j??hi?t???l???????J??7??,???a??F??RJ ?T)         e  x?e??n?@E??s??????G???bQH7ÀBQ??kk?4q?%??Ź?!???I???&e%Ҧ5?(?^?](?Zǝ?^\_<I8?J>)*?mi?S?ϵΘkdֳq<vX??E>?W?? ???q?jA??M?5y@Ȗg_?7o????qhT\?>qK?3'Z'?j?7?b?I??ӣ?C??A??????fv?*R?Ն???Ũ??y?ٍ98N Ň?J.n)?'p?)'?\??>?Q?GY?{k?ev,]1?7(??S#??3???"?Ө1=o??z1??
????????H?s??viK??K-??m?&?L{??^t??i???B??o?&U	88???j???.|?? |:]??     