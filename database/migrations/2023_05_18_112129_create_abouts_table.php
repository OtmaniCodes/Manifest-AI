<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abouts', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->text('body')->nullable();
            $table->string('image')->nullable();
            
            $table->string('ethical_title')->nullable();
            $table->text('ethical')->nullable();
            $table->string('ethical_image')->nullable();
            
            $table->string('sustainable_title')->nullable();
            $table->text('sustainable')->nullable();
            $table->string('sustainable_image')->nullable();
            
            $table->string('collaborative_title')->nullable();
            $table->text('collaborative')->nullable();
            $table->string('collaborative_image')->nullable();
            
            $table->string('research_title')->nullable();
            $table->text('research')->nullable();
            $table->string('research_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('abouts');
    }
};
