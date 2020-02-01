(function () {
    let count = 2;
    loadMovil(1);

    $('#btnCloseSession').click(function () {
        $.ajax({
            url: 'controller/closeSession.php',
            type: 'post',
            data: {closeSession: 1},
            dataType: 'text'
        }).done(function (result) {
            window.location.href = "index.php";

        }).fail(function (resFail) {
            console.log("Erroor");
        });

    });

    $('#btnNewRowCondRuta').click(function () {
        // alert(123);
        $.ajax({
            url: "controller/IndexPost.php",
            method: "post",
            data: {identifier: 1},
            dataType: "json"
        }).done(function (result) {
            var rutas = "";
            $.each(result[0], function (index, value2) {
                rutas += `<option value='${value2.id_ruta}'>${value2.ruta}</option>\n`;
            });
            console.log(rutas);
            var conductores = "";
            $.each(result[1], function (index, value2) {
                conductores += `<option value='${value2.id_conductor}'>${value2.nombre}</option>\n`;
            });
            console.log(conductores);
            let html = '                        <tr>\n' +
                '                           <td style="padding: 0;">\n' +
                '                               <div class="field">\n' +
                '                                   <div class="control">\n' +
                '                                       <input class="input" type="date" name="date' + count + '">\n' +
                '                                   </div>\n' +
                '                               </div>\n' +
                '                           </td>\n' +
                '                            <td style="padding: 0;">\n' +
                '                               <div class="field">\n' +
                '                                   <div class="control">\n' +
                '                                       <select style=" width: 100%; outline: none; border: 1px solid #dbdbdb" class="select" name="ruta' + count + '">' +
                rutas +
                '                                   </select>\n' +
                '                                   </div>\n' +
                '                               </div>\n' +
                '                           </td>\n' +
                '                            <td style="padding: 0;">\n' +
                '                               <div class="field">\n' +
                '                                   <div class="control">\n' +
                '                                       <select id="selectCond' + count + '" style="width: 100%; outline: none; border: 1px solid #dbdbdb" class="select" name="conductor' + count + '" >' +
                conductores +
                '                               </select>\n' +
                '                                       </select>\n' +
                '                                   </div>\n' +
                '                               </div>\n' +
                '                           </td>\n' +
                '                           <td style="padding: 0;">\n' +
                '                                   <div class="field">\n' +
                '                                       <div class="control">\n' +
                '                                           <input id="movil' + count + '" class="input " type="text" name="movil' + count + '" value="002"  disabled=""></div>\n' +
                '                                   </div>\n' +
                '                               </td>\n' +
                '                           <td style="padding: 0;">\n' +
                '                               <div class="field">\n' +
                '                                   <div class="control">\n' +
                '                                       <input class="input" type="time" name="time' + count + '">\n' +
                '                                   </div>\n' +
                '                               </div>\n' +
                '                           </td>\n' +
                '                        </tr>\n';

            $('#table-conductorRuta tbody:last-child').append(html);
            loadMovil(count);
            count++;
        }).fail(function (fail) {
            console.log("???")
        });
    });

    $('#btnNewRowRuta').click(function () {
        let html = '    <tr>\n' +
            '        <td style="padding: 0;">\n' +
            '            <div class="field">\n' +
            '                <div class="control is-disabled">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </td>\n' +
            '        <td style="padding: 0;">\n' +
            '            <div class="field">\n' +
            '                <div class="control">\n' +
            '                    <input class="input" type="text" name="partidaRuta' + count + '" placeholder="Añadir partida">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </td>\n' +
            '        <td style="padding: 0;">\n' +
            '            <div class="field">\n' +
            '                <div class="control">\n' +
            '                    <input class="input" type="text" name="destinoRuta' + count + '" placeholder="Añadir destino">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </td>\n' +
            '        <td style="padding: 0;">\n' +
            '            <div class="field">\n' +
            '                <div class="control">\n' +
            '                    <input class="input" type="number" name="valorRuta' + count + '" placeholder="Añadir valor $">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </td>\n' +
            '        <td style="padding: 0;">\n' +
            '            <div class="field">\n' +
            '                <div class="control">\n' +
            '                    <select style=" width: 100%; outline: none; border: 1px solid #dbdbdb;" class="select"\n' +
            '                            name="tipoRuta' + count + '">\n' +
            '                        <option value="expreso">Expreso</option>\n' +
            '                        <option value="normal">Normal</option>\n' +
            '                    </select>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </td>\n' +
            '    </tr>\n';
        count++;
        $('#tableRutas tbody:last-child').append(html);

    });

    $('#btnNewRowConductor').click(function () {
        let html = '    <tr>\n' +
            '        <td style="padding: 0;">\n' +
            '            <div class="field">\n' +
            '                <div class="control">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </td>\n' +
            '        <td style="padding: 0;">\n' +
            '            <div class="field">\n' +
            '                <div class="control">\n' +
            '                    <input class="input" type="text" name="condConductor' + count + '" placeholder="Añadir conductor">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </td>\n' +
            '        <td style="padding: 0;">\n' +
            '            <div class="field">\n' +
            '                <div class="control">\n' +
            '                    <input class="input" type="text" name="apellidosConductor' + count + '" placeholder="Añadir apellidos">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </td>\n' +
            '        <td style="padding: 0;">\n' +
            '            <div class="field">\n' +
            '                <div class="control">\n' +
            '                    <input class="input" type="tel" name="telConductor' + count + '" placeholder="Añadir telefono">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </td>\n' +
            '    </tr>\n';
        count++;
        $('#tableConductores tbody:last-child').append(html);
    });

    $('#btnNewRowVehiculo').click(function () {
        $.ajax({
            url: "controller/IndexPost.php",
            method: "post",
            data: {identifier: 2},
            dataType: "json"
        }).done(function (result) {
            let conductores = "";
            $.each(result[0], function (index, value2) {
                conductores += `<option value='${value2.id_conductor}'>${value2.nombre}</option>\n`;
            });
            let html = '  <tr>\n' +
                '        <td style="padding: 0;">\n' +
                '            <div class="field">\n' +
                '                <div class="control">\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </td>\n' +
                '        <td style="padding: 0;">\n' +
                '            <div class="field">\n' +
                '                <div class="control">\n' +
                '                    <select style=" width: 100%; outline: none; border: 1px solid #dbdbdb;" class="select"\n' +
                '                            name="condMovil' + count + '">\n' +
                conductores +
                '                    </select>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </td>\n' +
                '        <td style="padding: 0;">\n' +
                '            <div class="field">\n' +
                '                <div class="control">\n' +
                '                    <input class="input" type="text" name="movilVehiculo' + count + '" placeholder="Número del móvil">\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </td>\n' +
                '    </tr>';
            count++;
            $('#tableVehiculos tbody:last-child').append(html);
        }).fail(function (fail) {
            console.log("???")
        });


    });

    $('#menuOptionCondRutas').click(function () {
        count = 2;
        $(this).addClass('is-active');
        $('#menuOptionRutas').removeClass('is-active');
        $('#menuOptionCondutores').removeClass('is-active');
        $('#menuOptionVehiculo').removeClass('is-active');
        $('#table1').removeClass('is-hidden');
        $('#table2').addClass('is-hidden');
        $('#table3').addClass('is-hidden');
        $('#table4').addClass('is-hidden');
    });

    $('#menuOptionRutas').click(function () {
        $(this).addClass('is-active');
        $('#menuOptionCondRutas').removeClass('is-active');
        $('#menuOptionCondutores').removeClass('is-active');
        $('#menuOptionVehiculo').removeClass('is-active');
        $('#table2').removeClass('is-hidden');
        $('#table1').addClass('is-hidden');
        $('#table3').addClass('is-hidden');
        $('#table4').addClass('is-hidden');
    });

    $('#menuOptionCondutores').click(function () {
        $(this).addClass('is-active');
        $('#menuOptionRutas').removeClass('is-active');
        $('#menuOptionCondRutas').removeClass('is-active');
        $('#menuOptionVehiculo').removeClass('is-active');
        $('#table3').removeClass('is-hidden');
        $('#table1').addClass('is-hidden');
        $('#table2').addClass('is-hidden');
        $('#table4').addClass('is-hidden');
    });

    $('#menuOptionVehiculo').click(function () {
        count = 2;
        $(this).addClass('is-active');
        $('#menuOptionRutas').removeClass('is-active');
        $('#menuOptionCondRutas').removeClass('is-active');
        $('#menuOptionCondutores').removeClass('is-active');
        $('#table4').removeClass('is-hidden');
        $('#table1').addClass('is-hidden');
        $('#table2').addClass('is-hidden');
        $('#table3').addClass('is-hidden');

    });

    function loadMovil(number) {
        $('#selectCond' + number).on('change', function () {
            // alert(2342);
            let value = $(this).val();
            console.log(value);
            // let value = $(this).children('option:selected').val();
            if (value) {
                $.ajax({
                    url: 'controller/IndexPost.php',
                    type: 'post',
                    data: {
                        identifier: 3,
                        select: value
                    },
                    dataType: 'json'
                }).done(function (result) {
                    console.log(result);
                    // console.log($('#movilCond1'));
                    $('#movil' + number).val(result[0].movil);
                }).fail(function (fail) {
                    console.log('??');
                });
            }
        })
    }

}());