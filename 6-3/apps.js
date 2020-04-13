var user_hand =  prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');


user_hand　= check_hand(user_hand);
if (user_hand == null){
    alert('またチャレンジしてね！')
}
else{
var js_hand = make_jshand();

var match_result = result(user_hand, js_hand);

alert('あなたが出した手は、'+ user_hand + 'です。\njsが出した手は'+ js_hand + 'です。\n結果はあなたの'+ match_result + 'です。');


}

function check_hand(user_hand){
    if (user_hand == "グー" || user_hand == "チョキ" || user_hand == "パー"){
    }
    else{
        while (user_hand != "グー" && user_hand != "チョキ" && user_hand != "パー"  && user_hand != null){
            user_hand =  prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
        }
    }
    return user_hand;
}



function make_jshand(){
    var js_hand_num = Math.floor(Math.random() * 3);
    var js_hand;
    if (js_hand_num == 0){
        js_hand = "グー";
    }
    else if (js_hand_num == 1){
        js_hand = "チョキ";
    }
    else{
        js_hand = "パー";
    }
    return js_hand;
}

function result(user_hand, js_hand){
    var result;
    if (user_hand == "グー"){
        if (js_hand == "グー"){
            result = "引き分け";
        }
        else if(js_hand == "チョキ"){
            result = "勝ち";
        }
        else{
            result = "負け";
        }
    }
    else if (user_hand == "チョキ"){
        if (js_hand == "グー"){
            result = "負け";
        }
        else if(js_hand == "チョキ"){
            result = "引き分け";
        }
        else{
            result = "勝ち";
        }
    }
    else{
        if (js_hand == "グー"){
            result = "勝ち";
        }
        else if(js_hand == "チョキ"){                
            result = "負け";
        }
        else{
            result = "引き分け";
        }
    }
    return result;
}