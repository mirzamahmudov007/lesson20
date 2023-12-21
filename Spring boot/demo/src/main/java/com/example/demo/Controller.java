package com.example.demo;

import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.meta.generics.LongPollingBot;

public class Controller extends TelegramLongPollingBot{

    @Override
    public void onUpdateReceived(Update update) {
        if (update.hasMessage()){
            SendMessage sendMessage=new SendMessage();
            sendMessage.setChatId(update.getMessage().getChatId());
            sendMessage.setText(update.getMessage().getText());
            try {
                execute(sendMessage);
            } catch (TelegramApiException e) {
                throw new RuntimeException(e);
            }
        }

    }

    @Override
    public String getBotUsername() {
        return "t.me/prayerTimeUZ_bot";
    }

    @Override
    public String getBotToken() {
        return "6280677362:AAHYqcGMnmYbFwjrPRgua5McHzTvNeyGW_4";
    }
}
